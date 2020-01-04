// your code, here
let potato = {
  itemName: "Potatos",
  quantity: 200
}

let eggs = {
  itemName: "Eggs",
  quantity: 400
}

let butter = {
  itemName: "Butter",
  quantity: 2
}

let shoppingCart = []
shoppingCart.push(potato,eggs,butter)
 shoppingCart.forEach((item)=>{
   console.log(item.itemName + " " + item.quantity)
 })
