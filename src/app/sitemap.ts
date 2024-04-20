import { MetadataRoute } from 'next'
import { athletesId_WCA } from '@/biocube-data'

export default function Sitemap(): MetadataRoute.Sitemap {
    const defaultPages = [
        {
            url: '/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: '/atletas',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: '/parceiros',
            lastModified: '2024-04-20T10:13:59.083Z',
            changeFrequency: 'never',
            priority: 0.7
        },
        {
            url: '/parceiros/macae',
            lastModified: '2024-04-20T10:13:59.083Z',
            changeFrequency: 'never',
            priority: 0.7
        },
        {
            url: '/parceiros/bodoco',
            lastModified: '2024-04-20T10:13:59.083Z',
            changeFrequency: 'never',
            priority: 0.7
        },
        {
            url: '/tutoriais',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: '/sobre',
            lastModified: '2024-04-20T10:13:59.083Z',
            changeFrequency: 'yearly',
            priority: 0.8
        }
    ]

    const sitemap = [
        ...defaultPages,
        ...athletesId_WCA.map(id => ({
            url: `/atletas/${id}`,
            lastModified: new Date(),
            changeFrequency: 'hourly' as const,
            priority: 0.9
        }))
    ] as MetadataRoute.Sitemap

    return sitemap
}