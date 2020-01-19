import React, {useState, useEffect} from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';
import ErrorList from "./ErrorList"

const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])


  useEffect(() => {
    fetch('/api/v1/questions')
    .then(response => response.json())
    .then(response => {
      setQuestions(response)
    })
  },[])

  const setNewQuestion = (formPayload) => {
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      setQuestions([
        ...questions,
        body
      ])
    })
  }

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (<Question key={question.id} question={question.question} answer={question.answer} selected={selected} handleClick={handleClick}/>)
  })

  return (
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <div className='question-form'>
        <QuestionForm
          onSubmit={setNewQuestion}
        />
      <h1>

      </h1>
      </div>
    </div>)

}

export default FAQContainer;
