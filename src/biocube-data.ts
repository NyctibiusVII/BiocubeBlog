import {
    BIOCUBE_ID,
    PARTNER_SLUG,
    WCA_ID
} from './types'

const rootUrl = 'https://biocube.vercel.app' || 'https://biocube.com'
const wcaApi  = 'https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api'

const storeWebsite      = 'https://www.biocubeoficial.com.br'
const instagramBiocube  = 'https://www.instagram.com/biocubeoficial'
const facebookBiocube   = 'https://www.facebook.com/biocubeoficial'
const youtubeBiocube    = 'https://www.youtube.com/biocubeoficial'
const theCubicleWebsite = 'https://www.thecubicle.com'

const emailBiocube = 'matheus.dev.07@gmail.com' || 'tiagoffdias@hotmail.com'
const CNPJ = '35.534.583/0001-15'

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
const teamBiocubeId = [
    WCA_ID.TIAGO_DIAS,
    WCA_ID.SUZANE_COELHO,
    WCA_ID.CAIO_SATO,
    WCA_ID.MARIO_DIAS,
    WCA_ID.PEDRO_CONTREIRAS,
    WCA_ID.MARIA_GAROLA,
    WCA_ID.PEDRO_SASAKI,
    WCA_ID.AUGUSTO_KLAPPOTH,
    BIOCUBE_ID.MATEUS_MELO,
    BIOCUBE_ID.GUSTAVO_DULLENS,
    BIOCUBE_ID.VITOR_WAGNER
]
const appRoutesAbsolutePath = [
    '/',
    '/atletas',
    '/parceiros',
    '/tutoriais',
    '/sobre'
]
const appRoutesPath = [
    '/',
    '/atletas',
    `/atletas/${athletesId_WCA[0]}`,
    `/atletas/${athletesId_WCA[1]}`,
    `/atletas/${athletesId_WCA[2]}`,
    `/atletas/${athletesId_WCA[3]}`,
    `/atletas/${athletesId_WCA[4]}`,
    `/atletas/${athletesId_WCA[5]}`,
    `/atletas/${athletesId_WCA[6]}`,
    `/atletas/${athletesId_WCA[7]}`,
    '/parceiros',
    `/parceiros/${partnerSlug[0]}`,
    `/parceiros/${partnerSlug[1]}`,
    '/tutoriais',
    '/sobre'
]

const teamBiocubeInfo = {
    [WCA_ID.TIAGO_DIAS]: {
        name: 'Tiago Dias',
        occupation: 'CEO',
        social: {
            youtube: 'https://www.youtube.com/biocubeoficial',
            instagram: 'https://www.instagram.com/tiagobiocube',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.TIAGO_DIAS}`
        }
    },
    [WCA_ID.SUZANE_COELHO]: {
        name: 'Suzane Coelho',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/c/SuzaneCoelho',
            instagram: 'https://www.instagram.com/suzanecoelho_',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.SUZANE_COELHO}`
        }
    },
    [WCA_ID.CAIO_SATO]: {
        name: 'Caio Sato',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/channel/UCV2mdUwFRXW-PHYwTpkpv4w',
            instagram: 'https://www.instagram.com/caioh.sato',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.CAIO_SATO}`
        }
    },
    [WCA_ID.MARIO_DIAS]: {
        name: 'Mario Dias',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/channel/UCGdJlrkyP8o08bEw20Jqorw',
            instagram: 'https://instagram.com/mdiascxdaga',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.MARIO_DIAS}`
        }
    },
    [WCA_ID.PEDRO_CONTREIRAS]: {
        name: 'Pedro Contreiras',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/channel/UCBoVOirJra0pBQMlPega1CA',
            instagram: 'https://www.instagram.com/pedrocontreirasmoura',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.PEDRO_CONTREIRAS}`
        }
    },
    [WCA_ID.MARIA_GAROLA]: {
        name: 'Maria Garola',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/channel/UCBCe-nq-nrYT1ymJm64lYrA',
            instagram: 'https://www.instagram.com/maria_cubista',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.MARIA_GAROLA}`
        }
    },
    [WCA_ID.PEDRO_SASAKI]: {
        name: 'Pedro Sasaki',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/@pedrosasakispeedcuber7987',
            instagram: 'https://www.instagram.com/pedro.sasaki',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.PEDRO_SASAKI}`
        }
    },
    [WCA_ID.AUGUSTO_KLAPPOTH]: {
        name: 'Augusto Klappoth',
        occupation: 'Atleta Biocube',
        social: {
            youtube: 'https://www.youtube.com/channel/UCGA3pkCnr2qb0aZhq2DubHw',
            instagram: 'https://www.instagram.com/augustoklappoth',
            wca: `https://www.worldcubeassociation.org/persons/${WCA_ID.AUGUSTO_KLAPPOTH}`
        }
    },
    [BIOCUBE_ID.MATEUS_MELO]: {
        name: 'Mateus Melo',
        occupation: 'Desenvolvedor Parceiro',
        social: {
            instagram: 'https://www.instagram.com/melo.code'
        }
    },
    [BIOCUBE_ID.GUSTAVO_DULLENS]: {
        name: 'Gustavo Dullens',
        occupation: 'Programa de Apoio',
        social: {
            youtube: 'https://www.youtube.com/channel/UCKPGYKws4NOsO5a7Mh2l6KA',
            instagram: 'https://www.instagram.com/@dullenscuber',
            wca: 'https://www.worldcubeassociation.org/persons/2018DULL02'
        }
    },
    [BIOCUBE_ID.VITOR_WAGNER]: {
        name: 'Vitor Wagner',
        occupation: 'Programa de Apoio',
        social: {
            instagram: 'https://www.instagram.com/vitor_cubes',
            wca: 'https://www.worldcubeassociation.org/persons/2016ABRE01'
        }
    }
}

export {
    rootUrl,
    wcaApi,
    storeWebsite,
    instagramBiocube,
    facebookBiocube,
    youtubeBiocube,
    theCubicleWebsite,
    emailBiocube,
    CNPJ,
    athletesId_WCA,
    teamBiocubeId,
    partnerSlug,
    appRoutesAbsolutePath,
    appRoutesPath,
    teamBiocubeInfo
}