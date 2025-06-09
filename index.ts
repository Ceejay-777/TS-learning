export {}

type Pizza = {
    id: number
    name: string,
    price: number
}

type Order = {
    pizza: Pizza
    status: "ordered" | "completed"
    id: number
}

const menu = [
    {id: 1, name: "Margherita", price: 10},
    {id: 2, name: "Pepperoni", price: 8},
    {id: 3, name: "Howaiian", price: 10},
    {id: 4, name: "Veggie", price: 6},
]

let cashInRegister = 100
let orderID = 0
const orderQueue: Order[] = []

const addNewPizza = (pizzaObject: Pizza) => {
    menu.push(pizzaObject)
}

const placeOrder = (pizzaName: string) => {
    orderID += 1
    const currentOrder = menu.find((pizza) => pizza.name === pizzaName)
    if (!currentOrder) {
        console.error(`${pizzaName} does not exist in menu`)
        return 
    }
    cashInRegister += currentOrder.price
    const orderObj: Order = {pizza: currentOrder, status: 'ordered', id: orderID}
    orderQueue.push(orderObj)
    return orderObj
} 

const completeOrder = (orderId: number) => {
    const order = orderQueue.find((order) => order.id === orderId)
    if (!order) {
        console.error(`Order with id ${orderId} does not exist`)
        // throw new Error(`Order with id ${orderId} does not exist`)
        return
    }
    order.status = "completed"
    return order
}

const getPizzaDetail = (identifier: number | string) => {
    if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier)
    }
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    }
}

addNewPizza({name: "Chciken Bacon Ranch", price: 12, id: 5})
addNewPizza({name: "BBQ Chicken", price: 12, id: 6})
addNewPizza({name: "Spicy Sausage", price: 11, id: 7})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)