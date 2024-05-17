'use server'

import type {
    ContactFormData,
    FormFallbackState,
    WCA_ID,
    WcaInfoType
} from '@/types'

import {
    teamBiocubeInfo,
    emailBiocube,
    rootUrl,
    wcaApi
} from '@/biocube-data'

import { EmailTemplate } from '@/components/email-template'

import { Resend } from 'resend'
import { z }      from 'zod'

/* -------------------------------------------------- */

export async function getWcaProfile(wcaId: string) {
    const wcaInfo: WcaInfoType = await fetch(`${wcaApi}/persons/${wcaId}.json`, {
        method: 'GET',
        next: {
            revalidate: 60 * 60 * 24 * 7 * 4 * 5 // 6 Months
        }
    }).then(res => res.json())

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
        '@context': 'https://schema.org/',
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

const fallback = {
    success: 'Mensagem enviada com sucesso!',
    error: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
    min: {
        firstName: 'O nome precisa conter mais de 2 caracteres.',
        lastName: 'O sobrenome precisa conter mais de 2 caracteres.',
        email: 'O email precisa conter mais de 4 caracteres.',
        phone: 'O telefone precisa conter mais de 9 dígitos.',
        message: 'A mensagem precisa conter mais de 9 caracteres.'
    },
    max: {
        firstName: 'O nome precisa conter no máximo 10 caracteres.',
        lastName: 'O sobrenome precisa conter no máximo 10 caracteres.',
        email: 'O email precisa conter no máximo 50 caracteres.',
        phone: 'O telefone precisa conter no máximo 11 dígitos.',
        message: 'A mensagem precisa conter no máximo 600 caracteres.'
    },
    email: 'Email inválido.',
    phone: 'O telefone precisa conter somente caracteres numéricos.'
}

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
            fallbackMessage: fallback.error,
            fallbackStatus: 'error'
        }
    }

    return {
        fallbackMessage: fallback.success,
        fallbackStatus: 'success'
    }
}

const validateFormData = (rawFormData: { [key: string]: string }) => {
    if (!rawFormData) return { fallbackMessage: fallback.error, fallbackStatus: 'error' }

    const contactFormSchema = z.object({
        'first-name': z.string().min(3, { message: fallback.min.firstName }).max(10, { message: fallback.max.firstName }),
        'last-name': z.string().min(3, { message: fallback.min.lastName }).max(10, { message: fallback.max.lastName }),
        email: z.string().min(5, { message: fallback.min.email }).max(50, { message: fallback.max.email }).email({ message: fallback.email }),
        phone: z.string().min(10, { message: fallback.min.phone }).max(11, { message: fallback.max.phone }).regex(/^\d+$/, { message: fallback.phone }),
        message: z.string().min(10, { message: fallback.min.message }).max(600, { message: fallback.max.message }),
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