'use client'

import type { SocialMediaButtonsType } from '@/types'
import { teamBiocubeInfo } from '@/biocube-data'

import Link from 'next/link'

export const SocialMediaButtons = ({ personId, isShort=false, fallback=undefined, className='' }: SocialMediaButtonsType) => {
    const { social } = teamBiocubeInfo[personId]
    const linkResponsivenessStyles = !isShort ?
        'px-4 md:px-5 lg:px-6 md:text-xl lg:text-2xl'
        : 'mx-1 mb-1 px-3 text-sm leading-[15px]'

    return (
        <>
            { Object.entries(social).length ? (
                Object.entries(social).map(([platform, link]) => {
                    if (link) {
                        const linkTextStyles =
                            platform === 'youtube'  ? 'text-[#FF2400] border-[#FF2400BF] hover:border-[#FF2400] hover:shadow-[inset_0_0_1.5rem_-1rem_#FF2400]' :
                                platform === 'instagram' ? 'text-[#9747FF] border-[#9747FFBF] hover:border-[#9747FF] hover:shadow-[inset_0_0_1.5rem_-1rem_#9747FF]' :
                                    platform === 'wca' ? 'text-[#FAD73D] border-[#FAD73DBF] hover:border-[#FAD73D] hover:shadow-[inset_0_0_1.5rem_-1rem_#FAD73D]' : 'text-[#ECF0F9] border-[#ECF0F9BF] hover:border-[#ECF0F9] hover:shadow-[inset_0_0_1.5rem_-1rem_#ECF0F9]'

                        const linkText = !isShort ? platform :
                            platform === 'youtube'  ? 'YT' :
                                platform === 'instagram' ? 'Insta' :
                                    platform === 'wca' ? 'WCA' : 'Github'

                        return (
                            <Link key={platform} href={link} target='_blank' className={`${linkTextStyles} ${linkResponsivenessStyles} font-bold capitalize border-2 rounded-full flex-center transition-colors ${className}`}>
                                {linkText}
                            </Link>
                        )
                    }

                    return null
                })
            ) : fallback ?? <p className='text-color-animate font-medium text-xl md:text-2xl lg:text-3xl'>(っ °Д °;)っ</p>
            }
        </>
    )
}