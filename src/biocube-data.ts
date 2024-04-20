import { PARTNER_SLUG, WCA_ID } from './types'

const rootUrl = 'https://biocube.vercel.app' || 'https://biocube.com'
const wcaApi = 'https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api'

const partnerSlug = [
    PARTNER_SLUG.BODOCO,
    PARTNER_SLUG.MACAE
]
const athletesId_WCA = [
    WCA_ID.TIAGO_DIAS,
    WCA_ID.SUZANE_COELHO,
    WCA_ID.CAIO_SATO,
    WCA_ID.MARIO_DIAS,
    WCA_ID.PEDRO_CONTREIRAS,
    WCA_ID.MARIA_GAROLA,
    WCA_ID.PEDRO_SASAKI,
    WCA_ID.AUGUSTO_KLAPPOTH
]

const athletesBiocubeSocial = {
    [WCA_ID.TIAGO_DIAS]: {
        youtube: 'https://www.youtube.com/biocubeoficial',
        instagram: 'https://www.instagram.com/tiagobiocube',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.TIAGO_DIAS}`
    },
    [WCA_ID.SUZANE_COELHO]: {
        youtube: 'https://www.youtube.com/c/SuzaneCoelho',
        instagram: 'https://www.instagram.com/suzanecoelho_',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.SUZANE_COELHO}`
    },
    [WCA_ID.CAIO_SATO]: {
        youtube: 'https://www.youtube.com/channel/UCV2mdUwFRXW-PHYwTpkpv4w',
        instagram: 'https://www.instagram.com/caioh.sato',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.CAIO_SATO}`
    },
    [WCA_ID.MARIO_DIAS]: {
        youtube: 'https://www.youtube.com/channel/UCGdJlrkyP8o08bEw20Jqorw',
        instagram: 'https://instagram.com/mdiascxdaga',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.MARIO_DIAS}`
    },
    [WCA_ID.PEDRO_CONTREIRAS]: {
        youtube: 'https://www.youtube.com/channel/UCBoVOirJra0pBQMlPega1CA',
        instagram: 'https://www.instagram.com/pedrocontreirasmoura',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.PEDRO_CONTREIRAS}`
    },
    [WCA_ID.MARIA_GAROLA]: {
        youtube: 'https://www.youtube.com/channel/UCBCe-nq-nrYT1ymJm64lYrA',
        instagram: 'https://www.instagram.com/maria_cubista',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.MARIA_GAROLA}`
    },
    [WCA_ID.PEDRO_SASAKI]: {
        youtube: 'https://www.youtube.com/@pedrosasakispeedcuber7987',
        instagram: 'https://www.instagram.com/pedro.sasaki',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.PEDRO_SASAKI}`
    },
    [WCA_ID.AUGUSTO_KLAPPOTH]: {
        youtube: 'https://www.youtube.com/channel/UCGA3pkCnr2qb0aZhq2DubHw',
        instagram: 'https://www.instagram.com/augustoklappoth',
        wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.AUGUSTO_KLAPPOTH}`
    }
}

export {
    rootUrl,
    wcaApi,
    athletesId_WCA,
    partnerSlug,
    athletesBiocubeSocial
}