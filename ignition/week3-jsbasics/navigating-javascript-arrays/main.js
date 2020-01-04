let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

let supplyCheck = suppliesArray => {
  suppliesArray.forEach((item) => {
    console.log(`${item} is logged and accounted for.`)
  })
}
supplyCheck(supplies)

// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.

let stowSupplies = suppliesArray => {
  suppliesArray.forEach((item, index)=>{
    console.log(`${item} is in locker ${index + 1}`)
  })
}
stowSupplies(supplies)

// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.

let addAlphabetically = (suppliesArray, extraItem) => {
  let updatedSuppliesArray = suppliesArray.concat(extraItem)
  return updatedSuppliesArray.sort()
}
console.log(addAlphabetically(supplies, "laser pistol"))

// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.

let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

let stockCheck = (checkList, suppliesArray) => {
  let missingItems = []
  checkList.forEach((item) => {
    if(!suppliesArray.includes(item)) {
      missingItems.push(item)
    }
  })
  return missingItems
}

stockCheck(inventoryChecklist, supplies)

// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.


let addMissingSupplies = (suppliesArray, extraItems) => {
  return suppliesArray.concat(extraItems)
}

let missingItems = stockCheck(inventoryChecklist, supplies)

addMissingSupplies(supplies, missingItems)
