import CustomJumbotron from '@/components/custom/CustomJumbotron'
import HeroStats from '@/heroes/components/HeroStats'
import SearchControls from './ui/SearchControls'
import CustomBreadCrumbs from '@/components/custom/CustomBreadCrumbs'


const SearchPage = () => {
  return (
    <>
      <CustomJumbotron tittle="Search Superheroes" description="Discover, explore, and manage your favorite superheroes and villains"/>
      
      <CustomBreadCrumbs currentPage='Buscar Heroes'
    //   breadcrumbs={
    //     [{ label: 'home', to: '/' }]
    //   }
      />

      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Filter and Search */}
      <SearchControls/>
    </>
  )
}

export default SearchPage
