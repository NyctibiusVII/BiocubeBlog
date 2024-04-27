export const Background = ({ type }: { type: 'top' | 'left' | 'right' }) => {
    const bgTypes = {
        top: 'w-80 h-80 blur-[15rem] bg-leafgreen fixed -top-[calc(20rem_/_1.5)] inset-x-auto rounded-full -z-50',
        left: 'w-80 h-80 blur-[15rem] bg-leafgreen fixed -top-16 lg:-top-4 -left-[calc(20rem_/_1.5)] lg:-left-[calc(20rem_/_2)] rounded-full -z-50',
        right: 'w-80 h-80 blur-[15rem] bg-leafgreen fixed xl:hidden -top-16 -right-[calc(20rem_/_1.5)] rounded-full -z-50',
    }
    const classNameType = bgTypes[type] ?? 'hidden'

    return <span className={classNameType} />
}