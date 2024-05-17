'use client'

import type { SocialMediaModalContent } from '@/types'

import { SocialMediaModal } from '@/components/social-media-modal'

import {
    createContext,
    ReactNode,
    useState
} from 'react'

interface SocialMediaModalContextData {
    hasSocialMedia:        SocialMediaModalContent
    openSocialMediaModal:  (social: SocialMediaModalContent) => void
    closeSocialMediaModal: () => void
}
interface SocialMediaModalProviderProps {
    children: ReactNode
}

export const SocialMediaModalContext = createContext({} as SocialMediaModalContextData)

export function SocialMediaModalProvider({ children }: SocialMediaModalProviderProps) {
    const [ isSocialMediaModalOpen, setIsSocialMediaModalOpen ] = useState(false)
    const [ hasSocialMedia, setHasSocialMedia ] = useState<SocialMediaModalContent>({})

    const openSocialMediaModal = (social: SocialMediaModalContent) => {
        setHasSocialMedia(social)
        setIsSocialMediaModalOpen(true)
    }
    const closeSocialMediaModal = () => setIsSocialMediaModalOpen(false)

    return (
        <SocialMediaModalContext.Provider
            value={{
                hasSocialMedia,
                openSocialMediaModal,
                closeSocialMediaModal
            }}
        >
            { children }
            { isSocialMediaModalOpen && <SocialMediaModal /> }
        </SocialMediaModalContext.Provider>
    )
}