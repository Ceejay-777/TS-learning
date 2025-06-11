const gameScores = [14, 21, 33, 42, 59]
const favouriteThings = ["Coding", "Money", "Babe", "Food"]
const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 77}]

const getLastItem = <T> (array: T[]): T | undefined => {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favouriteThings))
console.log(getLastItem(voters))