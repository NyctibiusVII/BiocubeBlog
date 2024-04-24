'use client'

import { appRoutesPath, storeWebsite } from '@/biocube-data'
import { quattrocento } from '@/app/fonts'
import { useHeaderLinks } from '@/hooks/useHeaderLinks'
import { usePathname } from 'next/navigation'
import { PopoverMenu } from './popover-menu'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    const router = usePathname()
    if(!appRoutesPath.includes(router)) return <></>

    const headerLinks = useHeaderLinks

    return (
        <header>
            <p className={`${quattrocento.className} text-leafgreen md:text-xl flex gap-1 pointer-events-none`}>
                <Image
                    className='w-5 h-5 md:w-6 md:h-6'
                    src='/favicon.svg'
                    width={16}
                    height={16}
                    priority={false}
                    alt='Biocube logo'
                />
                BIOCUBE
            </p>

            <PopoverMenu routerPath={router} headerLinks={headerLinks} />

            <nav className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                    { headerLinks.map((menuRouter, index) => {
                        const activeRouter = menuRouter.href === router ? 'text-leafgreen underline' : 'text-white-50p hover:underline'
                        return (
                            <li key={index}>
                                <Link href={menuRouter.href} className={`${activeRouter} lg:text-xl text-pretty underline-offset-4`}>
                                    {menuRouter.content}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Link
                href={storeWebsite}
                className='hidden sm:inline-flex md:hidden lg:inline-flex primary-button lg:text-xl px-4 lg:px-8'>
                LOJA
            </Link>
        </header>
    )
}