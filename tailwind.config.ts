import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white-5p': '#FFFFFF0D',
      'white-8p': '#FFFFFF14',
      'white-15p': '#FFFFFF26',
      'white-25p': '#FFFFFF40',
      'white-50p': '#FFFFFF80',
      'white-75p': '#FFFFFFBF',
      'white': '#ffffff',
      'revell': '#EEEEEE',
      'black-16p': '#00000029',
      'black-20p': '#00000033',
      'black-50p': '#00000080',
      'black-60p': '#00000099',
      'black': '#000000',
      'black-matt': '#070707',
      'quantum': '#111111',
      'leafgreen-25p': '#01F26D40',
      'leafgreen-50p': '#01F26D80',
      'leafgreen-75p': '#01F26DBF',
      'leafgreen': '#01F26D',
      'lawngreen': '#018C3F',
      'moonmist': '#FAD73D',
      'pumpkin-75p': '#FF8E26BF',
      'pumpkin': '#FF8E26',
      'salamander-25p': '#F23B0140',
      'salamander-50p': '#F23B0180',
      'salamander': '#F23B01',
      'hematite-soil': '#CD3100',
      'scarlet': '#FF2400',
      'purple-shock-75p': '#9747FFBF',
      'purple-shock': '#9747FF',
      'delta-lake': '#33BBEE',
      'glacier-white-75p': '#ECF0F9BF',
      'glacier-white': '#ECF0F9'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      maxWidth: {
        'app-content': '96rem'
      },
      height: {
        '100vh-h-12': 'calc(100vh - 3rem)'
      }
    }
  },
  plugins: []
}
export default config
