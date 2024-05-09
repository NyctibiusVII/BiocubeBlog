'use client'

import type {
    ApiVideosType,
    YoutubePlaylistProps
} from '@/types'

import {
    useEffect,
    useState
} from 'react'

import Image from 'next/image'

export const YoutubePlaylist = ({ apiKey, cubeTutorialImages }: YoutubePlaylistProps) => {
    const [videos, setVideos] = useState<ApiVideosType[] | null>()

    const suspenseFallbackClassName = 'bg-quantum rounded-2xl animate-pulse'
    const playlistId = 'PLWSSy4mS4c5aXhdj5K6f72E4vDTtk-cY4'

    useEffect(() => {
        const fetchVideos = async () => {
            await fetch(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&fields=items(snippet(title,description,resourceId(videoId)))&maxResults=7`
            )
            .then(response => response.json())
            .then(data => setVideos(data.items))
            .catch(error => console.error(error))
        }

        fetchVideos()
    }, [apiKey])


    return videos ? (
        <>
            { videos.map((video, index) => (
                <div key={index} className='w-full 2xl:max-w-[90%] group flex odd:flex-row-reverse even:flex-row items-center justify-center'>
                    <div className='w-full hidden sm:flex md:hidden lg:flex group-odd:justify-end group-odd:pr-[5%] group-even:justify-start group-even:pl-[5%]'>
                        <Image
                            className='w-[150px] h-[173px] lg:w-[190px] lg:h-[219px] xl:w-[222px] xl:h-[256px]'
                            src={cubeTutorialImages[index].src}
                            width={222}
                            height={256}
                            priority={false}
                            alt={cubeTutorialImages[index].alt}
                        />
                    </div>

                    <div className='w-full max-w-[272px] xs:max-w-[299.5px] sm:max-w-[327px] md:max-w-[382px] lg:max-w-[437px] xl:max-w-[512px] flex-center flex-col gap-4'>
                        <iframe
                            width='512'
                            height='288'
                            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?list=${playlistId}`}
                            className='w-[272px] h-[153px] xs:w-[299.5px] xs:h-[168.47px] sm:w-[327px] sm:h-[183.94px] md:w-[382px] md:h-[214.88px] lg:w-[437px] lg:h-[245.81px] xl:w-[512px] xl:h-[288px] lg:shadow-[0_0_15rem_-2rem_rgb(254_212_1_/_33%)] outline outline-1 outline-transparent hover:outline-[rgb(254_212_1_/_25%)] transition-all rounded-md'
                            title={video.snippet.title}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            loading='lazy'
                            allowFullScreen
                        />

                        <div className='w-full flex-center flex-col gap-2'>
                            <h3 className='w-full uppercase group-odd:text-left group-even:text-right font-medium text-wrap text-xl leading-6 md:text-2xl md:leading-7'>
                                {video.snippet.title}
                            </h3>
                            <p className='w-full uppercase group-odd:text-left group-even:text-right text-white/75 text-wrap line-clamp-4 font-light text-sm leading-[1.125rem] md:text-base md:leading-5 md:line-clamp-2'>
                                {video.snippet.description}
                            </p>
                        </div>
                    </div>
                </div>
            )) }
        </>
    ) : Array(2).fill(0).map((_, index) => (
        <span key={index} className='w-fit sm:w-full md:w-fit lg:w-full 2xl:max-w-[90%] bg-quantum/50 p-4 sm:p-8 sm:odd:pr-0 sm:even:pl-0 md:p-4 lg:p-8 lg:odd:pr-0 lg:even:pl-0 rounded-3xl group flex odd:flex-row-reverse even:flex-row items-center justify-center'>
            <span className='w-full hidden sm:flex md:hidden lg:flex group-odd:justify-end group-odd:pr-[5%] group-even:justify-start group-even:pl-[5%]'>
                <span className={`w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] xl:w-[222px] xl:h-[222px] ${suspenseFallbackClassName}`} />
            </span>

            <span className='w-full max-w-[272px] xs:max-w-[299.5px] sm:max-w-[327px] md:max-w-[382px] lg:max-w-[437px] xl:max-w-[512px] flex-center flex-col gap-4 overflow-visible'>
                <span className={`w-[272px] h-[153px] xs:w-[299.5px] xs:h-[168.47px] sm:w-[327px] sm:h-[183.94px] md:w-[382px] md:h-[214.88px] lg:w-[437px] lg:h-[245.81px] xl:w-[512px] xl:h-[288px] ${suspenseFallbackClassName}`} />

                <span className='w-full flex group-odd:items-start group-even:items-end flex-col gap-2'>
                    <span className={`w-full h-5 md:h-6 ${suspenseFallbackClassName}`} />
                    <span className={`w-full max-w-[90%] h-[0.875rem] md:h-4 ${suspenseFallbackClassName}`} />
                    <span className={`w-full max-w-[70%] h-[0.875rem] md:h-4 -mt-1 ${suspenseFallbackClassName}`} />
                </span>
            </span>
        </span>
    ))
}