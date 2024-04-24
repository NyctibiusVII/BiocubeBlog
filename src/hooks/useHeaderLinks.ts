import { APP_ROUTES_NAME, type MenuItensType } from '@/types'
import { appRoutesAbsolutePath } from '../biocube-data'

export const useHeaderLinks: Array<MenuItensType> = [
    { href: appRoutesAbsolutePath[0], content: APP_ROUTES_NAME.HOME },
    { href: appRoutesAbsolutePath[1], content: APP_ROUTES_NAME.ATHLETES },
    { href: appRoutesAbsolutePath[2], content: APP_ROUTES_NAME.PARTNERS },
    { href: appRoutesAbsolutePath[3], content: APP_ROUTES_NAME.TUTORIALS },
    { href: appRoutesAbsolutePath[4], content: APP_ROUTES_NAME.ABOUT }
]