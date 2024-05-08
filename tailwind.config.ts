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
      'white': '#ffffff',
      'revell': '#EEEEEE',
      'black': '#000000',
      'black-matt': '#070707',
      'quantum': '#111111',
      'leafgreen': '#01F26D',
      'lawngreen': '#018C3F',
      'moonmist': '#FAD73D',
      'pumpkin': '#FF8E26',
      'salamander': '#F23B01',
      'hematite-soil': '#CD3100',
      'scarlet': '#FF2400',
      'purple-shock': '#9747FF',
      'delta-lake': '#33BBEE',
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
