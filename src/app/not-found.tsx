import { passionOne } from './fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='w-screen h-100vh-h-12 flex flex-col items-center relative'>
            <h1 className={`sr-only`}>404</h1>

            <div className='mt-12 mb-[-1rem] relative'>
                <span className='w-full h-1/2 bg-salamander-25p blur-2xl absolute inset-y-1/4 rotate-[26deg] rounded-full z-10' />
                <Image
                    className='sm:hidden z-20'
                    src='/assets/not_found_404_mobile.png'
                    width={263}
                    height={221}
                    priority
                    alt=''
                />
            </div>
            <div className='fixed right-0 bottom-6 sm:hidden'>
                <span className='w-1/2 h-full bg-salamander-25p blur-3xl absolute inset-y-1/4 right-0 rounded-full z-10' />
                <Image
                    className='z-20'
                    src='/assets/rabbit-carrot.png'
                    width={276}
                    height={290}
                    priority={false}
                    alt=''
                />
            </div>

            <Image
                className='hidden fixed left-0 bottom-0 lg:inline-flex z-0'
                src='/assets/rabbit-ear.svg'
                width={372}
                height={298}
                priority={false}
                alt=''
            />
            <Image
                className='hidden fixed bottom-0 sm:inline-flex z-0'
                src='/assets/not_found_404_desktop.png'
                width={600}
                height={600}
                priority
                alt=''
            />
            <Image
                className='hidden fixed right-36 bottom-12 2xl:inline-flex z-0'
                src='/assets/cube_support.svg'
                width={276}
                height={290}
                priority={false}
                alt=''
            />

            <span className='w-1/2 h-1/6 bg-salamander-50p blur-[200px] fixed top-0 inset-x-1/4 rounded-full z-0' />
            <span className='w-72 h-32 bg-salamander-25p blur-[70px] hidden lg:inline-flex fixed left-0 bottom-0 rounded-full z-0' />

            <div className='flex flex-col gap-2.5 px-4 sm:gap-0 sm:absolute sm:bottom-4 sm:right-0'>
                <h2 className={`${passionOne.className} text-white-25p text-xl uppercase text-center sm:text-right sm:text-3xl`}>Cadê o cubo?</h2>
                <p className={`font-semibold text-base text-white-15p text-center sm:text-2xl sm:text-right sm:font-bold`}>
                    Procuramos de cima a baixo, mas não conseguimos encontra-lo.
                    <br />
                    Que tal voltarmos para o início!
                </p>
            </div>

            <Link href='/' className='w-full h-12 bg-gradient-to-r from-salamander text-white-75p px-8 text-xl font-semibold hover:underline decoration-2 flex items-center justify-between sm:px-12 sm:justify-normal gap-1 fixed bottom-0 hover:gap-3 transition-all delay-150'>
                Ir para a página principal
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 6.99988L15 11.9999L10 16.9999' stroke='white' strokeOpacity='0.75' strokeWidth='2' strokeLinecap='square' />
                </svg>
            </Link>
        </main>
    )
}