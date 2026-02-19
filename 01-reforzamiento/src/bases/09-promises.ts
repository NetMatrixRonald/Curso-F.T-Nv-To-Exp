const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
       
      reject('Mi amigo es perdio')
    }, 2000)
})


myPromise.then(
    (myMoneyIsBack) => {
        console.log(`Tengo mi dinero ${myMoneyIsBack}`)
    }
).catch((reason) => {
    console.warn(reason)

}).finally(() => {
    console.log('Pues a seguir adelante')
})