import { aboutMetadata, organizationStructuredData } from '@/biocube-seo'
import { Background } from '@/components/background'
import Image from 'next/image'
import Head from 'next/head'
import { MarkText } from '@/components/mark-text'
import { BigShouldersText } from '../fonts'

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

            <main>
                <h1 className='sr-only'>Tiago Dias Ceo & Desenvolvedor</h1>
                <div className='w-full flex justify-between'>
                    <Image
                        className='w-[6.25rem] h-[6.25rem] xs:w-32 xs:h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 xl:w-[19.438rem] xl:h-[19.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg'
                        src='/assets/tiago-ceo.png'
                        width={311}
                        height={311}
                        priority
                        alt='Foto de perfil do Tiago, CEO da Biocube.'
                    />
                    <div className='w-full h-full flex flex-col justify-center'>
                        <p className={`bg-gradient-to-r from-black-matt/50 to-leafgreen/75 rounded-r-sm ${BigShouldersText.className} text-right text-[2rem] leading-9 xs:text-5xl sm:text-6xl md:text-5xl lg:text-[4rem] xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 sm:py-1 xl:pr-4`}>TIAGO DIAS</p>
                        <p className={`${BigShouldersText.className} text-right text-2xl xs:text-4xl sm:text-[3.25rem] sm:leading-[3.5rem] md:text-[2.5rem] md:leading-[2.75rem] lg:text-6xl xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 xl:pr-4`}><MarkText>CEO</MarkText> & <MarkText>DESENVOLVEDOR</MarkText></p>
                    </div>
                </div>
            </main>
        </>
    )
}