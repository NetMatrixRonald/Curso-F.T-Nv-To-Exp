import { describe, expect, test, vi } from "vitest";
import useGifs from "./useGifs";
import { fireEvent, renderHook } from "@testing-library/react";
import { act } from "react";
import * as gifActions from "../actions/get-gifs-by-query.actions";

describe('useGifs', () => {


    test('Should return default values and methods', () => {
        const { result } = renderHook(() => useGifs())

        expect(result.current.gifs.length).toStrictEqual(0)

        expect(result.current.previousTerms.length).toStrictEqual(0)

        expect(result.current.handleSearch).toBeDefined()
        expect(result.current.handleTermClick).toBeDefined()


    });
    
    test('Should return a list of gifs',  async () => {

        const { result } = renderHook(() => useGifs())

        
        await act( async () => {
            await result.current.handleSearch('Fang yuan')
        })
        
        expect(result.current.gifs.length).toBe(10)
        
    });

    test('Should return a list of gifs when handleTermClicked is called', async () => {

        const { result } = renderHook(() => useGifs())


        await act(async () => {
            await result.current.handleTermClick('Fang Yuan')
        })
        

        expect(result.current.gifs.length).toBe(10)
    });

    test('Should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleTermClick('Fang Yuan')
        })
        console.log(result.current.gifs)
        expect(result.current.gifs.length).toBe(10)


        vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'))

    });

    test('Should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs())

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([])

        await act(async () => {
            await result.current.handleSearch('Fang Yuan')
        })

        console.log(result.current.previousTerms)
    })
})