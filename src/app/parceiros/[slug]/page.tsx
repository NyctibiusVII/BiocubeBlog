import { notFound } from 'next/navigation'
import { partnerMetadata } from '@/biocube-seo'
import { PartnerParamsProps } from '@/types'
import { partnerSlug } from '@/biocube-data'

export const metadata = partnerMetadata

export default function Partner({ params }: PartnerParamsProps) {
    const { slug } = params
    if(!partnerSlug.includes(slug)) notFound()

    return (
        <>
            <div>parceiro {slug}</div>
        </>
    )
}