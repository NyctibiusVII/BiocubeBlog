import type { PartnerParamsProps } from '@/types'

import { partnerMetadata } from '@/biocube-seo'
import { partnerSlug }     from '@/biocube-data'

import { Background }     from '@/components/background'
import { PartnerContent } from '@/components/partner-content'

import { notFound } from 'next/navigation'

export const metadata = partnerMetadata

export default function Partner({ params }: PartnerParamsProps) {
    const { slug } = params
    if(!partnerSlug.includes(slug)) notFound()

    return (
        <>
            <Background type='left' />

            <main>
                <PartnerContent slug={slug} />
            </main>
        </>
    )
}