import { instagramBiocube, storeWebsite, theCubicleWebsite, youtubeBiocube } from '@/biocube-data'
import { homeMetadata, organizationStructuredData } from '@/biocube-seo'
import { Background } from '@/components/background'
import { MarkText } from '@/components/mark-text'
import { BigShouldersText } from './fonts'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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

            <Background type='right' />

            <main>
                <div className='w-full flex items-center justify-between gap-4 xl:gap-16'>
                    <h1 className={`${BigShouldersText.className} xs:max-w-80 md:max-w-full xl:max-w-[38.75rem] font-normal text-[2rem] md:text-[3rem] lg:text-[4rem] leading-9 md:leading-[3.5rem] lg:leading-[4.5rem] uppercase`}>
                        <MarkText className='select-all'>Biocube</MarkText> é um portal onde você irá encontrar nossos contatos, nossa loja e projetos sociais.
                    </h1>

                    <Image
                        className='w-24 sm:w-32 lg:w-auto h-auto hidden xs:inline-block md:hidden xl:inline-block xl:drop-shadow-[0_0_15rem_#01F26D] z-0'
                        src='/assets/cube.svg'
                        width={281}
                        height={323}
                        priority
                        alt=''
                    />
                </div>

                <div className='max-w-72 sm:max-w-none md:max-w-80 lg:max-w-96 xl:max-w-none flex flex-col items-center xl:items-end'>
                    <div className='border-2 border-leafgreen rounded-t-md flex flex-col items-center gap-2 p-4 overflow-hidden xl:p-0 sm:flex-row md:flex-col xl:flex-row xl:gap-0 xl:rounded-bl-md'>
                        <Image
                            className='w-64 h-auto sm:w-[10.667rem] sm:h-32 md:w-72 md:h-auto lg:w-[22.667rem] xl:h-[17rem] rounded-sm xl:rounded-none'
                            src='/assets/tiago-s-family.png'
                            width={363}
                            height={272}
                            priority={false}
                            alt='Foto de familia com Tiago, Vanessa e Luna (cadela).'
                        />
                        <p className={`${BigShouldersText.className} max-w-96 xl:max-w-[45rem] text-lg leading-6 text-wrap text-center uppercase sm:text-right md:text-center xl:text-right md:text-xl lg:text-3xl xl:text-4xl xl:py-4 xl:pl-2 xl:pr-6`}>
                            Este sou eu <MarkText>Tiago</MarkText> e esta é minha família, além da <MarkText>Vanessa</MarkText> e da <MarkText>Luna</MarkText> que está comendo meus dedos nossa família se estende a milhares de cubistas pelo Brasil, aqui muitos clientes se tornam amigos e no fim de tudo é isso que nos torna tão especiais.
                        </p>
                    </div>

                    <div className='w-full xl:max-w-80 border-2 border-t-0 border-leafgreen rounded-b-md flex overflow-hidden'>
                        <Link href={instagramBiocube} className='w-full group primary-social-button py-1 flex justify-center'>
                            <Image
                                className='w-7 h-7 group-hover:filter-leafgreen'
                                src='/assets/instagram.svg'
                                width={28}
                                height={28}
                                priority={false}
                                alt=''
                            />
                        </Link>
                        <Link href={youtubeBiocube} className='w-full group primary-social-button py-1 flex justify-center'>
                            <Image
                                className='w-7 h-7 group-hover:filter-leafgreen'
                                src='/assets/youtube.svg'
                                width={28}
                                height={28}
                                priority={false}
                                alt=''
                            />
                        </Link>
                        <Link href={theCubicleWebsite} className='w-full group primary-social-button py-1 flex justify-center'>
                            <Image
                                className='w-7 h-7 group-hover:filter-leafgreen'
                                src='/assets/the-cubicle.svg'
                                width={28}
                                height={28}
                                priority={false}
                                alt=''
                            />
                        </Link>
                    </div>
                </div>

                <div className='max-w-72 sm:max-w-none md:max-w-80 lg:max-w-96 xl:max-w-none flex flex-col items-center xl:items-start'>
                    <div className='border-2 border-leafgreen rounded-t-md flex flex-col-reverse items-center gap-2 p-4 overflow-hidden xl:p-0 sm:flex-row md:flex-col-reverse xl:flex-row xl:gap-0 xl:rounded-br-md'>
                        <p className={`${BigShouldersText.className} max-w-96 xl:max-w-[45rem] text-lg leading-6 text-wrap text-center uppercase sm:text-left md:text-center xl:text-left md:text-xl lg:text-3xl xl:text-4xl xl:py-4 xl:pr-2 xl:pl-6`}>
                            Na nossa <MarkText>loja</MarkText> você vai encontrar diversos produtos super maneiros, <MarkText>Cubos mágicos</MarkText> de diversas modalidades oficiais e não oficiais, <MarkText>roupas</MarkText>, <MarkText>acessórios</MarkText>, <MarkText>lubrificantes</MarkText> próprios para cubos e muito mais!
                        </p>
                        <Image
                            className='w-64 h-auto sm:w-[10.667rem] sm:h-32 md:w-72 md:h-auto lg:w-[22.667rem] xl:h-[17rem] rounded-sm xl:rounded-none'
                            src='/assets/cube-collections.png'
                            width={363}
                            height={272}
                            priority={false}
                            alt='Foto de familia com Tiago, Vanessa e Luna (cadela).'
                        />
                    </div>

                    <div className='w-full xl:max-w-80 border-2 border-t-0 border-leafgreen rounded-b-md flex overflow-hidden'>
                        <Link href={storeWebsite} className={`w-full group primary-social-button ${BigShouldersText.className} font-bold md:text-xl lg:text-2xl py-1 flex items-center justify-center gap-1`}>
                            <Image
                                className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:filter-leafgreen'
                                src='/assets/bag.svg'
                                width={28}
                                height={28}
                                priority={false}
                                alt=''
                            />
                            LOJA BIOCUBE
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
