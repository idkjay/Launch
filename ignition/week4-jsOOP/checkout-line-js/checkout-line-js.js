let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

// your code, here
let coffeeItem = shoppingCart[3]
console.log(`1 pound of coffee costs ${coffeeItem.price}.`)
let milkItem = shoppingCart[1]
console.log(`The shopping cart has ${milkItem.quantity} gallon of milk.`)

const taxRate = 6.25
let subTotal = 0
shoppingCart.forEach((item) => {
  subTotal += (item.quantity * item.price)
})
console.log(`Total cost of the items without tax is $${subTotal}.`)
console.log(`Total cost of the items with tax is $${Math.ceil(subTotal * (1 + (taxRate/100))*100)/100}.`)
