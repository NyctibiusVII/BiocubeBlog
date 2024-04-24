import { partnersMetadata } from '@/biocube-seo'
import { Background } from '@/components/background'
import Head from 'next/head'

export const metadata = partnersMetadata

export default function Partners() {
    return (
        <>

            <Background type='top' />
            <div>parceiros</div>
        </>
    )
}