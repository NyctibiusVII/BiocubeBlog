'use client'

import { CNPJ, appRoutesPath } from '@/biocube-data'
import { MarkText } from '../mark-text'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const Footer = () => {
    const router = usePathname()
    if(!appRoutesPath.includes(router)) return <></>

    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className='w-full border-t border-leafgreen flex justify-center'>
            <div className='container'>
                <Image
                    className='hidden lg:inline-flex select-none'
                    src='favicon.svg'
                    width={24}
                    height={24}
                    priority={false}
                    alt=''
                />

                <small className='text-sm text-white-75p flex flex-col sm:flex-row md:text-base'>
                    <span><MarkText>BIOCUBE</MarkText> - CNPJ: {CNPJ}.&nbsp;</span>
                    <span>&copy; Todos os direitos reservados. 2019 - {currentYear}</span>
                </small>

                <button onClick={() => scrollToTop()} title='Voltar para o topo'>
                    <Image
                        className='w-5 h-5 md:w-6 md:h-6 transition-all hover:brightness-75'
                        src='/assets/arrow.svg'
                        width={24}
                        height={24}
                        priority={false}
                        alt=''
                    />
                </button>
            </div>
        </footer>
    )
}