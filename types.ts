let myName: string = "Ceejay"
let numberOfWheels: number = 4
let isStudent: boolean = false

type Food = string
let favFood: Food = "pizza"

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: 'joe',
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "jill",
    age: 66,
    isStudent: false,
    address: {
        street: "Ekute",
        city: "Ado",
        country: "Nigeria"
    }
}

// const displayInfo = (person: Person) => {
//     console.log(`${person.name} lives at ${person.address.street} years old`)
// }

// displayInfo(person1)

let ages = [100, 120, 60, 32, "water"]