export {}

type Pizza = {
    name: string,
    price: number
}

const menu = [
    {name: "Margherita", price: 10},
    {name: "Pepperoni", price: 8},
    {name: "Howaiian", price: 10},
    {name: "Veggie", price: 6},
]

let cashInRegister = 100
let orderID = 0
const orderQueue = []

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
    const orderObj = {pizza: currentOrder, status: 'ordered', id: orderID}
    orderQueue.push(orderObj)
    return orderObj
}

const completeOrder = (orderId: number) => {
    const order = orderQueue.find((order) => { 
        if (order.id === orderId) {
            order.status = 'completed'
        }
        return true
    })
    return order
}

addNewPizza({name: "Chciken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)