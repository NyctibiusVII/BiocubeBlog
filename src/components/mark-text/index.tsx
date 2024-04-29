import React from 'react'

type MarkTextColorsType = 'transparent' | 'current' | 'white' | 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'blue' | 'black'
interface MarkTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: MarkTextColorsType
    underline?: boolean
}

/**
 * MarkText - Component to highlight text with a specific color and underline it.
 *
 * @param {React.ReactNode} children
 * @param {string} color
 * @param {boolean} underline
 * @returns {JSX.Element}
 * @example
 * <MarkText color='green' underline>Hello World</MarkText>
 *
 * return <span className='text-green underline'>Hello World</span>
 **/
export const MarkText = ({ color='green', underline=false, ...spanProps }: MarkTextProps): JSX.Element => {
    const { className, ...props } = spanProps

    const colorClass: Record<MarkTextColorsType, string> = {
        'transparent': 'text-transparent',
        'current': 'text-current',
        'white': 'text-white',
        'green': 'text-leafgreen',
        'yellow': 'text-moonmist',
        'orange': 'text-salamander',
        'red': 'text-scarlet',
        'purple': 'text-purple-shock',
        'blue': 'text-delta-lake',
        'black': 'text-black'
    }

    const underlineClass = underline ? 'underline' : ''

    let classNameList = ''
    if (className) classNameList = [colorClass[color], underlineClass, className].join(' ')
    else classNameList = [colorClass[color], underlineClass].join(' ')

    return <span className={classNameList} {...props} />
}