import React from 'react'

type MarkTextColorsType = 'transparent' | 'white' | 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'blue' | 'black'
interface MarkTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: MarkTextColorsType
}

/**
 * MarkText - Component to highlight text with a specific color.
 *
 * @param {React.ReactNode} children
 * @param {string} color
 * @returns {JSX.Element}
 * @example
 * <MarkText color='green'>Hello World</MarkText>
 *
 * return <span className='text-green'>Hello World</span>
 **/
export const MarkText = ({ color='green', ...spanProps }: MarkTextProps): JSX.Element => {
    const { className, ...props } = spanProps

    const colorClass: Record<MarkTextColorsType, string> = {
        'transparent': 'text-transparent',
        'white': 'text-white',
        'green': 'text-leafgreen',
        'yellow': 'text-moonmist',
        'orange': 'text-salamander',
        'red': 'text-scarlet',
        'purple': 'text-purple-shock',
        'blue': 'text-delta-lake',
        'black': 'text-black'
    }

    let classNameList = ''
    if (className) classNameList = [colorClass[color], className].join(' ')
    else classNameList = colorClass[color]

    return <span className={classNameList} {...props} />
}