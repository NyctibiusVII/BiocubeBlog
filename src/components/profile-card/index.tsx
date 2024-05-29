'use client'

import type { ProfileCardProps } from '@/types'

import { SocialMediaModalContext } from '@/contexts/social-media-modal-context'
import { useProfileImages } from '@/hooks/useProfileImages'

import { bigShouldersText } from '@/app/fonts'

import { useContext } from 'react'

import Image from 'next/image'
import Link  from 'next/link'

export const ProfileCard = ({ info }: ProfileCardProps) => {
    const { id, name, occupation, primaryColor, isAthlete } = info
    const { openSocialMediaModal } = useContext(SocialMediaModalContext)
    const { profileImageList } = useProfileImages()

    const color =
        primaryColor === 'green'  ? '#01F26D' :
            primaryColor === 'orange' ? '#FF8E26' :
                primaryColor === 'purple' ? '#9747FF' : '#ECF0F9'

    const CardContent = <>
        <div className='w-fit h-fit relative mx-auto rotate-45 sm:rotate-0 md:rotate-45 lg:rotate-0'>
            <div className='w-[70.71px] h-[70.71px] sm:w-full sm:h-fit md:w-[90px] md:h-[90px] lg:w-full lg:h-fit border-t-2 border-r-2 md:border-t-2 md:border-r-2 sm:border-0 lg:border-0  overflow-hidden' style={{ borderColor: color + 'BF' /* = 75% */ }}>
                <Image
                    className='w-full h-full sm:w-[150px] sm:h-[150px] md:w-full md:h-full lg:w-[200px] lg:h-[200px] rounded-t-lg -rotate-45 sm:rotate-0 md:-rotate-45 lg:rotate-0 scale-150 sm:scale-100 md:scale-150 lg:scale-100'
                    src={profileImageList[id]}
                    width={200}
                    height={200}
                    placeholder='blur'
                    priority={false}
                    alt={`Foto de perfil de ${name}`}
                />
            </div>

            <div
                className='w-full h-full absolute top-0 left-0 sm:hidden md:block lg:hidden transition-all'
                onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = `1rem 1rem 4rem -1rem ${color + 'BF'}`}
                onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = 'none'}
            />
        </div>

        <div className='w-full py-2 flex flex-col items-center'>
            <p className='text-sm lg:text-base lg:leading-5'>{occupation}</p>
            <p className={`${bigShouldersText.className} uppercase font-semibold text-xl leading-6 lg:text-2xl`} style={{ color: color }}>{name}</p>
        </div>

        <div
            className='w-full h-full absolute hidden sm:block md:hidden lg:block border-2 rounded-lg transition-all overflow-hidden'
            style={{ borderColor: color }}
            onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = `0 0 5rem -2rem ${color}, inset 0 0 4rem -2rem ${color}`}
            onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = 'none'}
        />
    </>

    return isAthlete ? (
        <Link
            href={`/atletas/${id}`}
            title={`Ver estatísticas WCA de ${name}`}
            className='w-fit min-w-[116px] relative md:min-w-[140px] flex flex-col gap-2 sm:gap-0 md:gap-4 lg:gap-0 pt-6 sm:pt-0 md:pt-6 lg:pt-0'
        >
            {CardContent}
        </Link>
    ) :
    (

        <button
            onClick={() => openSocialMediaModal(id)}
            title='Ver redes sociais'
            className='w-fit min-w-[116px] relative md:min-w-[140px] flex flex-col gap-2 sm:gap-0 md:gap-4 lg:gap-0 pt-6 sm:pt-0 md:pt-6 lg:pt-0'
        >
            {CardContent}
        </button>
    )
}