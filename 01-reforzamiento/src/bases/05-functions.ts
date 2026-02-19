function greet(name: string): string {
    return `hello ${name}`;
}

interface User {
    uid: string;
    username: string;
}

const greet2 = (name: any)  => `hello ${name}`;


const message = greet('Tony');
const message2 = greet2('Kuromi');

console.log(message, message2)


function getUser(): User {
    return {
        uid: 'ABC123',
        username: 'ironman'
    }
}

const getUser2 = () => ({
        uid: 'ABC123',
        username: 'ironman'
    
})

const user = getUser();
const user2 = getUser2();

console.log(user, user2)



const myNumbers: number [] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//     console.log({ value });
// })

// myNumbers.forEach(function (value) {
//     console.log(value);
// })

myNumbers.forEach(console.log)