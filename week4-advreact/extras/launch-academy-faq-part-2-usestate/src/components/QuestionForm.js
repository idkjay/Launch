import React, { useState } from 'react';
import _ from "lodash"

import ErrorList from "./ErrorList"

const QuestionForm = (props) => {

  const [newQA, setNewQA,] = useState({
    question: "",
    answer: ""
  })
  const [errors, setErrors] = useState({})


  const handleChange = event => {
    setNewQA({
      ...newQA,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onSubmit(newQA)
      setNewQA({
        question: "",
        answer: ""
      })
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["question", "answer"]
    requiredFields.forEach(field => {
      if (newQA[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return (
    <div>
      <form className='yes' onSubmit={onSubmit}>

        <ErrorList
          errors={errors}
        />

        <label htmlFor="question">New Question:</label>
        <input
          type="text"
          value={newQA.question}
          id="question"
          name="question"
          onChange={handleChange}
        />
        <label htmlFor="question">New Answer:</label>
        <input
          type="text"
          value={newQA.answer}
          id="answer"
          name="answer"
          onChange={handleChange}
        />
          <input
            type="submit"
            className="button"
            value="Submit"
          />
      </form>
    </div>
  )
}

export default QuestionForm
