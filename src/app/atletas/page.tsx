import type { ProfileCardContentProps } from '@/types'

import { athletesMetadata } from '@/biocube-seo'
import {
    teamBiocubeId,
    teamBiocubeInfo
} from '@/biocube-data'

import { Background }  from '@/components/background'
import { MarkText }    from '@/components/mark-text'
import { ProfileCard } from '@/components/profile-card'

import { quattrocento } from '../fonts'

export const metadata = athletesMetadata

export default function Athletes() {
    return (
        <main>
            <Background type='top' />

            <div className='w-full flex-center flex-col gap-2'>
                <h1 className='sr-only'>Team Biocube</h1>
                <p className={`${quattrocento.className} text-center text-wrap text-[2.1rem] leading-9 xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-6xl`}><span className='text-color-animate'>TEAM</span> BIOCUBE</p>

                <p className={`w-full max-w-[47.375rem] xl:max-w-[51rem] ${quattrocento.className} text-center text-wrap leading-5 sm:text-lg sm:leading-[1.375rem] md:text-xl md:leading-6 xl:text-2xl`}>
                    <MarkText>“</MarkText>Quando dizem que você não pode, essas pessoas mostram os limites delas, não os seus.<MarkText>”</MarkText>
                </p>

                <svg className='w-6 h-6 md:w-8 md:h-8 mt-4 -mb-10 sm:-mb-6 overflow-visible' width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path className='animate-[small-float_3s_ease-in-out_infinite]' d='M7.829 17.133c.697 0 1.307-.37 1.65-.922v.63a1.94 1.94 0 0 0 3.59 1.02v.436a1.94 1.94 0 0 0 3.59 1.019v5.87a1.94 1.94 0 0 0 3.881 0V10.589l2.176 2.79a1.94 1.94 0 1 0 3.06-2.387l-6.1-7.823a5.11 5.11 0 0 0-4.25-2.272h-3.798c-3.102 0-5.74 2.513-5.74 5.74v8.556a1.94 1.94 0 0 0 1.94 1.94' fill='#EEEEEEE5'/>
                    <path className='animate-[pulse_3s_ease-in-out_infinite]' d='M23.283 23.924a1.28 1.28 0 0 0-1.28 1.28 3.407 3.407 0 0 1-3.404 3.403 3.407 3.407 0 0 1-3.403-3.403 1.28 1.28 0 0 0-2.56 0 5.97 5.97 0 0 0 5.964 5.963 5.97 5.97 0 0 0 5.963-5.963 1.28 1.28 0 0 0-1.28-1.28' fill='#EEEEEEE5'/>
                </svg>
            </div>

            <div className='w-full max-w-[770px] grid grid-cols-2 xs:grid-cols-3 sm:grid-rows-4 justify-items-center items-center gap-6 sm:gap-12'>
                { teamBiocubeId.map(id => {
                    const { name, occupation } = teamBiocubeInfo[id]

                    const profileInfo: ProfileCardContentProps = {
                        personId: id,
                        name,
                        occupation,
                        primaryColor: occupation === 'CEO' ? 'purple' : occupation === 'Atleta Biocube' ? 'green' : occupation === 'Desenvolvedor Parceiro' ? 'orange' : 'white',
                        isAthlete: occupation === 'CEO' || occupation === 'Atleta Biocube'
                    }

                    return <ProfileCard key={id} info={profileInfo} />
                }) }
            </div>
        </main>
    )
}