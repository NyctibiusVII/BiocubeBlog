import { athletesMetadata } from '@/biocube-seo'
import { Background } from '@/components/background'

export const metadata = athletesMetadata

export default function Athletes() {
    return (
        <>
            <Background type='top' />
            <div>Atletas</div>
        </>
    )
}