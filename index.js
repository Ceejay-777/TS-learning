const menu = [
    {name: "Margherita", price: 10},
    {name: "Pepperoni", price: 8},
    {name: "Howaiian", price: 10},
    {name: "Veggie", price: 6},
]

const cashInRegister = 100
const orderQueue = []
const orderID = 0

const addNewPizza = (pizzaObject) => {
    menu.push(pizzaObject)
}

const placeOrder = (pizzaName) => {
    orderID += 1
    const currentOrder = menu.find((pizza) => pizza.name === pizzaName)
    cashInRegister += currentOrder.price
    orderObj = {pizza: currentOrder, status: 'ordered', id: orderID}
    orderQueue.push(orderObj)
    return orderObj
}

const completeOrder = (orderId) => {
    const order = orderQueue.find((order) => { 
        if (order.id === orderId) {
            order.status = 'completed'
        }
        return true
    })
    return order
}

addNewPizza({name: "Chciken Bacon Ranch", cost: 12})
addNewPizza({name: "BBQ Chicken", cost: 12})
addNewPizza({name: "Spicy Sausage", cost: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)