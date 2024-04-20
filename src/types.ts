type Modalities =
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
    | '333mbo'
type EventRound = {
    round: string
    position: number
    best: number
    average: number
    format: string
    solves: Array<number>
}
type RankingData = {
    eventId: Modalities,
    best: number,
    rank: {
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
}

/* -------------------------------------------------- */

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

/* -------------------------------------------------- */

export type PartnerParamsProps = {
    params: { slug: PARTNER_SLUG }
}
export type ProfileParamsProps = {
    params: { id: WCA_ID }
}
export interface GenerateMetadataProps extends ProfileParamsProps {
    searchParams: { [key: string]: string | string[] | undefined }
}