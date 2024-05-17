import {
    tutorialMetadata,
    tutorialStructuredData
} from '@/biocube-seo'

import { Background }      from '@/components/background'
import { YoutubePlaylist } from '@/components/youtube-playlist'
import { MarkText }        from '@/components/mark-text'

import { quattrocento } from '../fonts'

import Image from 'next/image'
import Link  from 'next/link'
import Head  from 'next/head'

export const metadata = tutorialMetadata

export default function Tutorial() {
    const API_KEY = process.env.YOUTUBE_API_V3_KEY || ''
    const channelId = 'UC5Fm57YxhlaRMkh6iGlhBqg'
    const cubeTutorialImages = [
        {
            src: '/assets/cube/tutorial/cube-white-cross.svg',
            alt: 'Ilustração da cruz branca no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-white-corners.svg',
            alt: 'Ilustração dos cantos brancos no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-second-layer.svg',
            alt: 'Ilustração da segunda camada no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-yellow-cross.svg',
            alt: 'Ilustração da cruz amarela no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-yellow-edges.svg',
            alt: 'Ilustração da face amarela no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-yellow-corners.svg',
            alt: 'Ilustração dos cantos amarelos no cubo mágico.'
        },
        {
            src: '/assets/cube/tutorial/cube-orient-yellow-corners.svg',
            alt: 'Ilustração da última orientação dos cantos amarelos no cubo mágico.'
        }
    ]

    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialStructuredData) }}
                />
            </Head>

            <Background type='top' />

            <main className='sm:gap-32 lg:gap-40'>
                <h1 className='sr-only'>Como Montar o Cubo Mágico</h1>
                <div className='w-full flex-center flex-col gap-4 lg:gap-6'>
                    <p className={`${quattrocento.className} text-center text-wrap text-[2.1rem] leading-9 xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-6xl`}>
                        COMO MONTAR O
                        <br />
                        <MarkText>C</MarkText>U<MarkText>B</MarkText>O{' '}
                        <MarkText>M</MarkText>Á<MarkText>G</MarkText>I<MarkText>C</MarkText>O
                    </p>

                    <p className={`w-full max-w-[47.375rem] xl:max-w-[57rem] ${quattrocento.className} text-center text-wrap leading-5 sm:text-lg sm:leading-[1.375rem] md:text-xl md:leading-6 xl:text-2xl`}>
                        <MarkText>“</MarkText>Já se sentiu cansado de girar o cubo sem saber o que está fazendo<MarkText>?</MarkText> Será que algum dia você conseguirá resolver isso<MarkText>?</MarkText> É claro, com este tutorial, de nossa querida amiga <MarkText>Suzane Coelho</MarkText>, você aprenderá de forma prática a resolver o cubo em <MarkText color='current' className='text-wrap' underline>apenas alguns passos</MarkText>. Vamos à nossa jornada<MarkText>?</MarkText><MarkText>”</MarkText>
                    </p>

                    <div className='flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-10'>
                        <span className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#3FA549] outline outline-[1px] sm:outline-[1px] md:outline-[2px] lg:outline-[2px] outline-[#3FA549] grid gap-[1px] sm:gap-[1px] md:gap-[2px] lg:gap-[2px] grid-cols-3 grid-rows-3 rotate-[315deg]'>
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#D63B41] animate-[pulse_2900ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#F8D835] animate-[pulse_1300ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#48B9E7] animate-[pulse_2200ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#75C37D] animate-[pulse_1100ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#48B9E7] animate-[pulse_1700ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#75C37D] animate-[pulse_2800ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#F8D835] animate-[pulse_2500ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#C4DCDC] animate-[pulse_2300ms_ease-in-out_infinite]' />
                            <span className='w-[7.333px] h-[7.333px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14.666px] lg:h-[14.666px] bg-[#D63B41] animate-[pulse_1200ms_ease-in-out_infinite]' />
                        </span>

                        <svg width='18' height='10' viewBox='0 0 18 10' className='md:hidden animate-[float_3s_ease-in-out_infinite]' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M17 0.941162L9 8.94116L1 0.941162' stroke='#3FA549' strokeLinecap='square'/>
                        </svg>
                        <svg width='34' height='18' viewBox='0 0 34 18' className='hidden md:inline-block animate-[float_3s_ease-in-out_infinite]' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M33 0.882202L17 16.8822L1 0.882202' stroke='#3FA549' strokeWidth='1.25' strokeLinecap='square'/>
                        </svg>
                    </div>
                </div>

                <div className='grid grid-cols-3 grid-rows-3 sm:hidden md:grid lg:hidden gap-4'>
                    { cubeTutorialImages.map((cubeImage, index) => {
                        if(cubeTutorialImages.length === index + 1) return (
                            <div key={index} className='col-span-3 flex justify-center'>
                                <Image
                                    className='w-[3.75rem] h-[4.33rem] md:w-[5rem] md:h-[5.766rem]'
                                    src={cubeImage.src}
                                    width={222}
                                    height={256}
                                    priority={false}
                                    alt={cubeImage.alt}
                                />
                            </div>
                        )

                        return (
                            <Image
                                key={index}
                                className='w-[3.75rem] h-[4.33rem] md:w-[5rem] md:h-[5.766rem]'
                                src={cubeImage.src}
                                width={222}
                                height={256}
                                priority={false}
                                alt={cubeImage.alt}
                            />
                        )
                    }) }
                </div>

                <YoutubePlaylist apiKey={API_KEY} cubeTutorialImages={cubeTutorialImages} />

                <Link href={`https://www.youtube.com/channel/${channelId}`} target='_blank' title='Ir para o canal da Suzane Coelho no Youtube.' className='w-full max-w-[90%] min-h-[3.75rem] outline outline-2 outline-revell/75 lg:outline-quantum hover:outline-hematite-soil shadow-[0_0_1rem_-0,5rem_#111111,inset_0_0_1rem_-0.5rem_#111111] my-24 flex-center relative group transition-all rounded-lg overflow-hidden'>
                    <div className='w-full h-full flex-center justify-between gap-4 py-1 px-12 xl:px-16 backdrop-blur-lg group-hover:backdrop-blur-xl z-10'>
                        <h3 className='sr-only'>Gostou!? Aprenda muito mais no canal do Youtube. @SuzaneCoelho</h3>
                        <p className='w-full uppercase text-wrap text-center lg:text-left font-bold lg:font-medium text-sm leading-4 sm:text-base md:text-lg lg:text-xl sm:leading-5 md:leading-5 lg:leading-5'>
                            <span className='lg:text-2xl'>eae, gostou!?</span>
                            <br />
                            Aprenda muito mais no canal do{' '}
                            <MarkText color='red' className='inline-flex items-center'>
                                Youtube
                                <Image
                                    className='w-4 h-4 md:w-5 md:h-5 ml-0.5 lg:ml-1'
                                    src='/assets/icons/link-external.svg'
                                    width={24}
                                    height={24}
                                    priority={false}
                                    alt='Ir para canal da Suzane Coelho no Youtube'
                                />
                            </MarkText>
                            <br />
                            <MarkText>@SuzaneCoelho</MarkText>
                        </p>

                        <Image
                            className='w-[90px] h-[90px] xl:w-[120px] xl:h-[120px] hidden lg:inline-block border-2 border-hematite-soil group-hover:border-transparent transition-colors rounded-full'
                            src='/assets/profiles/p_2016COEL04.png'
                            width={120}
                            height={120}
                            priority={false}
                            alt='Perfil da Suzane Coelho no Youtube'
                        />
                    </div>

                    <span className='w-12 h-12 animate-[float_4s_ease-in-out_infinite,pulse_4s_ease-in-out_infinite] bg-hematite-soil rounded-full absolute top-4 left-12 z-0' />
                    <span className='w-14 h-14 animate-[float_3s_ease-in-out_infinite,pulse_3s_ease-in-out_infinite] bg-lawngreen rounded-full absolute top-8 left-24 z-0' />
                    <span className='w-20 h-20 animate-[float_3500ms_ease-in-out_infinite,pulse_3500ms_ease-in-out_infinite] bg-hematite-soil/75 hidden sm:inline-block rounded-full absolute top-1/2 right-24 z-0' />
                </Link>
            </main>
        </>
    )
}