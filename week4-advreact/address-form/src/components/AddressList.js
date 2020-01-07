import React from "react"
import _ from "lodash"


const AddressList = props => {
  let completedForms = props.addresses.map((form) => {
    return (
      <li key={form.firstName}>
        {form.firstName}&nbsp;
        {form.lastName}<br/>
        {form.address}<br/>
        {form.city}<br/>
        {form.state}&nbsp;{form.zipCode}<br/>
        {form.phoneNumber}<br/>
        {form.email}
      </li>
    )
  })
  return (
    <div>
      <ul>{completedForms}</ul>
    </div>
  )
}

export default AddressList
