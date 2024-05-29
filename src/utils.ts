import type { Modalities } from './types'

export const processText = (text: string) => {
    const processedText = text
    .replace(/_([^_]+)_/g, '<span style="text-decoration: underline; text-wrap: wrap;">$1</span>')
    .replace(/\|([^|]+)\|/g, '<span style="font-style: italic; text-wrap: wrap;">$1</span>')
    .replace(/\&([^&]+)\&/g, '<span style="color: #33BBEE; text-wrap: wrap;">$1</span>')
    .replace(/\*([^*]+)\*/g, '<span style="color: #01F26D; text-wrap: wrap;">$1</span>')
    .replace(/\^([^^]+)\^/g, '<span style="color: #FAD73D; text-wrap: wrap;">$1</span>')
    .replace(/\°([^°]+)\°/g, '<span style="color: #FF2400; text-wrap: wrap;">$1</span>')
    .replace(/\n/g, '<br />')
    .replace(/\t/g, '<br /><br />')

    return processedText
}

export const processWCARecords = {
    event: (eventId: Modalities) => {
        const modalities: { [key in Modalities]: string } = {
            '222': 'Cubo 2x2x2',
            '333': 'Cubo 3x3x3',
            '444': 'Cubo 4x4x4',
            '555': 'Cubo 5x5x5',
            '666': 'Cubo 6x6x6',
            '777': 'Cubo 7x7x7',
            '333bf': '3x3x3 Vendado',
            '333fm': '3x3x3 em Menos Movimentos',
            '333oh': '3x3x3 Com Uma Mão',
            '333ft': '3x3x3 Com os Pés', // Unofficial
            'clock': 'Clock',
            'minx': 'Megaminx',
            'pyram': 'Pyraminx',
            'skewb': 'Skewb',
            'sq1': 'Square-1',
            '444bf': '4x4x4 Vendado',
            '555bf': '5x5x5 Vendado',
            '333mbf': 'Múltiplos Cubos Vendados'
        }
        return modalities[eventId]
    },
    time: (rawTime: number | undefined, movement=false) => {
        if (!rawTime) return

        const formatZero = (value: number) => value <= 9 ? `0${value}` : value

        if (movement) {
            const movements = rawTime
            return movements
        }

        if (rawTime <= 99) return `0.${rawTime}`
        else if (rawTime <= 60) {
            const seconds = Math.floor(rawTime / 100)
            const millesimal = formatZero(rawTime % 100)

            return `${seconds}.${millesimal}`
        } else {
            const minutes = Math.floor(rawTime / 6000)
            const seconds = formatZero(Math.floor((rawTime % 6000) / 100))
            const millesimal = formatZero(rawTime % 100)

            if (minutes === 0) return `${seconds}.${millesimal}`
            else return `${minutes}:${seconds}.${millesimal}`
        }
    }
}