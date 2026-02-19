import type {  GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = '4yvyLUKCjYnk6GXo5Tt5dJYTfUZiAA9g'

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=RH&rating=g
`)


const MyImageUrl = (url: string) => {
    const imgElement = document.createElement('img')
    imgElement.src = url

    document.body.append(imgElement)
}


myRequest.then((response) => response.json())
.then(({ data }: GiphyRandomResponse) => {

    const imageUrl = data.images.original.url;

    
})
.catch((error) => {
    console.log(error)
})