import { aboutMetadata, organizationStructuredData } from '@/biocube-seo'
import { Background } from '@/components/background'
import Head from 'next/head'

export const metadata = aboutMetadata

export default function About() {
    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
                />
            </Head>

            <Background type='left' />

            <main className='flex'>
                sobre
            </main>
        </>
    )
}