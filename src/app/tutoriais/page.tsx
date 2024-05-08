import {
    tutorialMetadata,
    tutorialStructuredData
} from '@/biocube-seo'

import { Background } from '@/components/background'
import { MarkText }   from '@/components/mark-text'

import { quattrocento } from '../fonts'

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

            <Background type='top' />

            <main>
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

                    <div className='flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-4'>
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

                {/* outros conteúdos */}
            </main>
        </>
    )
}