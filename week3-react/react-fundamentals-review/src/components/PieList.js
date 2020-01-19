import React, { useState } from "react"
import Pie from "./Pie"

const PieList = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const pieComponents = props.pies.map((pie) => {
    let selectedStatus
    if(pie.id === selectedId) {
      selectedStatus = true
    } else {
      selectedStatus = false
    }
    console.log("selected status", selectedStatus)

    const handlePieClick = () => {
      return setSelectedId(pie.id)
    }

    return (
      <Pie
        key={pie.id}
        name={pie.name}
        selectedStatus={selectedStatus}
        handlePieClick={handlePieClick}
      />
    )
  })

  return (
    <div>
      <ul>{pieComponents}</ul>
    </div>
  )
}

export default PieList
