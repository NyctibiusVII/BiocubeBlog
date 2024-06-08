import type { MenuItensType } from '@/types'
import { storeWebsite } from '@/biocube-data'

import Link from 'next/link'

export const PopoverMenu = ({ routerPath, headerLinks }: { routerPath: string, headerLinks: Array<MenuItensType> }) => {
    const handleMenu = () => {
        const overlay = document.getElementById('menu-overlay') as HTMLSpanElement
        const container = document.getElementById('menu-container') as HTMLDivElement
        const content = document.getElementById('menu-content') as HTMLMenuElement

        if (content.classList.contains('hidden') && overlay.classList.contains('hidden')) {
            overlay.classList.remove('hidden')
            overlay.classList.add('flex')

            container.classList.add('rounded-b-none')

            content.classList.remove('hidden')
            content.classList.add('flex')
        } else {
            overlay.classList.remove('flex')
            overlay.classList.add('hidden')

            container.classList.remove('rounded-b-none')

            content.classList.remove('flex')
            content.classList.add('hidden')
        }
    }

    return (
        <>
            <span id='menu-overlay' onClick={handleMenu} className='w-screen h-screen bg-[#0000004d] backdrop-blur-[3px] fixed top-0 left-0 hidden z-40' />

            <div id='menu-container' className='w-fit border-2 border-leafgreen flex items-center sm:hidden md:flex lg:hidden rounded-md relative transition-all z-50'>
                <button onClick={handleMenu} title='Botão abrir/fechar menu de links de navegação' className='w-12 h-[2.33rem] bg-[url("/assets/icons/menu.svg")] bg-no-repeat bg-center bg-auto border-r-2 border-leafgreen flex items-center justify-center focus:rounded-tl-[0.063rem] hover:bg-leafgreen focus:bg-leafgreen filter-leafgreen hover:filter-none focus:filter-none transition-all' />

                <nav id='menu-content' className='w-[calc(100%_+_4px)] hidden absolute top-[2.45rem] -left-[2px] overflow-hidden z-[60]'>
                    <ul className='w-full flex flex-col'>
                        { headerLinks.map((menuRouter, index) => {
                            const activeRouter_link = menuRouter.href === routerPath ? 'text-quantum' : 'text-white/75'
                            const activeRouter_container = menuRouter.href === routerPath ?
                                index === headerLinks.length -1 ?
                                    'bg-leafgreen border-leafgreen hover:brightness-90 rounded-b-md' // Last active
                                    :
                                    'bg-leafgreen border-leafgreen hover:brightness-90' // Active
                                :
                                index === headerLinks.length -1 ?
                                    'bg-black-matt border-b-2 border-white/75 hover:bg-quantum rounded-b-md pb-2' // Last inactive
                                    :
                                    index === 0 ?
                                        'bg-black-matt border-white/75 hover:bg-quantum pt-2' // First inactive
                                        :
                                        'bg-black-matt border-white/75 hover:bg-quantum' // Inactive

                            return (
                                <li key={index} className={`border-x-2 ${activeRouter_container} flex-center py-1`}>
                                    <Link href={menuRouter.href} className={`${activeRouter_link} text-xl text-pretty`}>
                                        {menuRouter.content}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <Link
                    href={storeWebsite}
                    className='w-20 md:w-24 h-[2.33rem] font-bold text-[1.33rem] leading-tight text-leafgreen flex-center transition-all hover:bg-leafgreen hover:text-quantum'>
                    LOJA
                </Link>
            </div>
        </>
    )
}