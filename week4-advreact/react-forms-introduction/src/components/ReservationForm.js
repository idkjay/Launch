import React, { useState } from "react"

const ReservationForm = props => {
  const [firstName, setFirstName] = useState("")

  const handleFirstNameChange = event => {
    console.log(event.currentTarget.value) //this sees all values inputted logged to the console
    setFirstName(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    //send the name up the component hierarchy/add the member to the list
    props.onNameSubmitted(firstName)

    //clear the form
    setFirstName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">Your First Name</label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input type="submit" value="RSVP" className="btn" />
      </div>
    </form>
  )
}

export default ReservationForm
