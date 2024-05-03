import localFont from 'next/font/local'

const adventPro = localFont({ src: '../../public/assets/fonts/AdventPro-VariableFont_wdth,wght.ttf' })
const bigShouldersText = localFont({ src: '../../public/assets/fonts/BigShouldersText-VariableFont_wght.ttf' })
const passionOne = localFont({ src: [
    {
        path: '../../public/assets/fonts/PassionOne-Regular.ttf',
        weight: '400',
        style: 'normal'
    }
] })
const quattrocento = localFont({ src: [
    {
        path: '../../public/assets/fonts/Quattrocento-Regular.ttf',
        weight: '400',
        style: 'normal'
    }
] })

export {
    adventPro,
    bigShouldersText,
    passionOne,
    quattrocento
}