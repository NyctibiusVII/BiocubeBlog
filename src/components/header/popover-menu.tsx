import type { MenuItensType } from '@/types'
import { storeWebsite } from '@/biocube-data'
import Image from 'next/image'
import Link from 'next/link'

export const PopoverMenu = ({ routerPath, headerLinks }: { routerPath: string, headerLinks: Array<MenuItensType> }) => {
    const handleMenu = () => {
        const menuOverlay = document.querySelector('.menu-overlay') as HTMLMenuElement
        const menuContainer = document.querySelector('.menu-container') as HTMLDivElement
        const menuItems = document.querySelector('.menu-items') as HTMLSpanElement

        if (menuItems.classList.contains('hidden') && menuOverlay.classList.contains('hidden')) {
            menuOverlay.classList.remove('hidden')
            menuOverlay.classList.add('flex')

            menuContainer.classList.add('rounded-b-none')

            menuItems.classList.remove('hidden')
            menuItems.classList.add('flex')
        }
        else {
            menuOverlay.classList.remove('flex')
            menuOverlay.classList.add('hidden')

            menuContainer.classList.remove('rounded-b-none')

            menuItems.classList.remove('flex')
            menuItems.classList.add('hidden')
        }
    }

    return (
        <>
            <span onClick={() => handleMenu()} className='menu-overlay w-full h-full bg-[#00000080] fixed top-0 left-0 hidden z-40' />

            <div className='menu-container w-20 md:w-28 border md:border-2 border-leafgreen flex items-center sm:hidden md:flex lg:hidden rounded-sm transition-all z-50'>
                <button onClick={() => handleMenu()} className='w-5 h-5 md:w-7 md:h-7 group border-r md:border-r-2 border-leafgreen flex items-center justify-center focus:rounded-tl-[0.063rem] hover:bg-leafgreen focus:bg-leafgreen relative transition-all'>
                    <Image
                        className='w-4 h-4 md:w-5 md:h-5 flex-1 group-hover:brightness-0 group-focus:brightness-0'
                        src='/assets/menu.svg'
                        width={16}
                        height={16}
                        priority={false}
                        alt=''
                    />

                    <nav className='menu-items w-20 md:w-28 hidden absolute top-[1.32rem] md:top-[1.875rem] left-[-0.063rem] md:left-[-0.125rem] rounded-b-sm overflow-hidden z-[60]'>
                        <ul className='w-full flex flex-col'>
                            { headerLinks.map((menuRouter, index) => {
                                const activeRouter_link = menuRouter.href === routerPath ? 'text-quantum' : 'text-white-50p'
                                const activeRouter_container = menuRouter.href === routerPath ?
                                    'bg-leafgreen border-leafgreen hover:brightness-90'
                                    :
                                    index === headerLinks.length -1 ?
                                        'bg-black-matt border-b md:border-b-2 border-white-50p hover:bg-quantum rounded-b-sm'
                                        :
                                        'bg-black-matt border-white-50p hover:bg-quantum'

                                return (
                                    <li key={index} className={`border-x md:border-x-2 ${activeRouter_container}`}>
                                        <Link href={menuRouter.href} className={`${activeRouter_link} text-sm md:text-xl text-pretty`}>
                                            {menuRouter.content}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </button>

                <Link
                    href={storeWebsite}
                    className='w-[3.75rem] md:w-[5rem] font-medium text-base text-center md:text-xl leading-tight text-leafgreen transition-all hover:bg-leafgreen hover:text-quantum'>
                    LOJA
                </Link>
            </div>
        </>
    )
}