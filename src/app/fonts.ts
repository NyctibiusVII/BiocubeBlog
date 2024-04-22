import {
    Advent_Pro,
    Passion_One
} from 'next/font/google'

const adventPro = Advent_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})
const passionOne = Passion_One({
    subsets: ['latin'],
    weight: ['400']
})

export {
    adventPro,
    passionOne
}