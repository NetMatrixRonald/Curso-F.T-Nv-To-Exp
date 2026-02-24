import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DotIcon } from "lucide-react"
import { Link } from "react-router"



interface breadcrumbProps {
    label: string,
    to: string
}

interface Props {
    currentPage: string
    breadcrumbs?: breadcrumbProps[]
}

const CustomBreadCrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/search">Buscar Heroes</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon />
                </BreadcrumbSeparator>

            {
                breadcrumbs.map(crumb => (
                    <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to={crumb.to}>{crumb.label}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                ))
            }
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-black">{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadCrumbs
