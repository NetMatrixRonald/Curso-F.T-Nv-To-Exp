const person = {
    name: 'Tony',
    age: 45,
    key: 'ironman'
} 

const {name: ironManName, age: ironManAge, key} = person;



interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({name, age, key, rank = 'no rank'}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
}

// const useContext = ({name, age }: Hero) => {
//     return {
        
//         user: {
//             name,
//             age
//         },
       
//     }
// }

const {rank, keyName, user } = useContext(person);
const {name, age} = user;

console.log({rank, keyName, name, age})

