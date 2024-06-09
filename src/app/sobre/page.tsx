import {
    aboutMetadata,
    organizationStructuredData
} from '@/biocube-seo'

import StructuredData  from '@/components/structured-data'
import { ContactForm } from '@/components/contact-form'
import { Background }  from '@/components/background'
import { MarkText }    from '@/components/mark-text'

import { bigShouldersText } from '../fonts'

import CEOProfileImage       from '/public/assets/tiago/ceo-profile.png'
import DiversifiedCubesImage from '/public/assets/tiago/company/diversified-cubes.png'
import StudioImage           from '/public/assets/tiago/company/studio.png'

import Image from 'next/image'

export const metadata = aboutMetadata

export default function About() {
    return (
        <main>
            <StructuredData data={organizationStructuredData} />
            <Background type='left' />

            <h1 className='sr-only'>Tiago Dias Ceo & Desenvolvedor</h1>
            <div className='w-full flex justify-between'>
                <Image
                    className='hidden sm:inline-block md:hidden lg:inline-block sm:w-44 sm:h-44 lg:w-60 lg:h-60 xl:w-[19.438rem] xl:h-[19.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg'
                    src={CEOProfileImage}
                    width={311}
                    height={311}
                    placeholder='blur'
                    priority
                    alt='Foto de perfil do Tiago, CEO da Biocube.'
                />
                <div className='w-full h-full flex flex-col justify-center'>
                    <p className={`bg-gradient-to-r from-transparent to-leafgreen/50 sm:to-leafgreen/75 md:to-leafgreen/50 lg:to-leafgreen/75 rounded-r-md ${bigShouldersText.className} text-right text-5xl xs:text-6xl md:text-[4rem] xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 py-1 xl:pr-4`}>TIAGO DIAS</p>
                    <p className={`${bigShouldersText.className} text-right text-4xl xs:text-[3.25rem] xs:leading-[3.5rem] md:text-6xl xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 py-1 xl:pr-4`}><MarkText>CEO</MarkText> & <MarkText>DESENVOLVEDOR</MarkText></p>
                </div>
            </div>

            <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-16 sm:gap-8 md:gap-16 lg:gap-12'>
                <div className='w-full flex flex-col items-center sm:items-start gap-4'>
                    <h2 className={`w-full ${bigShouldersText.className} uppercase text-3xl sm:text-4xl lg:text-5xl`}>O Que Fazemos</h2>
                    <p className={`w-full ${bigShouldersText.className} uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                        A <MarkText>Biocube</MarkText> foi criada com a missão de levar aos cubistas brasileiros a mesma <MarkText color='current' underline>qualidade e desempenho</MarkText> nos cubos que os principais competidores mundiais utilizam. <MarkText>Magnetizamos</MarkText> cubos, <MarkText>ajustamos</MarkText> e a <MarkText>lubrificação</MarkText> é feita com Lubes específicos para cubo mágico <MarkText color='current' underline>produzidos em laboratório</MarkText> ou <MarkText color='current' underline>importados</MarkText> e de qualidade superior a qualquer tipo de spray ou lubrificantes de silicone comum. <br/><br/>
                        Este serviço é sempre feito com <MarkText color='current' underline>extremo cuidado</MarkText> e <MarkText color='current' underline>perfeccionismo</MarkText>, <MarkText>evitando assim os lapsos</MarkText> cometidos na produção em massa que muitas vezes deixam a desejar na qualidade e finalização dos cubos que chegam sempre desregulados e secos internamente, fazendo com que o puzzle se desgaste rapidamente e perca seu real desempenho.
                    </p>
                    <Image
                        className='w-64 lg:w-80 xl:w-[22.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg mt-2'
                        src={DiversifiedCubesImage}
                        width={359}
                        height={180}
                        placeholder='blur'
                        priority={false}
                        alt='Foto de cubos diversificados da Biocube.'
                    />
                </div>

                <div className='w-full flex flex-col items-center sm:items-end gap-4'>
                    <h2 className={`w-full ${bigShouldersText.className} text-right uppercase text-3xl sm:text-4xl lg:text-5xl`}>Nosso Trabalho</h2>
                    <p className={`w-full ${bigShouldersText.className} text-right uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`}>
                        Atualmente estamos trabalhando com <MarkText color='current' underline>diversos tipos de cubos</MarkText> fazendo a lubrificação total do quebra cabeça e ajustes de cada peça, nos <MarkText>Cubos</MarkText> (2x2; 3x3; 4x4; 5x5; 6x6 e 7x7), <MarkText>Pyraminx</MarkText>, <MarkText>Megaminx</MarkText>, <MarkText>Square1</MarkText> e <MarkText>Skewb</MarkText>, nós também modificamos alguns modelos.<br/>Trabalhamos com cubos <MarkText color='current' underline>não oficiais</MarkText> e <MarkText color='current' underline>Edições Limitadas</MarkText> também.<br/><br/>
                        Alguns de nossos cubos são entregues com um saquinho para carregar o cubo e evitar arranhar na mochila ou na bolsa.
                    </p>
                    <Image
                        className='w-64 lg:w-80 xl:w-[22.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg mt-2'
                        src={StudioImage}
                        width={359}
                        height={180}
                        placeholder='blur'
                        priority={false}
                        alt='Foto do studio do Tiago, CEO da Biocube.'
                    />
                </div>
            </div>

            <div className='w-full flex items-end lg:justify-between'>
                <ContactForm />
            </div>
        </main>
    )
}