'use client'

import { SocialMediaModalContext } from '@/contexts/social-media-modal-context'

import { useContext } from 'react'

import Link  from 'next/link'

export const SocialMediaModal = () => {
    const { hasSocialMedia, closeSocialMediaModal } = useContext(SocialMediaModalContext)

    return (
        <>
            <span onClick={closeSocialMediaModal} className='w-full h-full bg-[#00000080] fixed top-0 left-0 z-50' />

            <div className='w-fit h-fit min-w-[18rem] md:min-w-[22rem] lg:min-w-[25rem] max-w-[18rem] xs:max-w-80 md:max-w-[29.601rem] max-h-[20rem] bg-black-matt border border-glacier-white/50 md:border-2 px-6 py-4 md:px-8 md:py-6 lg:px-10 fixed top-[calc(50%_-_25%)] rounded-lg z-[60]'>
                <div className='w-full text-glacier-white/80 text-xl md:text-2xl lg:text-3xl flex items-center justify-between'>
                    Redes sociais
                    <button
                        onClick={closeSocialMediaModal}
                        title='Fechar modal de redes sociais'
                        className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 hover:font-medium rotate-45 border border-glacier-white/75 hover:bg-glacier-white md:border-[0.094rem] hover:text-quantum rounded-full flex-center transition-colors'
                    >
                        +
                    </button>
                </div>

                <span className='w-full h-[1px] md:h-[2px] bg-quantum my-4 md:my-5 lg:my-6 block' />

                <div className='w-full pt-1 md:pt-2 pb-2 flex justify-start gap-2 sm:gap-3 md:gap-4 overflow-x-scroll'>
                    { Object.entries(hasSocialMedia).length ? (
                        Object.entries(hasSocialMedia).map(([platform, link]) => {
                            if (link) {
                                const socialMediaLinkClassNames =
                                    platform === 'youtube'  ? 'text-[#FF2400] border-[#FF2400BF] hover:border-[#FF2400] hover:shadow-[inset_0_0_1.5rem_-1rem_#FF2400]' :
                                        platform === 'instagram' ? 'text-[#9747FF] border-[#9747FFBF] hover:border-[#9747FF] hover:shadow-[inset_0_0_1.5rem_-1rem_#9747FF]' :
                                            platform === 'wca' ? 'text-[#FAD73D] border-[#FAD73DBF] hover:border-[#FAD73D] hover:shadow-[inset_0_0_1.5rem_-1rem_#FAD73D]' : 'text-[#ECF0F9] border-[#ECF0F9BF] hover:border-[#ECF0F9] hover:shadow-[inset_0_0_1.5rem_-1rem_#ECF0F9]'

                                return (
                                    <Link key={platform} href={link} target='_blank' className={`px-4 md:px-5 lg:px-6 border-2 ${socialMediaLinkClassNames} rounded-full capitalize font-bold md:text-xl lg:text-2xl flex-center transition-colors`}>
                                        {platform}
                                    </Link>
                                )
                            }

                            return null
                        })
                    ) : (
                        <div className='w-full h-fit bg-delta-lake/5 flex-center border-2 border-dashed border-delta-lake/75 p-8 rounded-md'>
                            <p className='w-fit text-wrap text-center md:text-lg lg:text-xl text-glacier-white/50'>Sem redes sociais disponíveis!</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
