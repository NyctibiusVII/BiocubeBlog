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
        <>
            <Background type='top' />

            <main>
                <div className='w-full flex-center flex-col gap-2'>
                    <h1 className='sr-only'>Team Biocube</h1>
                    <p className={`${quattrocento.className} text-center text-wrap text-[2.1rem] leading-9 xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-6xl`}><span className='text-color-animate'>TEAM</span> BIOCUBE</p>

                    <p className={`w-full max-w-[47.375rem] xl:max-w-[51rem] ${quattrocento.className} text-center text-wrap leading-5 sm:text-lg sm:leading-[1.375rem] md:text-xl md:leading-6 xl:text-2xl`}>
                        <MarkText>“</MarkText>Quando dizem que você não pode, essas pessoas mostram os limites delas, não os seus.<MarkText>”</MarkText>
                    </p>
                </div>

                <div className='w-full max-w-[770px] grid grid-cols-2 xs:grid-cols-3 sm:grid-rows-4 justify-items-center items-center gap-6 sm:gap-12'>
                    { teamBiocubeId.map(id => {
                        const { name, occupation } = teamBiocubeInfo[id]

                        const profileInfo: ProfileCardContentProps = {
                            id,
                            name,
                            occupation,
                            primaryColor: occupation === 'CEO' ? 'purple' : occupation === 'Atleta Biocube' ? 'green' : occupation === 'Desenvolvedor Parceiro' ? 'orange' : 'white',
                            isAthlete: occupation === 'CEO' || occupation === 'Atleta Biocube'
                        }

                        return <ProfileCard key={id} info={profileInfo} />
                    }) }
                </div>
            </main>
        </>
    )
}