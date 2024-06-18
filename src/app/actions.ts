'use server'

import {
    type ApiVideosType,
    type ContactFormData,
    type FormFallbackState,
    type WcaInfoType,
    WCA_ID,
} from '@/types'

import {
    teamBiocubeInfo,
    emailBiocube,
    rootUrl,
    wcaApi,
    youtubeApi
} from '@/biocube-data'
import { formFallback } from '@/utils'

import { EmailTemplate } from '@/components/email-template'

import { Resend } from 'resend'
import { z }      from 'zod'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_V3_KEY || ''

/* -------------------------------------------------- */

export async function getWcaProfile(wcaId: WCA_ID) {
    const wcaInfo: WcaInfoType | null = await fetch(`${wcaApi}/persons/${wcaId}.json`, {
        method: 'GET',
        next: {
            revalidate: 60 * 60 * 24 // 24 hours
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err)
        return null
    })

    return wcaInfo
}

export async function getAthleteProfileStructuredData(wcaInfo: WcaInfoType) {
    const wcaInfoId = wcaInfo.id as WCA_ID

    const profileStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            name: wcaInfo.name,
            identifier: wcaInfoId,
            athlete: [{
                '@type': 'Person',
                name: wcaInfo.name,
                identifier: wcaInfoId,
            }],
            description: 'Atleta Biocube de cubo mágico',
            sport: 'Cubo Mágico',
            affiliation: 'Biocube',
            // email: 'athlete@gmail.com',
            // gender: 'female',
            // birthDate: '1999-11-22',
            // birthPlace: 'São Paulo, SP',
            // award: 'Campeã Brasileira de Cubo Mágico, ocupando o 1° lugar no evento BahiaCubo2024.',
            dateCreated: wcaInfoId.slice(0, 4),                      // '2019-12-23T12:34:00-05:00' - Criação do perfil WCA
            dateModified: Object.keys(wcaInfo.results)[0].slice(-4), // '2024-12-26T14:53:00-05:00' - Última modificação do perfil WCA
            keywords: `cubo mágico, cubista, biocube, atleta, speedcuber, ${wcaInfo.name}, ${wcaInfoId}`,
            logo: `${rootUrl}/favicon.ico`,
            image: `${rootUrl}/assets/profiles/p_${wcaInfoId}.png`,
            contentUrl: `${rootUrl}/atletas/${wcaInfoId}`,
            sameAs: [
                teamBiocubeInfo[wcaInfoId].social.youtube,
                teamBiocubeInfo[wcaInfoId].social.instagram,
                teamBiocubeInfo[wcaInfoId].social.wca
            ]
        }
    }
    const imageStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        contentUrl: `${rootUrl}/assets/profiles/p_${wcaInfo.id}.png`,
        license: rootUrl,
        acquireLicensePage: `${rootUrl}/sobre`,
        creditText: 'Biocube',
        copyrightNotice: wcaInfo.name
    }

    return [profileStructuredData, imageStructuredData]
}

/* -------------------------------------------------- */

export async function getCubePlaylist(playlistId: string) {
    const playlist: { items: ApiVideosType[] } | null = await fetch(`${youtubeApi}/playlistItems?part=snippet&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}&fields=items(snippet(title,description,resourceId(videoId)))&maxResults=7`, {
        method: 'GET',
        next: {
            revalidate: 60 * 60 * 24 * 30 * 6 // 6 Months
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err)
        return null
    })

    if(!playlist) return null

    return playlist.items
}

/* -------------------------------------------------- */

export const sendMessage = async (prevFallbackState: FormFallbackState, formData: FormData): Promise<FormFallbackState> => {
    const rawFormData = Object.fromEntries(formData) as { [key: string]: string }

    const { fallbackMessage, fallbackStatus } = validateFormData(rawFormData)
    if (fallbackStatus === 'error') return { fallbackMessage, fallbackStatus }

    const data: ContactFormData = {
        firstName: rawFormData['first-name'],
        lastName: rawFormData['last-name'],
        email: rawFormData.email,
        phone: rawFormData.phone,
        message: rawFormData.message,
        date: new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'long',
            timeStyle: 'long',
            timeZone: 'America/Sao_Paulo',
        }).format(new Date())
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
        from: 'Biocube@resend.dev',
        to: [emailBiocube],
        subject: `Email de contato - Site Biocube`,
        react: EmailTemplate(data)
    })

    if (error) {
        console.error(error)
        return {
            fallbackMessage: formFallback.error,
            fallbackStatus: 'error'
        }
    }

    return {
        fallbackMessage: formFallback.success,
        fallbackStatus: 'success'
    }
}

const validateFormData = (rawFormData: { [key: string]: string }) => {
    if (Object.keys(rawFormData).length === 0) return { fallbackMessage: formFallback.error, fallbackStatus: 'error' }

    const requiredFields = ['first-name', 'last-name', 'email', 'phone', 'message']
    for (const field of requiredFields) {
        if (!rawFormData.hasOwnProperty(field)) return { fallbackMessage: formFallback.error, fallbackStatus: 'error' }
    }

    const contactFormSchema = z.object({
        'first-name': z.string().min(3, { message: formFallback.min.firstName }).max(10, { message: formFallback.max.firstName }),
        'last-name': z.string().min(3, { message: formFallback.min.lastName }).max(10, { message: formFallback.max.lastName }),
        email: z.string().min(5, { message: formFallback.min.email }).max(50, { message: formFallback.max.email }).email({ message: formFallback.email }),
        phone: z.string().min(10, { message: formFallback.min.phone }).max(11, { message: formFallback.max.phone }).regex(/^\d+$/, { message: formFallback.phone }),
        message: z.string().min(10, { message: formFallback.min.message }).max(600, { message: formFallback.max.message }),
    })

    const validationResult = contactFormSchema.safeParse(rawFormData)

    if (!validationResult.success) {
        const errorMessage = validationResult.error.issues[0].message
        // const errorMessageList = validationResult.error.issues.map((issue) => issue.message).join(' ')
        return { fallbackMessage: errorMessage, fallbackStatus: 'error' }
    }

    return { fallbackMessage: '', fallbackStatus: 'success' }
}

/* -------------------------------------------------- */