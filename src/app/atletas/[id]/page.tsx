import {
    WCA_ID,
    type GenerateMetadataProps,
    type ProfileParamsProps
} from '@/types'

import {
    getAthleteProfileStructuredData,
    getWcaProfile
} from '@/app/actions'
import {
    athletesId_WCA,
    rootUrl
} from '@/biocube-data'

import { quattrocento }     from '@/app/fonts'
import { useProfileImages } from '@/hooks/useProfileImages'
import { processText }      from '@/utils'

import { Background }         from '@/components/background'
import { SocialMediaButtons } from '@/components/social-media-buttons'
import { PersonalWCARecords } from '@/components/personal-wca-records'

import { use } from 'react'
import {
    Metadata,
    ResolvingMetadata
} from 'next'
import { notFound } from 'next/navigation'

import Image from 'next/image'
import Head  from 'next/head'

export default function AthleteProfile({ params }: ProfileParamsProps) {
    const { id: wcaId } = params
    if(!athletesId_WCA.includes(wcaId)) notFound()

    const wcaInfo = use(getWcaProfile(wcaId))
    const structuredData = use(getAthleteProfileStructuredData(wcaInfo))

    const { profileImageList } = useProfileImages()

    const athleteDescription = (wcaId: WCA_ID): string => {
        switch(wcaId) {
            case WCA_ID.TIAGO_DIAS:       return processText('*“*Olá, eu sou o *Tiago*, sou cuber desde 2018, senti falta de bons produtos no ^Brasil^ e resolvi criar a *Biocube* oferecendo um serviço _personalizado e extremamente profissional_ aos atletas e entusiastas do esporte. Além disso pratico muito o cubo para ajudar com a minha ansiedade e a controlar as 20 milhões de ideias que tenho diariamente. Em 2022 participei da minha primeira competição presencial e isso sem dúvidas foi um marco na minha vida. _Obrigado a todos vocês_ que estavam lá.*”*')
            case WCA_ID.SUZANE_COELHO:    return processText('*“*Olá! Me chamo *Suzane Coelho*, e estou no mundo do cubo mágico desde março de 2016. Minha história com o cubo foi amor à primeira vista: comprei um cubo, aprendi a resolvê-lo e, depois disso, nunca pensei em parar. Criei um canal no °YouTube° sobre o tema em 2020 e com ele venho alcançando várias conquistas e objetivos. Atualmente tenho o sonho de ser o maior canal do ^Brasil^ sobre o tema cubo mágico e estou focada em alcançar esse propósito!*”*')
            case WCA_ID.CAIO_SATO:        return processText('*“*Olá, me chamo *Caio Sato* e aprendi a montar o cubo com um tutorial da internet, comecei a gostar de cubos no início de 2015, quando via vídeos no °YouTube° e achei o cubo. Atualmente sou _recordista_ &sul-americano& na modalidade 3x3 dentre diversas outras conquistas em modalidades diferentes que você pode verificar aqui abaixo no meu perfil na &W&^C^°A° e nas minhas redes sociais.*”*')
            case WCA_ID.MARIO_DIAS:       return processText('*“*Olá, meu nome é *Mario Dias* e sou cubistas desde junho de 2017. Minha história começou quando eu vi alguns vídeos na Internet de alguns cubistas e _fiquei curioso_ por saber como montar? Então vi alguns tutoriais e aprendi depois de algum tempo participei do meu *1° campeonato* em março de 2019. Essa experiência com os cubos foi ótima para mim pessoalmente e sem contar as _amizades feitas_ com ela! *”*')
            case WCA_ID.PEDRO_CONTREIRAS: return processText('*“*Me chamo *Pedro Contreiras Moura*, aprendi a montar o cubo mágico 3x3 em março de 2020 com _6 anos_. Atualmente treino 12 modalidades oficiais da WCA, exceto BLD. Minha primeira competição oficial foi o Campeonato &sul-americano& 2022 onde consegui ótimos resultados que você pode conferir aqui abaixo no meu perfil oficial da &W&^C^°A° e nas minhas redes sociais.*”*')
            case WCA_ID.MARIA_GAROLA:     return processText('*“*Meu nome é *Maria Clara*, sou de Santos-SP e aprendi a montar cubos na Pandemia. Sempre fiz vários esportes, nunca consegui ficar parada e na pandemia fiquei ansiosa, foi quando descobri no °Youtube° os cubos e nunca mais parei, sempre pedindo cubos diferentes pra minha mãe e aprendendo todos. Quero continuar, quero baixar cada dia meus tempos e _inspirar outras meninas_ assim como eu entrar neste mundo maravilhoso do cubo mágico.*”*')
            case WCA_ID.PEDRO_SASAKI:     return processText('*“*Meu chamo *Sasaki* (|Pedro mas sou conhecido como Sasaki|) no fim de 2019 vi minha prima montando cubo na casa da minha avó, pedi a ela para me ensinar e estou até hoje resolvendo cubos. Meu foco são os *Big Cubes* meu objetivo maior é buscar as primeiras colocações nestas modalidades, _obrigado pelo carinho de todos vocês_, seria difícil estar aqui hoje sem o apoio de vocês. Acompanhem minhas redes sociais e meus resultados oficiais na &W&^C^°A° nos links aqui embaixo.*”*')
            case WCA_ID.AUGUSTO_KLAPPOTH: return processText('*“*Me chamo *Augusto Klappoth*, meu interesse pelo cubo mágico começou em 2021 quando _alguns amigos levaram cubos para a escola_. Aprendi a resolver o 3x3 e meu interesse só aumentou. Participei da minha primeira competição em 2022 e estou sempre buscando melhorar. Minhas modalidades principais são 3x3, 3x3 OH e Skewb. Você pode acompanhar meus resultados em minhas redes sociais e no meu perfil da &W&^C^°A°.*”*')
            default: return processText('*“*...*”*')
        }
    }

    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <Background type='top' />

            <main className='md:pt-12 lg:pt-20 xl:pt-24 pb-[5.625rem] xl:pb-40'>
                <div className='w-full flex flex-col items-center gap-4 lg:gap-6'>
                    <Image
                        className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] border border-glacier-white/25 rounded-full'
                        src={profileImageList[wcaId]}
                        width={200}
                        height={200}
                        placeholder='blur'
                        priority={true}
                        alt={`Image de perfil WCA de ${wcaInfo.name}`}
                    />

                    <div className='w-full flex flex-col items-center gap-2 lg:gap-4'>
                        <h1 className={`${quattrocento.className} uppercase text-center text-3xl sm:text-[2.5rem] md:text-5xl lg:text-6xl`}>{wcaInfo.name}</h1>
                        <p className={`w-full max-w-[47.375rem] xl:max-w-[57rem] ${quattrocento.className} text-center text-wrap leading-5 sm:text-lg sm:leading-[1.375rem] md:text-xl md:leading-6 xl:text-2xl`} dangerouslySetInnerHTML={{ __html: athleteDescription(wcaId)}} />
                    </div>
                </div>

                <PersonalWCARecords infoRaw={wcaInfo}  />

                <div className='w-full flex flex-col items-center gap-4'>
                    <h2 className='w-fit uppercase font-medium text-xl md:text-2xl lg:text-3xl'>Me siga nas redes</h2>

                    <div className='flex justify-center flex-wrap gap-4'>
                        <SocialMediaButtons personId={wcaId}  />
                    </div>
                </div>
            </main>
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