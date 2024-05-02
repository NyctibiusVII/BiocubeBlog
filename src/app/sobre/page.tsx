import { aboutMetadata, organizationStructuredData } from '@/biocube-seo'
import { ContactForm } from '@/components/contact-form'
import { Background } from '@/components/background'
import { MarkText } from '@/components/mark-text'
import { BigShouldersText } from '../fonts'
import Image from 'next/image'
import Head from 'next/head'

export const metadata = aboutMetadata

export default function About() {
    return (
        <>
            <Head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
                />
            </Head>

            <Background type='left' />

            <main>
                <h1 className='sr-only'>Tiago Dias Ceo & Desenvolvedor</h1>
                <div className='w-full flex justify-between'>
                    <Image
                        className='w-[6.25rem] h-[6.25rem] xs:w-32 xs:h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 xl:w-[19.438rem] xl:h-[19.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg'
                        src='/assets/tiago-ceo.png'
                        width={311}
                        height={311}
                        priority
                        alt='Foto de perfil do Tiago, CEO da Biocube.'
                    />
                    <div className='w-full h-full flex flex-col justify-center'>
                        <p className={`bg-gradient-to-r from-black-matt/50 to-leafgreen/75 rounded-r-sm ${BigShouldersText.className} text-right text-[2rem] leading-9 xs:text-5xl sm:text-6xl md:text-5xl lg:text-[4rem] xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 sm:py-1 xl:pr-4`}>TIAGO DIAS</p>
                        <p className={`${BigShouldersText.className} text-right text-2xl xs:text-4xl sm:text-[3.25rem] sm:leading-[3.5rem] md:text-[2.5rem] md:leading-[2.75rem] lg:text-6xl xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 xl:pr-4`}><MarkText>CEO</MarkText> & <MarkText>DESENVOLVEDOR</MarkText></p>
                    </div>
                </div>

                <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-16 sm:gap-8 md:gap-16 lg:gap-12'>
                    <div className='w-full flex flex-col items-center sm:items-start gap-4'>
                        <h2 className={`w-full ${BigShouldersText.className} uppercase text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`}>O Que Fazemos</h2>
                        <p className={`w-full ${BigShouldersText.className} uppercase text-wrap leading-5 xs:text-lg xs:leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                            A <MarkText>Biocube</MarkText> foi criada com a missão de levar aos cubistas brasileiros a mesma <MarkText color='current' underline>qualidade e desempenho</MarkText> nos cubos que os principais competidores mundiais utilizam. <MarkText>Magnetizamos</MarkText> cubos, <MarkText>ajustamos</MarkText> e a <MarkText>lubrificação</MarkText> é feita com Lubes específicos para cubo mágico <MarkText color='current' underline>produzidos em laboratório</MarkText> ou <MarkText color='current' underline>importados</MarkText> e de qualidade superior a qualquer tipo de spray ou lubrificantes de silicone comum. <br/><br/>
                            Este serviço é sempre feito com <MarkText color='current' underline>extremo cuidado</MarkText> e <MarkText color='current' underline>perfeccionismo</MarkText>, <MarkText>evitando assim os lapsos</MarkText> cometidos na produção em massa que muitas vezes deixam a desejar na qualidade e finalização dos cubos que chegam sempre desregulados e secos internamente, fazendo com que o puzzle se desgaste rapidamente e perca seu real desempenho.
                        </p>
                        <Image
                            className='w-64 lg:w-80 xl:w-[22.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg mt-2'
                            src='/assets/diversified-cubes.png'
                            width={359}
                            height={180}
                            priority={false}
                            alt='Foto de cubos diversificados da Biocube.'
                        />
                    </div>

                    <div className='w-full flex flex-col items-center sm:items-end gap-4'>
                        <h2 className={`w-full ${BigShouldersText.className} text-right uppercase text-2xl xs:text-3xl sm:text-4xl lg:text-5xl`}>Nosso Trabalho</h2>
                        <p className={`w-full ${BigShouldersText.className} text-right uppercase text-wrap leading-5 xs:text-lg xs:leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                            Atualmente estamos trabalhando com <MarkText color='current' underline>diversos tipos de cubos</MarkText> fazendo a lubrificação total do quebra cabeça e ajustes de cada peça, nos <MarkText>Cubos</MarkText> (2x2; 3x3; 4x4; 5x5; 6x6 e 7x7), <MarkText>Pyraminx</MarkText>, <MarkText>Megaminx</MarkText>, <MarkText>Square1</MarkText> e <MarkText>Skewb</MarkText>, nós também modificamos alguns modelos.<br/>Trabalhamos com cubos <MarkText color='current' underline>não oficiais</MarkText> e <MarkText color='current' underline>Edições Limitadas</MarkText> também.<br/><br/>
                            Alguns de nossos cubos são entregues com um saquinho para carregar o cubo e evitar arranhar na mochila ou na bolsa.
                        </p>
                        <Image
                            className='w-64 lg:w-80 xl:w-[22.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg mt-2'
                            src='/assets/tiago-s-studio.png'
                            width={359}
                            height={180}
                            priority={false}
                            alt='Foto do studio do Tiago, CEO da Biocube.'
                        />
                    </div>
                </div>

                <div className='w-full flex items-end lg:justify-between'>
                    <ContactForm />
                </div>
            </main>
        </>
    )
}