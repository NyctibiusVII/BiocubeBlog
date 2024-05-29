import {
    BIOCUBE_ID,
    WCA_ID
} from '@/types'

import TiagoDiasImage       from '/public/assets/profiles/p_2022DIAS04.png'
import SusaneCoelhoImage    from '/public/assets/profiles/p_2016COEL04.png'
import CaioSatoImage        from '/public/assets/profiles/p_2016SATO01.png'
import MarioDiasImage       from '/public/assets/profiles/p_2019DIAS02.png'
import PedroContreirasImage from '/public/assets/profiles/p_2022MOUR01.png'
import MariaGarolaImage     from '/public/assets/profiles/p_2022LIMA01.png'
import PedroSasakiImage     from '/public/assets/profiles/p_2022SASA03.png'
import AugustoKlappothImage from '/public/assets/profiles/p_2022KLAP01.png'
import MateusMeloImage      from '/public/assets/profiles/p_MateusMelo.png'
import GustavoDullensImage  from '/public/assets/profiles/p_GustavoDullens.png'
import VitorWagnerImage     from '/public/assets/profiles/p_VitorWagner.png'

import { StaticImageData } from 'next/image'

export const useProfileImages = () => {
    const profileImageList: {[key in WCA_ID | BIOCUBE_ID]: StaticImageData} = {
        [WCA_ID.TIAGO_DIAS]:    TiagoDiasImage,
        [WCA_ID.SUZANE_COELHO]: SusaneCoelhoImage,
        [WCA_ID.CAIO_SATO]:     CaioSatoImage,
        [WCA_ID.MARIO_DIAS]:    MarioDiasImage,
        [WCA_ID.PEDRO_CONTREIRAS]: PedroContreirasImage,
        [WCA_ID.MARIA_GAROLA]:     MariaGarolaImage,
        [WCA_ID.PEDRO_SASAKI]:     PedroSasakiImage,
        [WCA_ID.AUGUSTO_KLAPPOTH]: AugustoKlappothImage,
        [BIOCUBE_ID.MATEUS_MELO]:  MateusMeloImage,
        [BIOCUBE_ID.GUSTAVO_DULLENS]: GustavoDullensImage,
        [BIOCUBE_ID.VITOR_WAGNER]:    VitorWagnerImage
    }

    return {
        profileImageList,
        TiagoDiasImage,
        SusaneCoelhoImage,
        CaioSatoImage,
        MarioDiasImage,
        PedroContreirasImage,
        MariaGarolaImage,
        PedroSasakiImage,
        AugustoKlappothImage,
        MateusMeloImage,
        GustavoDullensImage,
        VitorWagnerImage
    }
}