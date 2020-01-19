import React, { useState, useEffect } from 'react';
import Question from './Question';
import Form from './Form.js'

import { Link } from 'react-router-dom';

const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  useEffect(() => {
    fetch('/api/v1/questions')
    .then(response => response.json())
    .then(response => {
      setQuestions(response)
    })
  },[])

  const addNewQuestion = (newSet) => {
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify(newSet)
    })
    .then(response => response.json())
    .then(response => {
      setQuestions([
        ...questions,
        response
      ])
    })
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <div>
        <Form
          onSubmit={addNewQuestion}
        />
      </div>
      <h1>
        <Link to="/launchers">List of Famous Launchers</Link>
      </h1>
    </div>
  )

}

export default FAQContainer;
