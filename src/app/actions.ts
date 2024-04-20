'use server'

import { athletesBiocubeSocial, rootUrl, wcaApi } from '@/biocube-data'
import { WCA_ID, WcaInfoType } from '@/types'

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
                athletesBiocubeSocial[wcaInfoId].youtube,
                athletesBiocubeSocial[wcaInfoId].instagram,
                athletesBiocubeSocial[wcaInfoId].wca
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