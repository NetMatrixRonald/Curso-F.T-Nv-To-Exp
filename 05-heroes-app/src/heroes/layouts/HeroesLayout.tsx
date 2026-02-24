import CustomBreadCrumbs from '@/components/custom/CustomBreadCrumbs'
import CustomMenu from '@/components/custom/CustomMenu'
import { lazy } from 'react'
import {  Outlet } from 'react-router'

const SearchPage = lazy(() => import('../pages/search/SearchPage'))


const HeroesLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto p-6">

                <CustomMenu/>
                

                <Outlet />
            </div>
        </div>
    )
}

export default HeroesLayout
