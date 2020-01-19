import React from 'react';
import Grocery from './Grocery'

const GroceryList = props => {
  const newGroceries = props.groceries.map((item) => {
    return (
      <Grocery
        name={item.name}
      />
    )
  })
  return (
    <ul>{newGroceries}</ul>
  )
}

export default GroceryList
