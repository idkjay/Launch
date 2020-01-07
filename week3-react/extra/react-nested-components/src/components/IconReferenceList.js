import React from "react"
import Icon from './Icon'

const IconReferenceList = props => {
  let articleDescription = `These are written lessons that will walk you through
    a particular concept or technique. Don't submit anything for these!`
  let exerciseDescription = `These assignments are intended to be small, short tasks
   that will allow you to put some of that newly acquired knowledge to work!
   You should submit solutions to all of these via ET!`
  let challengeDescription = `These assignments are larger, and usually require you to
   put two or three of the new concepts you've learned together.
   You should submit solutions to all of these via ET!`

   let iconInfo = [
     {
       key: "1",
       iconName: "Article",
       fontAwesomeSymbol: "fa-file-text-o",
       description: "Article Description"
     },
     {
       key: "2",
       iconName: "Exercise",
       fontAwesomeSymbol: "fa-heartbeat",
       description: "Exercise Description"
     },
     {
       key: "3",
       iconName: "Challenge",
       fontAwesomeSymbol: "fa-puzzle-piece",
       description: "Challenge Description"
     }
   ]
   let icons = iconInfo.map((icon) => {
     return (
       <Icon
         key={icon.key}
         iconName={icon.iconName}
         fontAwesomeSymbol={icon.fontAwesomeSymbol}
         description={icon.description}
       />
     )
   })

   return (
  <ul>
    {icons}
  </ul>
)
 }

export default IconReferenceList
