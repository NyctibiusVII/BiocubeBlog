import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type Modalities =
    | '222'
    | '333'
    | '444'
    | '555'
    | '666'
    | '777'
    | '333bf'
    | '333fm'
    | '333oh'
    | '333ft'
    | 'clock'
    | 'minx'
    | 'pyram'
    | 'skewb'
    | 'sq1'
    | '444bf'
    | '555bf'
    | '333mbf'
type EventRound = {
    round: string
    position: number
    best: number
    average: number
    format: string
    solves: Array<number>
}
export type RankingData = {
    eventId?: Modalities,
    best?: number,
    rank?: {
        world: number,
        continent: number,
        country: number
    }
}
export interface WcaInfoType {
    id: string
    name: string
    slug: string
    country: string
    numberOfCompetitions: number
    competitionIds: Array<string>
    numberOfChampionships: number
    championshipIds: Array<string>
    rank: {
        singles: Array<RankingData>
        averages: Array<RankingData>
    }
    results: {
        [key: string]: {
            [key in Modalities]: Array<EventRound>
        }
    }
    medals: {
        gold: number
        silver: number
        bronze: number
    }
    records: {
        single: {
            WR?: number
            CR?: number
            NR?: number
        }
        average: {
            WR?: number
            CR?: number
            NR?: number
        }
    }
}

/* -------------------------------------------------- */

export enum APP_ROUTES_NAME {
    HOME      = 'PRINCIPAL',
    ATHLETES  = 'ATLETAS',
    PARTNERS  = 'PARCEIROS',
    TUTORIALS = 'TUTORIAIS',
    ABOUT     = 'SOBRE NÓS'
}
export enum PARTNER_SLUG {
    BODOCO = 'bodoco',
    MACAE  = 'macae'
}
export enum WCA_ID {
    TIAGO_DIAS       = '2022DIAS04',
    SUZANE_COELHO    = '2016COEL04',
    CAIO_SATO        = '2016SATO01',
    MARIO_DIAS       = '2019DIAS02',
    PEDRO_CONTREIRAS = '2022MOUR01',
    MARIA_GAROLA     = '2022LIMA01',
    PEDRO_SASAKI     = '2022SASA03',
    AUGUSTO_KLAPPOTH = '2022KLAP01'
}
export enum BIOCUBE_ID {
    MATEUS_MELO     = 'MateusMelo',
    GUSTAVO_DULLENS = 'GustavoDullens',
    VITOR_WAGNER    = 'VitorWagner'
}

/* -------------------------------------------------- */

export type PartnerParamsProps = {
    params: { slug: PARTNER_SLUG }
}
export type PartnerContentProps = {
    banner:      StaticImageData
    bannerTitle: Array<string>
    title:       string
    paragraphs:  Array<string>
    images:      Array<string>
}
export type ProfileParamsProps = {
    params: { id: WCA_ID }
}
export type ProfileCardContentProps = {
    personId:   WCA_ID | BIOCUBE_ID
    name:       string
    occupation: string
    primaryColor:
        | 'white'
        | 'green'
        | 'orange'
        | 'purple'
    isAthlete:  boolean
}
export interface ProfileCardProps {
    info: ProfileCardContentProps
}
export interface GenerateMetadataProps extends ProfileParamsProps {
    searchParams: { [key: string]: string | string[] | undefined }
}

/* -------------------------------------------------- */

export type MenuItensType = {
    href: string
    content: APP_ROUTES_NAME
}
export type SocialMediaButtonsType = {
    personId: WCA_ID | BIOCUBE_ID
    isShort?: boolean
    fallback?: ReactNode
    className?: string
}
export type ApiVideosType = {
    snippet: {
        title: string
        description: string
        resourceId: {
            videoId: string
        }
    }
}
export interface YoutubePlaylistProps {
    videos: ApiVideosType[]
    cubeTutorialImages: {
        src: string
        alt: string
    }[]
}

/* -------------------------------------------------- */

export type FormFallbackState = {
    fallbackMessage: string
    fallbackStatus: 'idle' | 'success' | 'error'
}
export type ContactFormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
    date: string
}