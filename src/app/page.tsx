import { homeMetadata, organizationStructuredData } from '@/biocube-seo'
import Head from 'next/head'

export const metadata = homeMetadata

export default function Home() {
    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
                />
            </Head>

            <main className='flex'>
                Bom dia, este é um trabalho voluntario!
                <br/>
                Entre em contato: matheus.dev.07@gmail.com
            </main>
        </>
    )
}
