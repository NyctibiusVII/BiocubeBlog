'use client'

import type { FormFallbackState } from '@/types'
import { sendMessage } from '@/app/actions'
import { BigShouldersText } from '@/app/fonts'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect } from 'react'
import Image from 'next/image'

const initialFallbackState: FormFallbackState = {
    fallbackMessage: '',
    fallbackStatus: 'idle'
}

export const ContactForm = () => {
    const [{ fallbackMessage, fallbackStatus }, formAction] = useFormState(sendMessage, initialFallbackState)

    useEffect(() => {
        if (fallbackStatus === 'idle') return

        const paragraph = document.getElementById('fallback-message') as HTMLParagraphElement

        if (fallbackStatus === 'success') {
            const form = document.getElementById('form-contact') as HTMLFormElement
            form.reset()

            paragraph.classList.remove('from-pumpkin/30', 'to-scarlet/30', 'outline-scarlet/75')
            paragraph.classList.add('from-lawngreen/15', 'to-leafgreen/30', 'outline-leafgreen/75')
        } else if (fallbackStatus === 'error') {
            paragraph.classList.remove('from-lawngreen/15', 'to-leafgreen/30', 'outline-leafgreen/75')
            paragraph.classList.add('from-pumpkin/30', 'to-scarlet/30', 'outline-scarlet/75')
        }
    }, [fallbackStatus])

    return (
        <>
            <form id='form-contact' action={formAction} method='POST' className='w-full min-w-72 lg:max-w-[30rem] xl:max-w-[40rem] mb-12 md:mb-4 lg:mb-0 relative flex flex-col'>
                <legend className={`${BigShouldersText.className} uppercase text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-4`}>Entre em contato conosco</legend>

                <div className='flex rounded-t-sm overflow-hidden'>
                    <label htmlFor='first-name' className='sr-only'>Primeiro Nome</label>
                    <input type='text' id='first-name' name='first-name' minLength={3} maxLength={10} className='w-full bg-quantum text-sm xs:text-base text-white/75 placeholder:text-white/25 border border-transparent border-r-white/5 focus:border-white/15 outline-none py-1 px-4' placeholder='Primeiro Nome' required />

                    <label htmlFor='last-name' className='sr-only'>Sobrenome</label>
                    <input type='text' id='last-name' name='last-name' minLength={3} maxLength={10} className='w-full bg-quantum text-sm xs:text-base text-white/75 placeholder:text-white/25 border border-transparent focus:border-white/15 outline-none py-1 px-4' placeholder='Sobrenome' required />
                </div>

                <div className='flex'>
                    <label htmlFor='email' className='sr-only'>Email</label>
                    <input type='email' id='email' name='email' autoComplete='email' minLength={5} maxLength={50} className='w-full bg-quantum text-sm xs:text-base text-white/75 placeholder:text-white/25 border border-transparent border-t-white/5 border-r-white/5 focus:border-white/15 outline-none py-1 px-4' placeholder='Email' required />

                    <label htmlFor='phone' className='sr-only'>Telefone</label>
                    <input type='tel' id='phone' name='phone' minLength={10} maxLength={11} className='w-full bg-quantum text-sm xs:text-base text-white/75 placeholder:text-white/25 border border-transparent border-t-white/5 focus:border-white/15 outline-none py-1 px-4' placeholder='Telefone' required />
                </div>

                <label htmlFor='message' className='sr-only'>Mensagem</label>
                <textarea id='message' name='message' autoComplete='off' minLength={10} maxLength={600} className='w-full max-h-32 min-h-16 h-24 xl:h-32 bg-quantum text-sm xs:text-base text-white/75 placeholder:text-white/25 border border-transparent border-t-white/5 focus:border-white/15 outline-none py-1 px-4 resize-y' placeholder='Digite sua mensagem aqui...' required />

                <SubmitButton />

                { fallbackStatus !== 'idle' && (
                    <div className='w-full flex items-center justify-center absolute left-0 -bottom-16 xs:-bottom-12 xl:-bottom-14'>
                        <p id='fallback-message' className={`w-full sm:w-fit md:w-full xl:w-fit bg-gradient-to-r outline-2 xs:outline-dashed outline-offset-4 font-medium text-revell/75 text-sm text-center text-wrap xl:text-nowrap py-2 px-6 xs:px-4 sm:px-6 xl:px-8 rounded-sm flex items-center justify-center`}>
                            {fallbackMessage}
                        </p>
                    </div>
                ) }
            </form>

            <Image
                className='hidden lg:inline-block w-60 xl:w-80 -mb-4 -mr-4 xl:-mb-8'
                src='/assets/cube-box-mail.svg'
                width={310}
                height={307}
                priority={false}
                alt=''
            />
        </>
    )
}

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type='submit'
            disabled={pending}
            className='w-full text-sm xs:text-base primary-button group !rounded-t-none disabled:bg-lawngreen disabled:border-lawngreen disabled:hover:text-lawngreen disabled:hover:cursor-not-allowed disabled:hover:bg-transparent flex items-center justify-center gap-2'>
            { pending ?
                <>
                    <Image
                        className='w-4 h-4 animate-spin brightness-0 group-hover:filter-none delay-75'
                        src='/assets/loader.svg'
                        width={24}
                        height={24}
                        priority={false}
                        alt=''
                    />
                    ENVIANDO
                </>
            :
                'ENVIAR'
            }
        </button>
    )
}