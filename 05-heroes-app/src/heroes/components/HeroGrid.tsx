
import HeroGridCard from './HeroGridCard'



const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">



            {/* Hero Card 1 - Superman */}
            <HeroGridCard img={<img src="/vite.svg" alt="Superman" className="w-full h-full object-cover" />}
                statusIndicator='Active'
                universeBadge='DC'
                heroName='Superman'
                realName='Clark Kent'
                typeHero='Hero'
                verse='DC Comics'
                descriptionHero='The Man of Steel, a powerful alien hero from Krypton who has been protecting Earth for decades.'
                valueStrength={90}
                valueIntelligence={80}
                valueSpeed={100}
                valueDurability={95}
                powers={['Super Strength', 'Flight', 'Heat Vision', 'X-Ray Vision']} />


            {/* Hero Card 2 - Batman */}

        </div>
    )
}

export default HeroGrid
