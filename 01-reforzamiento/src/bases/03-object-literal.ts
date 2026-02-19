interface Person{
    name: string;
    lastname: string;
    age: number;
    address: address;
    }


interface address {
    postalCode: number;
    city: string;
}




const ironman: Person = {
    name: 'Tony',
    lastname: `stark`,
    age: 45,
    address: {
        postalCode: 10001,
        city: 'New York'
    }
};





console.log(ironman)


// const spiderman = structuredClone(ironman);

// spiderman.name = `Peter`;
// spiderman.lastname = `Parker`;
// spiderman.age = 18;
// spiderman.address.street = `Queens`;
// spiderman.address.number = `20-19B`;



// console.log(ironman, spiderman);




