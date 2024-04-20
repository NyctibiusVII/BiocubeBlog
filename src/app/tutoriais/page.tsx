import { tutorialMetadata, tutorialStructuredData } from '@/biocube-seo'
import Head from 'next/head'

export const metadata = tutorialMetadata

export default function Tutorial() {
    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialStructuredData) }}
                />
            </Head>


            <main className='flex'>
                tutorial
            </main>
        </>
    )
}