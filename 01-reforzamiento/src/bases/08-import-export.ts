import { heroes, type Hero, Owner } from "../data/heroes.data";

const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id});

    // if (!hero) {
    //     throw new Error(`Hero with id ${id} not found`);
    // }
    return hero;
}
console.log(getHeroById(1))

// export const getHeroByOwner = (owner: string): Hero|undefined =>{
//     const ownerT = heroes.find((ownerHero) => {
//         return ownerHero.owner === owner
//     })
//     return ownerT;
// 

// export const getHeroByOwner = (owner: Owner) => {
//     const heroesByOwner = heroes.filter((hero) => hero.owner === owner )
        
    
//     return heroesByOwner;
// 

export const getHeroByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter((hero) => {
        return hero.owner === owner
    }) 
    return heroesByOwner;
    } 
    


export default getHeroByOwner;


