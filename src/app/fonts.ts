import {
    Advent_Pro,
    Quattrocento,
    Big_Shoulders_Text,
    Passion_One
} from 'next/font/google'

const adventPro = Advent_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})
const quattrocento = Quattrocento({
    subsets: ['latin'],
    weight: ['400']
})
const BigShouldersText = Big_Shoulders_Text({
    subsets: ['latin'],
    weight: ['400', '600', '700']
})
const passionOne = Passion_One({
    subsets: ['latin'],
    weight: ['400']
})

export {
    adventPro,
    quattrocento,
    BigShouldersText,
    passionOne
}