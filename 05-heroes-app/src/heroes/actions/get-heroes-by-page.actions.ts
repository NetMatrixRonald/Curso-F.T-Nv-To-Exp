import { BASE_URL, HeroApi } from "../api/hero.api"
import type { HeroesResponse } from "../types/get-heroes-response"

const BASE_URL_RESPONSE = BASE_URL


export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
const { data } = await HeroApi.get<HeroesResponse>('/') 


const heroes = data.heroes.map( hero => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
}))

return {
    ...data,
    heroes: heroes

}
    
}