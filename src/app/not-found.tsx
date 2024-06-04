import { RubiksCube3D } from '@/components/rubiks-cube-3d'

import { passionOne } from './fonts'

import Link from 'next/link'

export default function NotFound() {
    const hoverColors = ['hover:text-[#A38E1A]', 'hover:text-[#a63a0d]', 'hover:text-[#001D9B]', 'hover:text-[#007911]', 'hover:text-[#9A0016]']
    const hoverColorClassName = hoverColors[Math.floor(Math.random() * hoverColors.length)]

    return (
        <div className='w-screen h-screen relative bg-black text-[#859b9b] overflow-hidden'>
            <svg className={`w-[clamp(15rem,120vw,30rem)] h-fit sm:w-[clamp(30rem,120vw,65rem)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(100%_-_1rem)] xs:-translate-y-[calc(100%_-_2rem)] sm:-translate-y-1/2 z-0`} width='757' height='323' viewBox='0 0 757 323' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M267.71 230.96C256.86 232.68 246 234.54 235.16 236.56C236.68 249.72 238.16 262.56 239.6 275.07C215.6 284.36 191.7 293.77 167.9 303.33C164.39 287.62 160.73 271.47 156.88 254.83C119.56 264.37 80.18 274.27 38.65 284.92C24.35 267.01 11.43 248.21 0 228.39C36.97 144.84 78.62 76.55 125.3 24.89C159.78 38.75 193.77 52.37 227.18 65.8C227.22 103.22 228.27 144.16 230.38 188.48C242.98 187.76 255.52 187.09 268.02 186.48C267.81 201.62 267.72 216.44 267.71 230.96ZM148.08 194.41C145.5 170.7 143.71 146.97 142.79 123.26C141.69 123.15 140.59 123.03 139.49 122.92C125.05 146.76 111.79 172.21 99.66 199.16C116.12 197.38 132.26 195.83 148.08 194.41ZM405.8 168.48C405.84 166.96 405.88 165.45 405.91 163.95C406.4 144.5 405.71 133.46 403.87 130.43C402.36 127.22 400.67 124.5 398.8 122.27C395.35 118.58 389.12 116.78 380.07 116.81C371 116.81 364.81 118.66 361.51 122.38C357.57 127.24 355.42 132.27 355.07 137.46C354.37 147.22 354.01 156.15 353.99 164.17C353.98 165.67 353.99 167.19 353.99 168.7C354.06 190.74 354.95 203.5 356.54 207.06C358.44 210.4 360.32 213.24 362.21 215.56C365.34 219.84 371.97 221.93 382.12 221.84C392.25 221.85 398.58 218.25 401.15 210.94C403.75 203.39 405.3 189.24 405.8 168.48ZM478.73 123.59C481.18 134.54 482 149.02 481.07 167C479.97 185.12 477.58 200 474.04 211.49C470.86 222.64 465.58 232.15 458.28 240.15C444.26 255.5 418.12 263.04 379.13 262.66C340.2 263.32 313.32 255.97 298.77 241.12C291.24 233.36 285.68 223.99 282.17 212.85C278.61 201.08 276.34 185.99 275.55 167.78C274.58 131.38 281.46 108.07 295.73 96.01C310.51 83.77 339.3 76.73 381.15 76.29C423.76 76.22 451.31 83.7 464.78 97.36C471.86 104.51 476.52 113.16 478.73 123.59ZM719.82 275.91C706.17 273.38 692.92 270.87 680.04 268.37C671.18 286.89 662.97 305.05 655.39 322.83C632.73 314.54 610.08 306.22 587.45 297.86C590.97 282.41 594.66 266.6 598.55 250.4C564.65 242.92 530.91 236.23 497.32 230.36C495.89 217.34 494.42 204.18 492.9 190.86C527.73 145.41 561.78 95.3 594.66 40.31C627.53 26.84 660.61 13.42 693.89 0C703.99 68.81 707.6 137.51 703.74 203.35C720.65 206.4 738.15 210.08 756.19 214.25C747.19 235.35 734.95 255.78 719.82 275.91ZM612.59 192.74C615.29 169.71 617.24 146.52 618.4 123.15C617.35 123.26 616.31 123.35 615.29 123.44C600.11 146.65 584.7 168.65 569.11 189.49C583.41 190.48 597.9 191.56 612.59 192.74Z' fill='url(#paint0_radial_668_952)' />
                <defs>
                    <radialGradient id='paint0_radial_668_952' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(378 261) rotate(90) scale(162.5 380.637)'>
                        <stop stopColor='white' />
                        <stop offset='1' stopColor='#859B9B' />
                    </radialGradient>
                </defs>
            </svg>

            <RubiksCube3D />

            <h1 className={`${passionOne.className} text-wrap text-center text-sm capitalize bg-black/50 leading-4 text-[#859b9b80] absolute bottom-[25%] right-1/2 transform translate-x-1/2 sm:pr-[1.75rem]  sm:right-0 sm:bottom-[0.5rem] sm:translate-x-0 sm:text-right select-none z-0`}>
                Página não encontrada! <span className='text-wrap'>Por favor, verifique se navegou para o local correto.</span>
            </h1>
            <Link href='/' className={`w-full sm:w-fit ${passionOne.className} uppercase underline underline-offset-2 text-center text-clamp-20 ${hoverColorClassName} bg-black/50 px-8 py-3 sm:pb-[0.1rem] sm:py-2 absolute right-0 bottom-[1.3rem] sm:bottom-6 z-20`}>
                Ir para a página principal
            </Link>
        </div>
    )
}