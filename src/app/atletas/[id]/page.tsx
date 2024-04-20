import { use } from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { getAthleteProfileStructuredData, getWcaProfile } from '@/app/actions'
import { athletesId_WCA, rootUrl } from '@/biocube-data'
import { GenerateMetadataProps, ProfileParamsProps } from '@/types'
import Head from 'next/head'

export default function AthleteProfile({ params }: ProfileParamsProps) {
    const { id: wcaId } = params
    if(!athletesId_WCA.includes(wcaId)) notFound()

    const wcaInfo = use(getWcaProfile(wcaId))
    const structuredData = use(getAthleteProfileStructuredData(wcaInfo))

    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <div>Atleta {wcaId}</div>
        </>
    )
}

export async function generateMetadata(
    { params, searchParams }: GenerateMetadataProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id: wcaId } = params

    if(!athletesId_WCA.includes(wcaId)) return {}
    const wcaInfo = await getWcaProfile(wcaId)

    return {
        title: `Biocube - Atleta ${wcaInfo.name}`,
        description: `Conheça nosso(a) atleta Biocube de cubo mágico ${wcaInfo.name}.`,
        keywords: [
            'biocube',
            'cubo magico',
            'atletas',
            'speedcuber',
            'cubista',
            'perfil',
            'wca',
            wcaId,
            wcaInfo.name
        ],
        openGraph: {
            url: `${rootUrl}/atletas/${wcaId}`,
            title: `Biocube - Atleta ${wcaInfo.name}`,
            description: `Conheça nosso(a) atleta Biocube de cubo mágico ${wcaInfo.name}.`,
            images: [
                {
                    url: `${rootUrl}/assets/profiles/p_${wcaId}.png`,
                    width: 200,
                    height: 200,
                    alt: `Perfil do(a) atleta ${wcaInfo.name}.`
                }
            ]
        },
        twitter: {
            title: `Biocube - Atleta ${wcaInfo.name}`,
            description: `Conheça nosso(a) atleta Biocube de cubo mágico ${wcaInfo.name}.`,
            images: [
                {
                    url: `${rootUrl}/assets/profiles/p_${wcaId}.png`,
                    width: 200,
                    height: 200,
                    alt: `Perfil do(a) atleta ${wcaInfo.name}.`
                }
            ]
        }
    }
}