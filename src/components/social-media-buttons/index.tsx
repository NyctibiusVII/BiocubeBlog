'use client'

import { teamBiocubeInfo } from '@/biocube-data'

import {
    WCA_ID,
    BIOCUBE_ID
} from '@/types'

import { ReactNode } from 'react'

import Link from 'next/link'

export const SocialMediaButtons = ({ personId, fallback=undefined }: { personId: WCA_ID | BIOCUBE_ID, fallback?: ReactNode }) => {
    const { social } = teamBiocubeInfo[personId]

    return (
        <>
            { Object.entries(social).length ? (
                Object.entries(social).map(([platform, link]) => {
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
            ) : fallback ?? <p className='text-color-animate font-medium text-xl md:text-2xl lg:text-3xl'>(っ °Д °;)っ</p>
            }
        </>
    )
}