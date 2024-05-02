import type { Metadata } from 'next'
import {
    rootUrl,
    storeWebsite,
    facebookBiocube,
    instagramBiocube,
    youtubeBiocube
} from './biocube-data'

/* --- Static Metadata --- */
const metaImages = [
    {
        url: `${rootUrl}/assets/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Página inicial do site Biocube.'
    }
]

const homeMetadata: Metadata = {
    title: 'Biocube',
    description: 'Biocube é um portal onde você irá encontrar nossos contatos, nossa loja e projetos sociais.',
    keywords: [
        'biocube',
        'cubo magico',
        'blog',
        'loja',
        'tiago',
        'roupas',
        'acessórios',
        'lubricantes',
        'atletas',
        'tutorial',
    ],
    openGraph: {
        url: rootUrl,
        title: 'Biocube',
        description: 'Biocube é um portal onde você irá encontrar nossos contatos, nossa loja e projetos sociais.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube',
        description: 'Biocube é um portal onde você irá encontrar nossos contatos, nossa loja e projetos sociais.',
        images: metaImages
    }
}
const athletesMetadata: Metadata = {
    title: 'Biocube - Atletas',
    description: 'Conheça nossos atletas Biocube de cubo mágico.',
    keywords: [
        'biocube',
        'time',
        'team',
        'atletas',
        'speedcubers',
        'cubista',
        'perfis',
        'Tiago Dias',
        'Suzane Coelho',
        'Caio Sato',
        'Mario Dias',
        'Pedro Contreiras',
        'Maria Clara',
        'Pedro Sasaki',
        'Augusto Klappoth',
        'wca'
    ],
    openGraph: {
        url: `${rootUrl}/atletas`,
        title: 'Biocube - Atletas',
        description: 'Conheça nossos atletas Biocube de cubo mágico.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube - Atletas',
        description: 'Conheça nossos atletas Biocube de cubo mágico.',
        images: metaImages
    }
}
const partnersMetadata: Metadata = {
    title: 'Biocube - Parceiros',
    description: 'Conheça nossos parceiros: Macaé e Bodocó.',
    keywords: [
        'biocube',
        'quem são',
        'história',
        'missão',
        'projetos',
        'sociais',
        'tiago dias',
        'macaé cubo',
        'cubo mágico bodocó',
        'bodocó open 2019'
    ],
    openGraph: {
        url: `${rootUrl}/parceiros`,
        title: 'Biocube - Parceiros',
        description: 'Conheça nossos parceiros: Macaé e Bodocó.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube - Parceiros',
        description: 'Conheça nossos parceiros: Macaé e Bodocó.',
        images: metaImages
    }
}
const partnerMetadata: Metadata = {
    title: 'Biocube - Parceiro',
    description: 'Conheça nosso parceiro.',
    keywords: [
        'biocube',
        'quem somos',
        'história',
        'missão',
        'projeto',
        'social'
    ],
    openGraph: {
        url: `${rootUrl}/parceiro`,
        title: 'Biocube - Parceiros',
        description: 'Conheça nosso parceiro.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube - Parceiro',
        description: 'Conheça nosso parceiro.',
        images: metaImages
    }
}
const tutorialMetadata: Metadata = {
    title: 'Biocube - Tutoriais',
    description: 'Aqui mostramos um passo a passo para resolver o cubo mágico 3x3 no método de camadas com nossa querida amiga Suzane Coelho.',
    keywords: [
        'biocube',
        'como resolver',
        'tutorial',
        'passo a passo',
        'método de camadas',
        'youtube',
        'cubo',
        '3x3',
        'suzane coelho'
    ],
    openGraph: {
        url: `${rootUrl}/tutoriais`,
        title: 'Biocube - Tutoriais',
        description: 'Aqui mostramos um passo a passo para resolver o cubo mágico 3x3 no método de camadas com nossa querida amiga Suzane Coelho.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube - Tutoriais',
        description: 'Aqui mostramos um passo a passo para resolver o cubo mágico 3x3 no método de camadas com nossa querida amiga Suzane Coelho.',
        images: metaImages
    }
}
const aboutMetadata: Metadata = {
    title: 'Biocube - Sobre nós',
    description: 'A Biocube foi criada com a missão de levar aos cubistas brasileiros a mesma qualidade e desempenho em cubos que os principais concorrentes globais utilizam. Somos apaixonados pela arte do speedcubing e acreditamos que todo cubista merece acesso a cubos de primeira linha. É por isso que selecionamos cuidadosamente e oferecemos uma ampla gama de cubos de alta qualidade, desde modelos para iniciantes até speedcubes avançados. Nossos cubos são meticulosamente ajustados e lubrificados com materiais premium para garantir movimentos suaves e precisos. Quer você seja um iniciante em busca de resolver seu primeiro cubo ou um speedcuber experiente em busca de tempos recordes, temos o cubo perfeito para você. Junte-se a nós nesta emocionante jornada e experimente a alegria de resolver quebra-cabeças com nossos cubos.',
    keywords: [
        'biocube',
        'sobre',
        'quem somos',
        'história',
        'missão',
        'visão',
        'valores',
        'projetos',
        'sociais',
        'trabalho',
        'loja',
        'blog',
        'tiago dias'
    ],
    openGraph: {
        url: `${rootUrl}/sobre`,
        title: 'Biocube - Sobre nós',
        description: 'A Biocube foi criada com a missão de levar aos cubistas brasileiros a mesma qualidade e desempenho em cubos que os principais concorrentes globais utilizam. Somos apaixonados pela arte do speedcubing e acreditamos que todo cubista merece acesso a cubos de primeira linha. É por isso que selecionamos cuidadosamente e oferecemos uma ampla gama de cubos de alta qualidade, desde modelos para iniciantes até speedcubes avançados. Nossos cubos são meticulosamente ajustados e lubrificados com materiais premium para garantir movimentos suaves e precisos. Quer você seja um iniciante em busca de resolver seu primeiro cubo ou um speedcuber experiente em busca de tempos recordes, temos o cubo perfeito para você. Junte-se a nós nesta emocionante jornada e experimente a alegria de resolver quebra-cabeças com nossos cubos.',
        images: metaImages
    },
    twitter: {
        title: 'Biocube - Sobre nós',
        description: 'A Biocube foi criada com a missão de levar aos cubistas brasileiros a mesma qualidade e desempenho em cubos que os principais concorrentes globais utilizam. Somos apaixonados pela arte do speedcubing e acreditamos que todo cubista merece acesso a cubos de primeira linha. É por isso que selecionamos cuidadosamente e oferecemos uma ampla gama de cubos de alta qualidade, desde modelos para iniciantes até speedcubes avançados. Nossos cubos são meticulosamente ajustados e lubrificados com materiais premium para garantir movimentos suaves e precisos. Quer você seja um iniciante em busca de resolver seu primeiro cubo ou um speedcuber experiente em busca de tempos recordes, temos o cubo perfeito para você. Junte-se a nós nesta emocionante jornada e experimente a alegria de resolver quebra-cabeças com nossos cubos.',
        images: metaImages
    }
}

export {
    homeMetadata,
    athletesMetadata,
    partnersMetadata,
    partnerMetadata,
    tutorialMetadata,
    aboutMetadata
}

/* --- Static Structured Data --- */
const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Biocube',
    legalName: 'Biocube',
    description: 'Bem-vindo à nossa loja online de cubos mágicos! Oferecemos uma ampla seleção de cubos mágicos, desde modelos para iniciantes até speedcubes avançados. Quer você seja um iniciante procurando resolver seu primeiro cubo ou um speedcuber experiente buscando tempos recordes, nós temos o cubo perfeito para você. Nossos cubos são lubrificados com materiais de alta qualidade e projetados para movimentos suaves e precisos. Compre conosco e experimente a alegria de resolver quebra-cabeças com nossos cubos mágicos de primeira linha.',
    image: `${rootUrl}/assets/thumbnail.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Jose Aloisio Filho, 889',
      addressLocality: 'Porto Alegre',
      addressCountry: 'BR',
      addressRegion: 'RS',
      postalCode: '90250-180'
    },
    foundingLocation: 'Porto Alegre, RS',
    foundingDate: '2019/11/18',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'tiagoffdias@hotmail.com',
        telephone: ['+55-51-3907-2606', '+55-51-99342-5277']
    },
    taxID: '35.534.583/0001-15',
    keywords: [
        'biocube',
        'cubo mágico',
        'blog',
        'loja',
        'tiago dias',
        'roupas',
        'acessórios',
        'lubricantes',
        'atletas',
        'tutorial'
    ],
    logo: `${rootUrl}/favicon.ico`,
    contentUrl: rootUrl,
    sameAs: [
        facebookBiocube,
        instagramBiocube,
        storeWebsite,
        youtubeBiocube
    ]
}
const tutorialStructuredData =  {
    '@context': 'https://schema.org',
    '@type': ['VideoObject', 'LearningResource'],
    name: 'Resolvendo o cubo mágico 3x3',
    description: 'O vídeo mostra um passo a passo para resolver o cubo mágico 3x3 no método de camadas.',
    learningResourceType: 'How-to',
    text: 'Primero faça a cruz branca, depois complete as quinas da base branca, em seguida coloque os meios da segunda camada, então sobrará a última camada que terá mais alguns passos, o primeiro é fazer a cruz amarela e completar seu topo, por fim fará os meios nas laterais do topo e a permutação das quinas amarelas, e pronto, seu cubo está resolvido.',
    // contentUrl: 'https://www.example.com/video/123/file.mp4',
    thumbnailUrl: [
    //   'https://example.com/photos/1x1/photo.jpg',
    //   'https://example.com/photos/4x3/photo.jpg',
    //   'https://example.com/photos/16x9/photo.jpg'
    ],
    // uploadDate: '2016-03-31T08:00:00+08:00'// data do video do Youtube
}

export { organizationStructuredData, tutorialStructuredData }