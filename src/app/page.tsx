import {
    instagramBiocube,
    storeWebsite,
    theCubicleWebsite,
    youtubeBiocube
} from '@/biocube-data'
import {
    homeMetadata,
    organizationStructuredData
} from '@/biocube-seo'

import StructuredData from '@/components/structured-data'
import { Background } from '@/components/background'
import { MarkText }   from '@/components/mark-text'

import { bigShouldersText } from './fonts'

import TiagoFamilyImage     from '/public/assets/tiago/family.png'
import CubeCollectionsImage from '/public/assets/tiago/company/cube-collections.png'

import Image from 'next/image'
import Link  from 'next/link'

export const metadata = homeMetadata

export default function Home() {
    return (
        <main>
            <StructuredData data={organizationStructuredData} />
            <Background type='right' />

            <div className='w-full flex items-center justify-between gap-4 xl:gap-16'>
                <h1 className={`${bigShouldersText.className} sm:max-w-[28rem] md:max-w-full xl:max-w-[38.75rem] font-normal text-[2.5rem] leading-[3rem] xs:text-[2.75rem] xs:leading-[3.25rem] md:text-[3rem] lg:text-[4rem] md:leading-[3.5rem] lg:leading-[4.5rem] uppercase`}>
                    <MarkText className='select-all'>Biocube</MarkText> é um portal onde você irá encontrar nossos contatos, nossa loja e projetos sociais.
                </h1>

                <Image
                    className='w-44 h-auto lg:w-auto hidden sm:inline-block md:hidden xl:inline-block xl:drop-shadow-[0_0_15rem_#01F26D] z-0'
                    src='/assets/cube/cube-biocube.svg'
                    width={281}
                    height={323}
                    priority
                    alt='Cubo mágico temático da Biocube.'
                />
            </div>

            <div className='max-w-72 sm:max-w-none md:max-w-80 lg:max-w-96 xl:max-w-none flex flex-col items-center xl:items-end'>
                <div className='border-2 border-leafgreen rounded-t-md flex flex-col items-center gap-2 p-4 overflow-hidden xl:p-0 sm:flex-row md:flex-col xl:flex-row xl:gap-0 xl:rounded-bl-md'>
                    <Image
                        className='w-64 h-auto sm:w-[10.667rem] sm:h-32 md:w-72 md:h-auto lg:w-[22.667rem] xl:h-[17rem] rounded-sm xl:rounded-none'
                        src={TiagoFamilyImage}
                        width={363}
                        height={272}
                        placeholder='blur'
                        priority={false}
                        alt='Foto de familia com Tiago, Vanessa e Luna (cadela).'
                    />
                    <p className={`${bigShouldersText.className} max-w-96 xl:max-w-[45rem] leading-6 text-wrap text-center uppercase sm:text-right md:text-center xl:text-right text-xl lg:text-3xl xl:text-4xl xl:py-4 xl:pl-2 xl:pr-6`}>
                        Este sou eu <MarkText>Tiago</MarkText> e esta é minha família, além da <MarkText>Vanessa</MarkText> e da <MarkText>Luna</MarkText> que está comendo meus dedos nossa família se estende a milhares de cubistas pelo Brasil, aqui muitos clientes se tornam amigos e no fim de tudo é isso que nos torna tão especiais.
                    </p>
                </div>

                <div className='w-full xl:max-w-80 border-2 border-t-0 border-leafgreen rounded-b-md flex overflow-hidden'>
                    <Link href={instagramBiocube} title='Abrir o instagram da Biocube' className='w-full h-9 bg-[url("/assets/icons/social/instagram.svg")] bg-auto bg-no-repeat bg-center primary-social-button hover:filter-leafgreen py-1 flex justify-center' />
                    <Link href={youtubeBiocube} title='Abrir o youtube da Biocube' className='w-full h-9 bg-[url("/assets/icons/social/youtube.svg")] bg-auto bg-no-repeat bg-center primary-social-button hover:filter-leafgreen py-1 flex justify-center' />
                    <Link href={theCubicleWebsite} title='Abrir o site the cubicle' className='w-full h-9 bg-[url("/assets/icons/social/the-cubicle.svg")] bg-auto bg-no-repeat bg-center primary-social-button py-1 hover:filter-leafgreen flex justify-center' />
                </div>
            </div>

            <div className='max-w-72 sm:max-w-none md:max-w-80 lg:max-w-96 xl:max-w-none flex flex-col items-center xl:items-start'>
                <div className='border-2 border-leafgreen rounded-t-md flex flex-col-reverse items-center gap-2 p-4 overflow-hidden xl:p-0 sm:flex-row md:flex-col-reverse xl:flex-row xl:gap-0 xl:rounded-br-md'>
                    <p className={`${bigShouldersText.className} max-w-96 xl:max-w-[45rem] leading-6 text-wrap text-center uppercase sm:text-left md:text-center xl:text-left text-xl lg:text-3xl xl:text-4xl xl:py-4 xl:pr-2 xl:pl-6`}>
                        Na nossa <MarkText>loja</MarkText> você vai encontrar diversos produtos super maneiros, <MarkText>Cubos mágicos</MarkText> de diversas modalidades oficiais e não oficiais, <MarkText>roupas</MarkText>, <MarkText>acessórios</MarkText>, <MarkText>lubrificantes</MarkText> próprios para cubos e muito mais!
                    </p>
                    <Image
                        className='w-64 h-auto sm:w-[10.667rem] sm:h-32 md:w-72 md:h-auto lg:w-[22.667rem] xl:h-[17rem] rounded-sm xl:rounded-none'
                        src={CubeCollectionsImage}
                        width={363}
                        height={272}
                        placeholder='blur'
                        priority={false}
                        alt='Foto de familia com Tiago, Vanessa e Luna (cadela).'
                    />
                </div>

                <div className='w-full xl:max-w-80 border-2 border-t-0 border-leafgreen rounded-b-md flex overflow-hidden'>
                    <Link href={storeWebsite} className={`w-full group primary-social-button ${bigShouldersText.className} font-bold md:text-xl lg:text-2xl py-1 flex-center gap-1`}>
                        <span className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-[url("/assets/icons/bag.svg")] bg-no-repeat bg-center bg-cover group-hover:filter-leafgreen' />
                        LOJA BIOCUBE
                    </Link>
                </div>
            </div>
        </main>
    )
}
