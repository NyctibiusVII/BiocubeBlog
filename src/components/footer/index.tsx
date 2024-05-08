'use client'

import {
    CNPJ,
    appRoutesPath
} from '@/biocube-data'

import { MarkText } from '../mark-text'

import { usePathname } from 'next/navigation'

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
                <span className='w-6 h-6 bg-[url("/favicon.svg")] bg-no-repeat bg-center bg-cover hidden lg:inline-flex select-none' />

                <small className='text-sm text-white/75 flex flex-col sm:flex-row md:text-base'>
                    <span><MarkText>BIOCUBE</MarkText> - CNPJ: {CNPJ}.&nbsp;</span>
                    <span>&copy; Todos os direitos reservados. 2019 - {currentYear}</span>
                </small>

                <button onClick={() => scrollToTop()} title='Voltar para o topo' className='w-5 h-5 md:w-6 md:h-6 bg-[url("/assets/arrow.svg")] bg-no-repeat bg-center bg-cover transition-all hover:brightness-75' />
            </div>
        </footer>
    )
}