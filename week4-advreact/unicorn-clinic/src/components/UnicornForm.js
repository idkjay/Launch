import React, { useState } from 'react'
import _ from 'lodash'

import ErrorList from './ErrorList'

const UnicornForm = (props) => {
  const [newUnicorn, setNewUnicorn] = useState({
    unicornName: "",
    description: ""
  })

  const [errors, setErrors] = useState({})

  const clearForm = (event) => {
    setNewUnicorn({
      unicornName: "",
      description: ""
    })
    setErrors({})
  }

  const handleFieldChange = (event) => {
    setNewUnicorn({
      ...newUnicorn,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["unicornName", "description"]
    requiredFields.forEach((reqField) => {
      if (newUnicorn[reqField].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [reqField]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addNewUnicorn(newUnicorn)
      clearForm()
    }
  }

  return(
    <div className="newUnicornForm">
      <h3>Add New Unicorn!</h3>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label>Unicorn Name:</label>
        <input
          type="text"
          value={newUnicorn.unicornName}
          name="unicornName"
          id="unicornName"
          onChange={handleFieldChange}
        />

      <label>Unicorn Description:</label>
        <input
          type="text"
          value={newUnicorn.description}
          name="description"
          id="description"
          onChange={handleFieldChange}
        />
      <input
        className="button"
        type="submit"
        value="Add Unicorn"
      />
      </form>
      <button className="button" onClick={clearForm}>Clear Form</button>
    </div>
  )
}

export default UnicornForm
