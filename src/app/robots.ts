import { MetadataRoute } from 'next'
import { athletesId_WCA } from '@/biocube-data'

export default function Robots(): MetadataRoute.Robots {
    let allow = [
        '/',
        '/atletas',
        '/parceiros',
        '/parceiros/macae',
        '/parceiros/bodoco',
        '/tutoriais',
        '/sobre'
    ]

    allow = [...allow, ...athletesId_WCA.map(id => `/atletas/${id}`)]

    return {
        rules: {
            userAgent: '*',
            allow
        },
        sitemap: 'https://biocube.com.br/sitemap.xml'
    }
}