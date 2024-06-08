'use client'

import type { ProfileCardProps } from '@/types'

import { useProfileImages } from '@/hooks/useProfileImages'
import { bigShouldersText } from '@/app/fonts'

import { SocialMediaButtons } from '../social-media-buttons'

import { ReactNode } from 'react'

import Image from 'next/image'
import Link  from 'next/link'

export const ProfileCard = ({ info }: ProfileCardProps) => {
    const { personId, name, occupation, primaryColor, isAthlete } = info
    const { profileImageList } = useProfileImages()

    const color =
        primaryColor === 'green'  ? '#01F26D' :
            primaryColor === 'orange' ? '#FF8E26' :
                primaryColor === 'purple' ? '#9747FF' : '#ECF0F9'

    const CardContent = ({ social=undefined }: { social?: ReactNode }) => {
        return (
            <>
                <div className='w-fit h-fit relative mx-auto rotate-45 sm:rotate-0 md:rotate-45 lg:rotate-0'>
                    <div className='w-[70.71px] h-[70.71px] sm:w-full sm:h-fit md:w-[90px] md:h-[90px] lg:w-full lg:h-fit border-t-2 border-r-2 md:border-t-2 md:border-r-2 sm:border-0 lg:border-0  overflow-hidden' style={{ borderColor: color + 'BF' /* = 75% */ }}>
                        <Image
                            className='w-full h-full sm:w-[150px] sm:h-[150px] md:w-full md:h-full lg:w-[200px] lg:h-[200px] rounded-t-lg -rotate-45 sm:rotate-0 md:-rotate-45 lg:rotate-0 scale-150 sm:scale-100 md:scale-150 lg:scale-100'
                            src={profileImageList[personId]}
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

                {social}

                <div
                    id={`profile-shadow-[${personId}]`}
                    className='w-full h-full absolute hidden sm:block md:hidden lg:block border-2 rounded-lg transition-all overflow-hidden'
                    style={{ borderColor: color }}
                    onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = `0 0 5rem -2rem ${color}, inset 0 0 4rem -2rem ${color}`}
                    onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.boxShadow = 'none'}
                />
            </>
        )
    }

    const handleModal = () => {
        const overlay = document.getElementById(`profile-overlay-[${personId}]`) as HTMLSpanElement
        const container = document.getElementById(`profile-container-[${personId}]`) as HTMLButtonElement
        const containerShadow = document.getElementById(`profile-shadow-[${personId}]`) as HTMLDivElement
        const contentSocial = document.getElementById(`profile-social-[${personId}]`) as HTMLDivElement

        if (overlay.classList.contains('hidden')) {
            overlay.classList.remove('hidden')
            overlay.classList.add('flex')

            container.setAttribute('disabled', 'true')
            container.classList.remove('relative')
            container.classList.add('transform-to-modal')

            containerShadow.classList.add('!shadow-none')

            contentSocial.classList.remove('hidden')
            contentSocial.classList.add('flex')
        } else {
            overlay.classList.remove('flex')
            overlay.classList.add('hidden')

            container.removeAttribute('disabled')
            container.classList.remove('transform-to-modal')
            container.classList.add('relative')

            containerShadow.classList.remove('!shadow-none')

            contentSocial.classList.remove('flex')
            contentSocial.classList.add('hidden')
        }
    }

    return isAthlete ? (
        <Link
            href={`/atletas/${personId}`}
            title={`Ver estatísticas WCA de ${name}`}
            className='w-fit min-w-[116px] md:min-w-[140px] sm:max-w-[150px] md:max-w-none lg:max-w-[200px] relative flex flex-col gap-2 sm:gap-0 md:gap-4 lg:gap-0 pt-6 sm:pt-0 md:pt-6 lg:pt-0'
        >
            <CardContent />
        </Link>
    ) :
    (
        <>
            <span id={`profile-overlay-[${personId}]`} onClick={handleModal} className='w-screen h-screen bg-[#00000080] backdrop-blur-[3px] fixed top-0 left-0 hidden z-50' />

            <button
                id={`profile-container-[${personId}]`}
                onClick={handleModal}
                title='Ver redes sociais'
                className='w-fit min-w-[116px] md:min-w-[140px] sm:max-w-[150px] md:max-w-none lg:max-w-[200px] relative flex flex-col gap-2 sm:gap-0 md:gap-4 lg:gap-0 pt-6 sm:pt-0 md:pt-6 lg:pt-0'
            >
                <CardContent social={
                    <div id={`profile-social-[${personId}]`} className='w-full pb-2 -mt-1 hidden flex-wrap justify-center'>
                        <SocialMediaButtons
                            personId={personId}
                            className='z-[60]'
                            isShort
                            fallback={
                                <div className='w-fit h-fit bg-delta-lake/15 border-2 border-dashed border-delta-lake/75 px-4 rounded-md'>
                                    <p className='w-fit text-wrap text-sm text-glacier-white/75'>Sem mídias!</p>
                                </div>
                            }
                        />
                    </div>
                } />
            </button>
        </>
    )
}