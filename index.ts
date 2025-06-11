export {}

type Pizza = {
    id: number
    name: string,
    price: number
}

type NewPizza = {
    name: string,
    price: number,
    id?: number
}

type Order = {
    pizza: Pizza
    status: "ordered" | "completed"
    id: number
}

const addToArray = <T> (array: T[], item:T): T[]=> {
    array.push(item)
    return array
}


let cashInRegister = 100
let orderID = 0
const orderQueue: Order[] = []
let pizzaID = 0

const menu = [
    {id: pizzaID++, name: "Margherita", price: 10},
    {id: pizzaID++, name: "Pepperoni", price: 8},
    {id: pizzaID++, name: "Howaiian", price: 10},
    {id: pizzaID++, name: "Veggie", price: 6},
]

addToArray(menu, {id: pizzaID++, name: "BBQ Chicken", price: 12})
addToArray<Order>(orderQueue, {id: orderID++, pizza: menu[2], status: "ordered"})

const addNewPizza = (pizzaObject: Omit<Pizza, "id">): Pizza => {
        const newPizzaObject: Pizza = {...pizzaObject, id: pizzaID++}
        menu.push(newPizzaObject)
        return newPizzaObject
}

const placeOrder = (pizzaName: string): Order | undefined => {
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

const completeOrder = (orderId: number): Order | undefined => {
    const order = orderQueue.find((order) => order.id === orderId)
    if (!order) {
        console.error(`Order with id ${orderId} does not exist`)
        // throw new Error(`Order with id ${orderId} does not exist`)
        return
    }
    order.status = "completed"
    return order
}

const getPizzaDetail = (identifier: number | string): Pizza | undefined => {
    if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier)
    }
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    } else {
        throw new TypeError
    }
}

// addNewPizza({name: "Chciken Bacon Ranch", price: 12})
// addNewPizza({name: "BBQ Chicken", price: 12})
// addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)