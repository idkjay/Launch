import React from "react"
import Grocery from "./Grocery"

const GroceryList = props => {
  const newGroceryList = props.groceries.map((groceryObject) => {
    return (
      <Grocery
        name={groceryObject.name}
      />
    )
  })
  return (
    <ul> {newGroceryList} </ul>
  )
}

export default GroceryList
