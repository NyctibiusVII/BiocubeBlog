import { partnersMetadata } from '@/biocube-seo'

import { Background } from '@/components/background'
import { MarkText }   from '@/components/mark-text'

import {
    bigShouldersText,
    quattrocento
} from '@/app/fonts'

import BodocoBannerImage from '/public/assets/partners/bodoco/banner.png'
import MacaeLogoImage    from '/public/assets/partners/macae/logo.png'

import Link  from 'next/link'
import Image from 'next/image'

export const metadata = partnersMetadata

export default function Partners() {
    return (
        <>
            <Background type='top' />

            <main>
                <div className='w-full flex flex-col gap-4 lg:gap-6'>
                    <h1 className={`${quattrocento.className} text-center text-4xl sm:text-[2.5rem] md:text-5xl lg:text-6xl`}>PARCEIROS BIOCUBE</h1>

                    <div className='w-full flex-center gap-4 lg:gap-8'>
                        <Image
                            className='w-14 h-14 sm:w-[4.25rem] sm:h-[4.25rem] md:w-20 md:h-20 lg:w-24 lg:h-24 outline outline-1 lg:outline-2 outline-glacier-white rounded-full'
                            src={BodocoBannerImage}
                            width={311}
                            height={311}
                            placeholder='blur'
                            priority={false}
                            alt='Banner do Bodocó, parceiro da Biocube.'
                        />
                        <Image
                            className='w-14 h-14 sm:w-[4.25rem] sm:h-[4.25rem] md:w-20 md:h-20 lg:w-24 lg:h-24 outline outline-1 lg:outline-2 outline-glacier-white rounded-full'
                            src={MacaeLogoImage}
                            width={311}
                            height={311}
                            placeholder='blur'
                            priority={false}
                            alt='Logo do Macaé, parceiro da Biocube.'
                        />
                    </div>
                </div>

                <div className='w-full flex flex-col gap-4'>
                    <h2 className={`w-full ${bigShouldersText.className} uppercase text-3xl sm:text-4xl lg:text-5xl`}>Bodocó open 2019</h2>

                    <div className='w-full flex items-center justify-start lg:justify-between gap-4'>
                        <p className={`w-full lg:max-w-[38rem] ${bigShouldersText.className} uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                            O Projeto <MarkText>Cubo Mágico Bodocó</MarkText> surgiu no início de 2015 a partir da iniciativa do Professor <MarkText>Ricardo Mendes</MarkText> que leciona Matemática na <MarkText color='current' underline>Escola Municipal Antonio Custódio</MarkText>, localizada na Vila Cacimba Nova, zona rural do Município de Bodocó-PE.<br />
                            O professor Ricardo assistiu a uma <MarkText color='current' underline>reportagem na TV</MarkText> onde um professor dava aulas de cubo mágico numa escola de São Paulo, na época ele ainda nem sabia resolver, tão pouco sabia que aquele professor de São Paulo era o <MarkText>Rafael Cinoto</MarkText>, sua futura inspiração. Após isso, o Professor Ricardo aprendeu a resolver o cubo e o levou para a escola, onde leciona até hoje (2019), a fim de despertar a curiosidade de seus alunos, eles ficaram encantados e logo queriam aprender também. [<MarkText>...</MarkText>]
                        </p>

                        <div className='hidden sm:flex md:hidden lg:flex gap-4' role='img' aria-label='Coleção de fotos do projeto Bodocó.'>
                            <div className='hidden xl:flex flex-col gap-4'>
                                <span className='w-[12.5rem] h-[10.125rem] bg-[url("/assets/partners/bodoco/img-2019.png")] bg-no-repeat bg-center bg-cover border-t border-l border-leafgreen rounded-tl-lg' />
                                <span className='w-[12.5rem] h-[10.125rem] bg-[url("/assets/partners/bodoco/img-alternative.png")] bg-no-repeat bg-center bg-cover border-b border-l border-leafgreen rounded-bl-lg' />
                            </div>

                            <span className='w-[12.5rem] h-[21.25rem] bg-[url("/assets/partners/bodoco/img-2015.png")] bg-no-repeat bg-center bg-cover border xl:border-l-0 border-leafgreen rounded-lg xl:rounded-l-none' />
                        </div>
                    </div>

                    <Link href='/parceiros/bodoco' className={`w-full sm:max-w-96 group secondary-button md:text-xl py-1 flex items-center justify-center gap-1`}>
                        LER MAIS
                        <span className='w-5 h-5 md:w-[1.375rem] md:h-[1.375rem] bg-[url("/assets/icons/book.svg")] bg-no-repeat bg-center bg-cover transition-all group-hover:brightness-0' />
                    </Link>
                </div>

                <div className='w-full flex flex-col items-end gap-4'>
                    <h2 className={`w-full ${bigShouldersText.className} uppercase text-right text-3xl sm:text-4xl lg:text-5xl`}>Macaé cubo</h2>

                    <div className='w-full flex items-center justify-end lg:justify-between gap-4'>
                        <div className='hidden sm:flex md:hidden lg:flex gap-4' role='img' aria-label='Coleção de fotos do projeto Bodocó.'>
                            <span className='w-[12.5rem] h-[21.25rem] bg-[url("/assets/partners/macae/img-project.png")] bg-no-repeat bg-center xl:bg-left bg-cover border xl:border-r-0 border-leafgreen xl:mb-16 rounded-lg xl:rounded-r-none' />
                            <span className='w-[12.5rem] h-[21.25rem] hidden xl:inline-block bg-[url("/assets/partners/macae/img-project.png")] bg-no-repeat bg-right bg-cover border border-l-0 border-leafgreen mt-16 rounded-r-lg' />
                        </div>

                        <p className={`w-full lg:max-w-[38rem] ${bigShouldersText.className} uppercase text-wrap text-right text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                            <MarkText>{'“'}</MarkText>Se não existisse uma carência significativa no Estado do RJ, principalmente na <MarkText color='current' underline>cidade de Macaé</MarkText>, onde o <MarkText>Cubo de Rubik</MarkText> não é visto somente sob a ótica do <MarkText color='current' underline>esporte</MarkText>, como também na relação com a <MarkText color='current' underline>educação</MarkText>, <MarkText color='current' underline>bem-estar</MarkText> e <MarkText color='current' underline>lazer</MarkText>. Pensando nesse déficit e na grandeza que esse jogo de lógica traz, eis que surge a <MarkText>Macaé Cubo</MarkText>, órgão criado por <MarkText>Márcio Medeiros</MarkText> que, após sofrer um processo imersivo e de questionamentos do seu <MarkText>{'“'}</MarkText>eu<MarkText>{'”'}</MarkText>, encontrou nas <MarkText color='current' underline>variáveis de cores</MarkText>, a combinação do conhecimento, a cura de sua alma, além da sua relação com a <MarkText color='current' underline>valorização do tempo</MarkText>. Pensando em tudo isso e na magia que envolve todas as facetas das possibilidades, o órgão apresenta um grande desafio: <MarkText>a acessibilidade através do conhecimento assistido</MarkText>; Uma equipe de profissionais que exercita não somente o esporte, mas a lógica através da mente e o poder da imagem na psicologia das cores como instrumento de cura.<MarkText>{'”'}</MarkText> [<MarkText>...</MarkText>]
                        </p>
                    </div>

                    <Link href='/parceiros/macae' className={`w-full sm:max-w-96 group secondary-button text-md lg:text-lg xl:text-xl py-1 flex items-center justify-center gap-1`}>
                        LER MAIS
                        <span className='w-5 h-5 md:w-[1.375rem] md:h-[1.375rem] bg-[url("/assets/icons/book.svg")] bg-no-repeat bg-center bg-cover transition-all group-hover:brightness-0' />
                    </Link>
                </div>
            </main>
        </>
    )
}