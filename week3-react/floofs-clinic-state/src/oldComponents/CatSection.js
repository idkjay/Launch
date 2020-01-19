import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {
  let catComponents = props.cats.map((catInfo) => {
    return(
      <CatTile
        key={catInfo.id}
        catData={catInfo}
      />
    )
  })

  return(
    <>
      {catComponents}
    </>
  )
}

export default CatSection
