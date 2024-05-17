export const Background = ({ type }: { type: 'top' | 'left' | 'right' }) => {
    const bgTypes = {
        top: '-top-[calc(20rem_/_1.5)] inset-x-auto',
        left: '-top-16 lg:-top-4 -left-[calc(20rem_/_1.5)] lg:-left-[calc(20rem_/_2)]',
        right: 'xl:hidden -top-16 -right-[calc(20rem_/_1.5)]',
    }
    const classNameType = bgTypes[type] ?? 'hidden'

    return <span className={`w-80 h-80 blur-[15rem] bg-leafgreen absolute ${classNameType} text-transparent rounded-full -z-50`} />
}