'use client'

import type {
    WcaInfoType,
    Modalities,
    RankingData
} from '@/types'
import { processWCARecords } from '@/utils'

import {
    Fragment,
    useEffect,
    useMemo
} from 'react'

export const PersonalWCARecords = ({ infoRaw }: { infoRaw: WcaInfoType }) => {
    const wcaMedalsRecords = useMemo(() => {
        const medals = {
            gold: infoRaw.medals.gold,
            silver: infoRaw.medals.silver,
            bronze: infoRaw.medals.bronze
        }
        const sumRecords = {
            worldRecord: (infoRaw.records.single.WR ?? 0) + (infoRaw.records.average.WR ?? 0) || '-',
            continentalRecord: (infoRaw.records.single.CR ?? 0) + (infoRaw.records.average.CR ?? 0) || '-',
            nationalRecord: (infoRaw.records.single.NR ?? 0) + (infoRaw.records.average.NR ?? 0) || '-'
        }

        return { medals, sumRecords }
    }, [infoRaw.medals.bronze, infoRaw.medals.gold, infoRaw.medals.silver, infoRaw.records.average.CR, infoRaw.records.average.NR, infoRaw.records.average.WR, infoRaw.records.single.CR, infoRaw.records.single.NR, infoRaw.records.single.WR])

    const wcaRanking = useMemo(() => {
        const ranking: {[key in Modalities]: { single: RankingData, average: RankingData }} = {
            '222': { single: {}, average: {} },
            '333': { single: {}, average: {} },
            '444': { single: {}, average: {} },
            '555': { single: {}, average: {} },
            '666': { single: {}, average: {} },
            '777': { single: {}, average: {} },
            '333bf': { single: {}, average: {} },
            '333fm': { single: {}, average: {} },
            '333oh': { single: {}, average: {} },
            '333ft': { single: {}, average: {} },
            'clock': { single: {}, average: {} },
            'minx': { single: {}, average: {} },
            'pyram': { single: {}, average: {} },
            'skewb': { single: {}, average: {} },
            'sq1': { single: {}, average: {} },
            '444bf': { single: {}, average: {} },
            '555bf': { single: {}, average: {} },
            '333mbf': { single: {}, average: {} }
        }

        infoRaw.rank.singles.forEach(record => {
            ranking[record.eventId as Modalities] = {
                ...ranking[record.eventId as Modalities],
                single: record
            }
        })

        infoRaw.rank.averages.forEach(record => {
            ranking[record.eventId as Modalities] = {
                ...ranking[record.eventId as Modalities],
                average: record
            }
        })

        return ranking
    }, [infoRaw.rank.averages, infoRaw.rank.singles])

    const completedSolutions = useMemo(() => {
        const numOfModalities = 18
        let completedSolutionsCount = 0

        for (let i=0; i <= infoRaw.numberOfCompetitions-1; i++) {
            const competitions = infoRaw.results[infoRaw.competitionIds[i]]

            for (let j=0; j <= numOfModalities-1; j++) {
                const eventRound = competitions[Object.keys(wcaRanking).map(eventId => eventId as Modalities)[j]]
                const roundLength = eventRound ? eventRound.length : 0

                if (roundLength) {
                    const eventRoundLength = eventRound.length
                    for (let k=0; k <= eventRoundLength-1; k++) {
                        const round = eventRound[k]

                        // const roundPosition = round.position
                        // const roundBest = round.best
                        // const roundAverage = round.average
                        // const roundFormat = round.format
                        const roundSolves = round.solves.filter(solve => solve !== 0 && solve !== -1 && solve !== -2)
                        // const roundSolvesDNF = round.solves.filter(solve => solve === 0 || solve === -1 || solve === -2)

                        completedSolutionsCount += roundSolves.length
                    }
                }
            }
        }

        return completedSolutionsCount
    }, [infoRaw.competitionIds, infoRaw.numberOfCompetitions, infoRaw.results, wcaRanking])

    useEffect(() => {
        const isEven = infoRaw.rank.singles.length % 2 === 0
        const tableContainer = document.getElementById('table-container')

        if (isEven && tableContainer) {
            tableContainer.classList.add('pb-[0.4rem]')
            tableContainer.classList.add('inline-block')
        }
    }, [infoRaw.rank.singles.length])

    useEffect(() => {
        const tableContainer = document.getElementById('table-container')

        if (tableContainer) {
            const handleScroll = () => {
                const scrolled_left = tableContainer.scrollLeft
                const remainingScroll_left = (tableContainer.scrollWidth - tableContainer.clientWidth) - scrolled_left
                const isScrolledLeft = scrolled_left > 0
                const hasScrollLeftRemaining = remainingScroll_left <= 1

                const remainingScroll_right = tableContainer.scrollLeft
                const scrolled_right = (tableContainer.scrollWidth - tableContainer.clientWidth) - remainingScroll_right
                const hasScrollRightRemaining = remainingScroll_right <= 1
                const isScrolledRight = scrolled_right > 0

                const updateShadow = () => {
                    const addShadowLeftBool = (!isScrolledRight && !hasScrollRightRemaining) || !hasScrollRightRemaining
                    const addShadowRightBool = (!isScrolledLeft && !hasScrollLeftRemaining) || !hasScrollLeftRemaining

                    const shadowLeft = 'shadow-[inset_0_7rem_4rem_-4rem_#070707,inset_0_-7rem_4rem_-4rem_#070707,inset_2.5rem_0_4rem_-4rem_#444444]'
                    const shadowRight = 'shadow-[inset_0_7rem_4rem_-4rem_#070707,inset_0_-7rem_4rem_-4rem_#070707,inset_-2.5rem_0_4rem_-4rem_#444444]'
                    const shadowLeftRight = 'shadow-[inset_0_7rem_4rem_-4rem_#070707,inset_0_-7rem_4rem_-4rem_#070707,inset_2.5rem_0_4rem_-4rem_#444444,inset_-2.5rem_0_4rem_-4rem_#444444]'

                    if (addShadowLeftBool && !addShadowRightBool) {
                        tableContainer.classList.remove(shadowLeftRight)
                        tableContainer.classList.add(shadowLeft)
                    } else if (addShadowRightBool && !addShadowLeftBool) {
                        tableContainer.classList.remove(shadowLeftRight)
                        tableContainer.classList.add(shadowRight)
                    } else if (addShadowLeftBool && addShadowRightBool) {
                        tableContainer.classList.remove(shadowRight)
                        tableContainer.classList.remove(shadowLeft)
                        tableContainer.classList.add(shadowLeftRight)
                    }
                }

                return updateShadow()
            }

            handleScroll()
            tableContainer.addEventListener('scroll', handleScroll)

            return () => tableContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className='w-full flex items-center flex-col gap-8'>
                <div className='w-full max-w-[320px] sm:max-w-none px-4 flex flex-col sm:flex-row sm:justify-center sm:gap-8'>
                    <div className='w-full flex items-center justify-between gap-2 sm:w-fit sm:flex-col sm:gap-0'>
                        <p className='font-medium sm:text-xl md:font-semibold md:text-2xl'>ID da WCA</p>
                        <span className='font-light md:text-xl'>{infoRaw.id}</span>
                    </div>
                    <div className='w-full flex items-center justify-between gap-2 sm:w-fit sm:flex-col sm:gap-0'>
                        <p className='font-medium sm:text-xl md:font-semibold md:text-2xl'>Competições</p>
                        <span className='font-light md:text-xl'>{infoRaw.numberOfCompetitions ?? '-'}</span>
                    </div>
                    <div className='w-full flex items-center justify-between gap-2 sm:w-fit sm:flex-col sm:gap-0'>
                        <p className='font-medium sm:text-xl md:font-semibold md:text-2xl'>Soluções completadas</p>
                        <span className='font-light md:text-xl'>{completedSolutions ?? '-'}</span>
                    </div>
                </div>

                <div className='w-full max-w-[320px] sm:max-w-none flex flex-col items-end'>
                    <div className='w-full bg-color-animate sm:bg-[length:100%_100%] sm:via-revell sm:to-pumpkin sm:animate-none flex-center rounded-2xl rounded-br-none sm:rounded-br-2xl'>
                        <div className='w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] bg-black-matt flex-center rounded-2xl rounded-br-none sm:rounded-br-2xl'>
                            <div className='w-full p-4 flex justify-center gap-4 lg:gap-8'>
                                <div className='w-[55px] sm:w-fit flex flex-col items-center'>
                                    <p className='font-medium text-moonmist leading-6 text-xl md:font-semibold md:text-2xl'>Ouro</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.medals.gold}</span>
                                </div>
                                <div className='w-[55px] sm:w-fit flex flex-col items-center'>
                                    <p className='font-medium text-revell leading-6 text-xl md:font-semibold md:text-2xl'>Prata</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.medals.silver}</span>
                                </div>
                                <div className='w-[55px] sm:w-fit flex flex-col items-center'>
                                    <p className='font-medium text-pumpkin leading-6 text-xl md:font-semibold md:text-2xl'>Bronze</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.medals.bronze}</span>
                                </div>
                            </div>

                            <div className='w-full p-4 hidden sm:flex sm:justify-center sm:gap-4 lg:gap-8'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-medium leading-6 text-xl md:font-semibold md:text-2xl'>WR</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.sumRecords.worldRecord}</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='font-medium leading-6 text-xl md:font-semibold md:text-2xl'>CR</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.sumRecords.continentalRecord}</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='font-medium leading-6 text-xl md:font-semibold md:text-2xl'>NR</p>
                                    <span className='font-light text-white/75 leading-5 md:text-xl'>{wcaMedalsRecords.sumRecords.nationalRecord}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit bg-quantum font-light text-white/40 border border-t-0 border-white/10 px-10 pt-[6px] pb-1 flex-center gap-6 rounded-b-2xl sm:hidden'>
                        <div className='flex flex-col items-center'>
                            <p className='leading-5'>WR</p>
                            <span className='text-sm'>{wcaMedalsRecords.sumRecords.worldRecord}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='leading-5'>CR</p>
                            <span className='text-sm'>{wcaMedalsRecords.sumRecords.continentalRecord}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='leading-5'>NR</p>
                            <span className='text-sm'>{wcaMedalsRecords.sumRecords.nationalRecord}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-black-matt border-2 border-quantum sm:-mt-6 xl:-mt-10 rounded-lg sm:rounded-2xl overflow-hidden'>
                <h2 className='w-full font-medium text-center text-xl text-revell md:font-semibold md:text-2xl py-4 md:py-6'>Recordes Pessoais</h2>

                <div id='table-container' className='w-full overflow-x-scroll'>
                    <table className='w-full text-center text-white/50 md:text-xl table-fixed'>
                        <caption className='sr-only'>Recordes Pessoais de Categorias WCA</caption>

                        <thead>
                            <tr className='text-revell'>
                                <th className='w-36 md:w-52 font-medium md:font-semibold text-left pl-8'>Evento</th>

                                <th className='w-24 md:w-28 lg:w-32 text-right pr-4 font-medium md:font-semibold'>Tempo Único</th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Nacional - Tempo Único'>NR</abbr></th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Continental - Tempo Único'>CR</abbr></th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Mundial - Tempo Único'>WR</abbr></th>

                                <th className='w-24 md:w-28 lg:w-32 text-right pr-4 font-medium md:font-semibold'>Média</th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Nacional - Média'>NR</abbr></th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Continental - Média'>CR</abbr></th>
                                <th className='w-10 md:w-12 font-medium md:font-semibold'><abbr title='Ranking Mundial - Média'>WR</abbr></th>
                                <th className='w-4'>&nbsp;</th>
                            </tr>
                        </thead>

                        <tbody>
                            { Object.keys(wcaRanking).map((eventId, index) => {
                                const modalities = eventId as Modalities

                                if (!wcaRanking[modalities].single.best
                                    && !wcaRanking[modalities].average.best) return <Fragment key={index} />

                                const SingleRankCountry   = wcaRanking[modalities].single.rank?.country
                                const SingleRankContinent = wcaRanking[modalities].single.rank?.continent
                                const SingleRankWorld     = wcaRanking[modalities].single.rank?.world

                                const AverageRankCountry   = wcaRanking[modalities].average.rank?.country
                                const AverageRankContinent = wcaRanking[modalities].average.rank?.continent
                                const AverageRankWorld     = wcaRanking[modalities].average.rank?.world

                                const modalitiesImage: { [key in Modalities]: string } = {
                                    '222': 'bg-[url("/assets/cube/modalities/222.svg")]',
                                    '333': 'bg-[url("/assets/cube/modalities/333.svg")]',
                                    '444': 'bg-[url("/assets/cube/modalities/444.svg")]',
                                    '555': 'bg-[url("/assets/cube/modalities/555.svg")]',
                                    '666': 'bg-[url("/assets/cube/modalities/666.svg")]',
                                    '777': 'bg-[url("/assets/cube/modalities/777.svg")]',
                                    '333bf': 'bg-[url("/assets/cube/modalities/333bf.svg")]',
                                    '333fm': 'bg-[url("/assets/cube/modalities/333fm.svg")]',
                                    '333oh': 'bg-[url("/assets/cube/modalities/333oh.svg")]',
                                    '333ft': 'bg-[url("/assets/cube/modalities/333ft.svg")]',
                                    'clock': 'bg-[url("/assets/cube/modalities/clock.svg")]',
                                    'minx': 'bg-[url("/assets/cube/modalities/minx.svg")]',
                                    'pyram': 'bg-[url("/assets/cube/modalities/pyram.svg")]',
                                    'skewb': 'bg-[url("/assets/cube/modalities/skewb.svg")]',
                                    'sq1': 'bg-[url("/assets/cube/modalities/sq1.svg")]',
                                    '444bf': 'bg-[url("/assets/cube/modalities/444bf.svg")]',
                                    '555bf': 'bg-[url("/assets/cube/modalities/555bf.svg")]',
                                    '333mbf': 'bg-[url("/assets/cube/modalities/333mbf.svg")]'
                                }

                                return (
                                    <tr key={index} className='text-sm md:leading-8 md:text-xl font-light even:bg-quantum'>
                                        <td className='truncate text-left pl-8' data-event={modalities}>
                                            <span className={`w-2 h-2 md:w-3 md:h-3 ${modalitiesImage[modalities]} bg-no-repeat bg-center bg-cover mr-0.5 sm:mr-1 inline-block`} />
                                            {processWCARecords.event(modalities)}
                                        </td>

                                        <td className='truncate text-right px-4'>{processWCARecords.time(wcaRanking[modalities].single.best, modalities === '333fm')}</td>
                                        <td className='truncate' data-rank={SingleRankCountry}>{SingleRankCountry}</td>
                                        <td className='truncate' data-rank={SingleRankContinent}>{SingleRankContinent}</td>
                                        <td className='truncate' data-rank={SingleRankWorld}>{SingleRankWorld}</td>

                                        <td className='truncate text-right px-4'>{processWCARecords.time(wcaRanking[modalities].average.best)}</td>
                                        <td className='truncate' data-rank={AverageRankCountry}>{AverageRankCountry}</td>
                                        <td className='truncate' data-rank={AverageRankContinent}>{AverageRankContinent}</td>
                                        <td className='truncate' data-rank={AverageRankWorld}>{AverageRankWorld}</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}