
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils'

const CustomMenu = () => {

    const { pathname } = useLocation()

    const isActive = (path: string) => {
        return pathname === path
    }



    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* Navigation Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild 
                    className={cn( isActive('/') && 'bg-slate-400', 'rounded-md', 'p-2')}>
                        <Link to='/'>Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                {/* Navigation Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild 
                    className={cn(isActive('/search') && 'bg-slate-400', 'rounded-md', 'p-2')}>
                        <Link to='/search'>Buscar</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

        
    )
}

export default CustomMenu
