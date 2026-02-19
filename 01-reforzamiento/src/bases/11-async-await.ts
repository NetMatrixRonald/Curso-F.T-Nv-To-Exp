import type {  GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = '4yvyLUKCjYnk6GXo5Tt5dJYTfUZiAA9g'



const MyImageUrl = (url: string) => {
    const imgElement = document.createElement('img')
    imgElement.src = url

    document.body.append(imgElement)
}


const getImageUrl = async () => {
    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=RH&rating=g`)

    const { data }: GiphyRandomResponse = await myRequest.json();

        return data.images.original.url;
}

getImageUrl().then((url) => MyImageUrl(url))