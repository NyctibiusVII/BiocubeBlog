import type { Viewport, Metadata } from 'next'
import { rootUrl } from '@/biocube-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { adventPro } from './fonts'
import './globals.css'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#070707'
}
export const metadata: Metadata = {
    metadataBase: new URL(rootUrl),
    openGraph: {
        siteName: 'Biocube',
        type: 'website',
        locale: 'pt_BR',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@NyctibiusVII',
        site: '@NyctibiusVII'
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: 'index, follow'
    },
    applicationName: 'Biocube',
    appleWebApp: {
        title: 'Biocube',
        statusBarStyle: 'default',
        capable: true
    },
    verification: {
        google: 'OjYiqlxK64Fx5dZre97pwHGJ7pYgOP4vQYH1UCOdBuo',
        yandex: '94b9dc01e999c36f',
        other: {
            'msvalidate.01': '9AD4802CE3C4300E2194A1961C37AA76',
            // 'facebook-domain-verification': '__DATA__'
        }
    },
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            },
            {
                url: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                url: '/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
            },
            {
                url: '/favicon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            }
        ],
        shortcut: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            }
        ],
        apple: [
            {
                url: '/apple-icon-57x57.png',
                sizes: '57x57',
                type: 'image/png'
            },
            {
                url: '/apple-icon-60x60.png',
                sizes: '60x60',
                type: 'image/png'
            },
            {
                url: '/apple-icon-72x72.png',
                sizes: '72x72',
                type: 'image/png'
            },
            {
                url: '/apple-icon-76x76.png',
                sizes: '76x76',
                type: 'image/png'
            },
            {
                url: '/apple-icon-114x114.png',
                sizes: '114x114',
                type: 'image/png'
            },
            {
                url: '/apple-icon-120x120.png',
                sizes: '120x120',
                type: 'image/png'
            },
            {
                url: '/apple-icon-144x144.png',
                sizes: '144x144',
                type: 'image/png'
            },
            {
                url: '/apple-icon-152x152.png',
                sizes: '152x152',
                type: 'image/png'
            },
            {
                url: '/apple-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    }
    // SEO created based on: https://dminhvu.com/nextjs-seo#meta-tags
}

const ENVIRONMENT = process.env.ENVIRONMENT || 'product'
const suppressHydrationWarning = ENVIRONMENT === 'product' ? false : true

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-BR'>
            <body className={`w-screen h-screen ${adventPro.className} flex flex-col items-center justify-start`} suppressHydrationWarning={suppressHydrationWarning}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
