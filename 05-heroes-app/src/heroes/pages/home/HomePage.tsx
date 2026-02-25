import {
  Heart,
  Filter,
} from "lucide-react"


import { useQuery } from "@tanstack/react-query"
import { Badge } from "@/components/ui/badge"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import {  useState } from "react"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadCrumbs from "@/components/custom/CustomBreadCrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.actions"


export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

    
    const { data } = useQuery({
      queryKey: ['Heroes'],
      queryFn: () => getHeroesByPageAction(),
      staleTime: 1000 * 60 * 5
    });

    

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron tittle="Superhero Universe" description="Discover, explore, and manage your favorite superheroes and villains"/>

        <CustomBreadCrumbs currentPage='Buscar Heroes'/>

        {/* Stats Dashboard */}
        <HeroStats/>
        
        {/* Advanced Filters */}
        

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
            onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" 
            onClick={() => setActiveTab('favorites')}
            className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value='all'>
        <h1 className="text-2xl font-bold mb-4">Todos los personajes</h1>
          </TabsContent>
          <TabsContent value='favorites'>
        <h1 className="text-2xl font-bold mb-4">Todos los personajes favoritos</h1>
          </TabsContent>
          <TabsContent value='heroes'>
        <h1 className="text-2xl font-bold mb-4">Todos los personajes heroes</h1>
          </TabsContent>
          <TabsContent value='villains'>
        <h1 className="text-2xl font-bold mb-4">Todos los personajes villanos</h1>
          </TabsContent>
        </Tabs>

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>

        {/* Character Grid */}
        <HeroGrid/>
        {/* Pagination */}
       <CustomPagination totalPages={8}/>
      </>
    </>
  )
}

export default HomePage