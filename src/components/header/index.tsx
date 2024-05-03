'use client'

import {
    appRoutesPath,
    storeWebsite
} from '@/biocube-data'

import { PopoverMenu } from './popover-menu'

import { quattrocento }   from '@/app/fonts'
import { useHeaderLinks } from '@/hooks/useHeaderLinks'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

export const Header = () => {
    const router = usePathname()
    if(!appRoutesPath.includes(router)) return <></>

    const headerLinks = useHeaderLinks

    return (
        <header>
            <div className='flex-center gap-2 select-none pointer-events-none'>
                <span className='w-6 h-6 bg-[url("/favicon.svg")] bg-no-repeat bg-center bg-cover md:mb-1 hidden sm:inline-block' />
                <p className={`${quattrocento.className} text-leafgreen text-2xl sm:hidden md:inline-block`}>
                    BIOCUBE
                </p>
            </div>

            <PopoverMenu routerPath={router} headerLinks={headerLinks} />

            <nav className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                    { headerLinks.map((menuRouter, index) => {
                        const activeRouter = menuRouter.href === router ? 'text-leafgreen underline' : 'text-white-50p hover:underline'
                        return (
                            <li key={index}>
                                <Link href={menuRouter.href} className={`${activeRouter} text-lg lg:text-xl text-pretty underline-offset-4`}>
                                    {menuRouter.content}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Link
                href={storeWebsite}
                className='text-lg lg:text-xl px-6 lg:px-8 primary-button hidden sm:inline-flex md:hidden lg:inline-flex'>
                LOJA
            </Link>
        </header>
    )
}