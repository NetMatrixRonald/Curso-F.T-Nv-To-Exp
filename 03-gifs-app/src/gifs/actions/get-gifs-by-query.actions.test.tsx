import { afterAll, beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.actions";
import AxiosMockAdapter from 'axios-mock-adapter'
import { GiphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../tests/mock/giphy.response.data";



describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter(GiphyApi);

    beforeEach(() => {
       mock = new AxiosMockAdapter(GiphyApi)  // limpia mocks antes de cada test
    });

    // test('Should return a list of gifs', async () => {
    //     const gifs = await getGifsByQuery('Fang Yuan')
    //     const [gif1] = gifs

    //     expect(gifs.length).toBe(10)


    //     expect(gif1).toStrictEqual({
    //         height: expect.any(Number),
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //     })
    // })
    test('Should return a list of gifs', async () => {

        mock.onGet('/search').reply(200, giphySearchResponseMock)

        const gifs = await getGifsByQuery('Fang Yuan')

        expect(gifs.length).toBe(10)


        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string')
            expect(typeof gif.title).toBe('string')
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.width).toBe('number')
            expect(typeof gif.height).toBe('number')
        })


    });

    test('Should return an empty list of gifs if query is empty', async () => {
        // mock.onGet('/search').reply(200, giphySearchResponseMock)
        
        const gifs = await getGifsByQuery('')
        console.log(gifs)
        expect(gifs.length).toBe(0)


    });

    test('Should handle error when the API returns an error', async () => {

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

        mock.onGet('/search').reply(400,{
        data: {
            message: 'bad request'
        }
        });

        const gifs = await getGifsByQuery('Fang Yuan')
        console.log(gifs)

        expect(gifs.length).toBe(0)
        expect(consoleErrorSpy).toHaveBeenCalled()
        // expect(consoleErrorSpy).toHaveBeenCalledWith( expect.anything )
    })
})
