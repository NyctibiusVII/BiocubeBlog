'use client'

import {
    type PartnerContentProps,
    PARTNER_SLUG
} from '@/types'

import { MarkText } from '@/components/mark-text'

import { bigShouldersText } from '@/app/fonts'
import { processText }      from '@/utils'

import BodocoBannerImage from '/public/assets/partners/bodoco/banner.png'
import MacaeLogoImage    from '/public/assets/partners/macae/logo.png'

import { useState } from 'react'

import Image from 'next/image'

export const PartnerContent = ({ slug }: { slug: PARTNER_SLUG }) => {
    const [content, setContent] = useState<PartnerContentProps | null>()

    if(!content) {
        switch(slug) {
            case PARTNER_SLUG.BODOCO:
                setContent({
                    banner: BodocoBannerImage,
                    bannerTitle: ['BODOCÓ', 'OPEN 2019'],
                    title: 'Projeto cubo mágico Bodocó',
                    paragraphs: [
                        'O Projeto *Cubo Mágico Bodocó* surgiu no início de 2015 a partir da iniciativa do Professor *Ricardo Mendes* que leciona Matemática na _Escola Municipal Antonio Custódio_, localizada na Vila Cacimba Nova, zona rural do Município de Bodocó-PE.\nO professor Ricardo assistiu a uma _reportagem na TV_ onde um professor dava aulas de cubo mágico numa escola de São Paulo, na época ele ainda nem sabia resolver, tão pouco sabia que aquele professor de São Paulo era o *Rafael Cinoto*, sua futura inspiração. Após isso, o Professor Ricardo aprendeu a resolver o cubo e o levou para a escola, onde leciona até hoje (2019), a fim de despertar a curiosidade de seus alunos, eles ficaram encantados e logo queriam aprender também.',
                        'Para saber se daria certo, ele _ensinou primeiramente, em casa_, à sua irmã, *Raíssa*, e em alguns dias, _ela conseguiu_. Foi quando com autorização do Gestor da instituição na época, *Anderson Sindeaux*, que foram formadas turmas para aprender a resolvê-lo.\nO primeiro evento foi no mês de agosto daquele ano, numa gincana da escola, onde *uma das provas era o cubo mágico* e contou com a participação de _8 estudantes_ que tinham aprendido recentemente. Em dezembro de 2015, foi realizado o *1º Campeonato não-oficial* apenas nas modalidades *2x2* e *3x3* contando com a participação de _17 estudantes_.',
                        'Em 2016, mais estudantes se interessaram, as _oficinas_ passaram a ser realizadas semanalmente em horário extraclasse e o número de *“*curiosos*”* só aumentava. Neste ano foi realizado o *2º campeonato não-oficial* com a participação de _26 estudantes_, tendo como premiação *medalhas* e *certificados*.',
                        'Em 2017, a escola estava sob nova gestão, mesmo assim o seu novo Gestor *Cristiano Vieira* continuou dando todo apoio e o número de adeptos continuava crescendo. O *3º campeonato* contou com quase _40 participantes_ nas modalidades *2x2*, *3x3*, *pyraminx* e *3x3 com uma mão*. Foram meses de preparação e ansiedade, pois este campeonato serviu de classificação para o evento mais importante da história do projeto até então: o *Cariri Open 2017*, em Juazeiro do Norte-CE, *_primeiro campeonato oficial_* que iriam participar. Estudantes e alguns professores que iriam participar estavam com grande expectativa, até a _TV Globo_ veio fazer reportagem sobre o projeto. Foi quando em 19 de novembro de 2017, saiu de _Bodocó_ uma caravana com mais de 30 pessoas para *“*invadir*”* o campeonato em _Juazeiro do Norte_, foi um campeonato espetacular!',
                        'O _crescimento_ e os _sonhos_ não paravam, em 2018 surgiu a ideia de realizar o *1º campeonato oficial* em Bodocó: o *BODOCÓ OPEN*. Foi um ano de bastante _trabalho e dedicação_ em preparação para o campeonato, o número de estudantes cubistas já tinha ultrapassado as _100 pessoas_, mas nem todos puderam comparecer, mesmo assim, o evento realizado nos dias 29 e 30 de setembro ainda teve _60 participantes_, também foi possível contar com a presença de *Rafael Cinoto*, uma referência para o esporte no Brasil além de participantes dos estados da _Bahia_, _Ceará_ e _São Paulo_, enfim, o campeonato foi a concretização de um sonho. Em 25 de novembro do mesmo ano mais uma vez saiu uma caravana com mais de _30 pessoas_ rumo campeonato *Cariri Open*.',
                        'O ano de 2019 veio e trouxe consigo uma das maiores parcerias do projeto até então: a *BIOCUBE* juntamente com seu proprietário *Tiago Dias*. Ambos foram responsáveis pelo _fornecimento gratuito de dezenas de cubos mágicos_ de excelente qualidade aos cubistas participantes do projeto, o que deu uma grande injeção de ânimo para a _segunda edição do campeonato_. O *BODOCÓ OPEN 2019* foi realizado nos dias 5 e 6 de outubro e teve alguns dados interessantes:',
                        '∙ O *maior* número de participantes em campeonatos realizados no Nordeste: *84*;\n∙ Deste total, *48* eram do sexo feminino, o equivalente a *57,14%* o *maior* percentual de *_participação feminina do mundo_*;\tCom tanta mulher participando, _duas_ delas conseguiram *recordes nacionais femininos*: *Raíssa Mendes* com média de *6,30 seg* No pyraminx e *Sabrina Souza* com média de *1:40,21* no megaminx, sendo ambas as cubistas participantes do _Projeto Cubo Mágico Bodocó_ e patrocinadas pela *Biocube*.\nPara o futuro esperamos continuar crescendo e, tendo a _parceria da Biocube_, o crescimento será praticamente uma certeza, para que assim possamos levar e expandir _a alegria do cubo mágico_ a cada vez mais pessoas.'
                    ],
                    images: [
                        'bg-[url("/assets/partners/bodoco/img-2015.png")]',
                        'bg-[url("/assets/partners/bodoco/img-2017.png")]',
                        'bg-[url("/assets/partners/bodoco/img-2018.png")]',
                        'bg-[url("/assets/partners/bodoco/img-2019.png")]',
                    ]
                })
                break
            case PARTNER_SLUG.MACAE:
                setContent({
                    banner: MacaeLogoImage,
                    bannerTitle: ['MACAÉ', 'CUBO'],
                    title: 'Projeto Macaé cubo',
                    paragraphs: [
                        'Com a ausência pautada pela correria da nossa rotina, nos acomodamos ao olhar, _tudo é rápido_, _cômodo_, _mecânico_. _Cultural_?! Talvez!\nNão quantificar o tempo por ora tem um lado muito prejudicial, onde não valorizamos os minutos que compõem a nossa relação com as horas que ditam o dia.\n*Cubo de Rubik*, popularmente conhecido como *Cubo Mágico*, foi inventado por *Ernö Rubik*, húngro, que em 1974 quis ilustrar a _terceira dimensão_. Um projeto tão audacioso que, apesar do título de Jogo do Ano (Spiel des Jahres), demorou em torno de um mês para ser resolvido por aquele que o criou.\nConsiderado um dos _brinquedos mais populares da história_, ícone principal da década de 80, o Cubo Mágico possui não só *“*infinitas combinações*”*, como também, inúmeras versões; *3x3*, *2x2*, *4x4*... ressaltando em todas o mesmo objetivo: exercitar a mente, entender nossa relação com o tempo, além de todo trabalho cognitivo realizado.',
                        'Bacana, né?! Sim, Se não existisse uma carência significativa no Estado do RJ, principalmente na _cidade de Macaé_, onde o *Cubo de Rubik* não é visto somente sob a ótica do esporte, como também na relação com a _educação_, _bem-estar_ e _lazer_. Pensando nesse déficit e na grandeza que esse jogo de lógica traz, eis que surge a *Macaé Cubo*, órgão criado por *Márcio Medeiros* que, após sofrer um processo imersivo e de questionamentos do seu *“*eu*”*, encontrou nas _variáveis de cores_, a combinação do conhecimento, a cura de sua alma, além da sua relação com a _valorização do tempo_. Pensando em tudo isso e na magia que envolve todas as facetas das possibilidades, o órgão apresenta um grande desafio: *a acessibilidade através do conhecimento assistido*; Uma equipe de profissionais que exercita não somente o esporte, mas a lógica através da mente e o poder da imagem na psicologia das cores como instrumento de cura. Em formato de palestras, _workshops_ e _oficinas_, o órgão *Macaé Cubo* traz para o Estado a possibilidade de campeonatos e do trabalho assistido, principalmente em _Escolas Públicas_, ou pacientes usando nossas atividades como um processo de *“*tratamento*”* paliativo, ou portadores de necessidades especiais. Somos a lógica do aprendizado, através da humanização, num processo constante de fomentação da cultura, onde desmistificamos o hábito social da expressão: impossível resolver isso!! Conheça o poder da sua mente, na relação com o tempo, através das variáveis do nosso trabalho, telefone *(22) 99870-4205*. *@MárcioMedeiros*'
                    ],
                    images: ['bg-[url("/assets/partners/macae/img-project.png")]']
                })
                break
            default: return null
        }
    }

    if(!content) return null

    return (
        <>
            <div className='w-full flex justify-between'>
                <Image
                    className='hidden sm:inline-block md:hidden lg:inline-block sm:w-44 sm:h-44 lg:w-60 lg:h-60 xl:w-[19.438rem] xl:h-[19.438rem] border-2 border-leafgreen/50 rounded-md lg:rounded-lg'
                    src={content.banner}
                    width={311}
                    height={311}
                    placeholder='blur'
                    priority
                    alt={`Banner do ${slug}`}
                />
                <div className='w-full h-full flex flex-col justify-center'>
                    <p className={`bg-gradient-to-r from-transparent to-leafgreen/50 sm:to-leafgreen/75 md:to-leafgreen/50 lg:to-leafgreen/75 rounded-r-md ${bigShouldersText.className} text-right text-5xl xs:text-6xl md:text-[4rem] xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 py-1 xl:pr-4`}>{content.bannerTitle[0]}</p>
                    <p className={`${bigShouldersText.className} text-right text-4xl xs:text-[3.25rem] xs:leading-[3.5rem] md:text-6xl xl:text-[4.75rem] xl:leading-[5.25rem] pr-2 py-1 xl:pr-4`}><MarkText>{content.bannerTitle[1]}</MarkText></p>
                </div>
            </div>

            { content.paragraphs.length >= 2 &&
                <div className='w-full flex flex-col gap-4'>
                    <h1 className={`w-full ${bigShouldersText.className} uppercase text-3xl sm:text-4xl lg:text-5xl`}>{content.title}</h1>

                    <div className='w-full flex items-center justify-start lg:justify-between gap-8 xl:gap-4'>
                        <p className={`w-full xl:max-w-[63%] ${bigShouldersText.className} uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[0]) }} />

                        <span className={`w-[12.5rem] h-[16.5rem] xl:w-[21.25rem] ${content.images[0]} bg-no-repeat bg-center bg-cover border border-leafgreen hidden sm:inline-block md:hidden lg:inline-block shadow-[-2rem_1rem_16rem_0_rgba(1,242,109,0.25)] rounded-lg`} />
                    </div>

                    <p className={`w-full ${bigShouldersText.className} uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[1]) }} />
                </div>
            }

            { content.paragraphs.length >= 4 &&
                <div className='w-full flex flex-col items-end gap-4'>
                    <p className={`w-full ${bigShouldersText.className} uppercase text-wrap text-right text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[2]) }} />

                    <div className='w-full flex items-center justify-end lg:justify-between gap-8 xl:gap-4'>
                        <span className={`w-[12.5rem] h-[16.5rem] xl:w-[21.25rem] ${content.images[1]} bg-no-repeat bg-center bg-cover border border-leafgreen hidden sm:inline-block md:hidden lg:inline-block rounded-lg`} />

                        <p className={`w-full xl:max-w-[63%] ${bigShouldersText.className} uppercase text-wrap text-right text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[3]) }} />
                    </div>
                </div>
            }

            { content.paragraphs.length >= 5 &&
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex items-center justify-start lg:justify-between gap-8 xl:gap-4'>
                        <p className={`w-full xl:max-w-[63%] ${bigShouldersText.className} uppercase text-wrap text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[4]) }} />

                        <span className={`w-[12.5rem] h-[16.5rem] xl:w-[21.25rem] ${content.images[2]} bg-no-repeat bg-center bg-cover border border-leafgreen hidden sm:inline-block md:hidden lg:inline-block shadow-[-2rem_1rem_16rem_0_rgba(1,242,109,0.25)] rounded-lg`} />
                    </div>
                </div>
            }

            { content.paragraphs.length === 7 &&
                <div className='w-full flex flex-col items-end gap-4'>
                    <p className={`w-full ${bigShouldersText.className} uppercase text-wrap text-right text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[5]) }} />

                    <div className='w-full flex items-center justify-end lg:justify-between gap-8 xl:gap-4'>
                        <span className={`w-[12.5rem] h-[16.5rem] xl:w-[21.25rem] ${content.images[3]} bg-no-repeat bg-center bg-cover border border-leafgreen hidden sm:inline-block md:hidden lg:inline-block rounded-lg`} />

                        <p className={`w-full xl:max-w-[63%] ${bigShouldersText.className} uppercase text-wrap text-right text-lg leading-[1.375rem] sm:text-xl sm:leading-6 lg:text-2xl lg:leading-7`} dangerouslySetInnerHTML={{ __html: processText(content.paragraphs[6]) }} />
                    </div>
                </div>
            }
        </>
    )
}