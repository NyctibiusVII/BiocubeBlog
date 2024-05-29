'use client'

import {
    WCA_ID,
    BIOCUBE_ID
} from '@/types'

import { SocialMediaModal } from '@/components/social-media-modal'

import {
    createContext,
    ReactNode,
    useState
} from 'react'

interface SocialMediaModalContextData {
    socialId:              WCA_ID | BIOCUBE_ID | ''
    openSocialMediaModal:  (id: WCA_ID | BIOCUBE_ID) => void
    closeSocialMediaModal: () => void
}
interface SocialMediaModalProviderProps {
    children: ReactNode
}

export const SocialMediaModalContext = createContext({} as SocialMediaModalContextData)

export function SocialMediaModalProvider({ children }: SocialMediaModalProviderProps) {
    const [ isSocialMediaModalOpen, setIsSocialMediaModalOpen ] = useState(false)
    const [ socialId, setSocialId ] = useState<WCA_ID | BIOCUBE_ID | ''>('')

    const openSocialMediaModal = (id: WCA_ID | BIOCUBE_ID) => {
        setSocialId(id)
        setIsSocialMediaModalOpen(true)
    }
    const closeSocialMediaModal = () => setIsSocialMediaModalOpen(false)

    return (
        <SocialMediaModalContext.Provider
            value={{
                socialId,
                openSocialMediaModal,
                closeSocialMediaModal
            }}
        >
            { children }
            { isSocialMediaModalOpen && <SocialMediaModal /> }
        </SocialMediaModalContext.Provider>
    )
}