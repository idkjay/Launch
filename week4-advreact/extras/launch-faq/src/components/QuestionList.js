import React,{useState} from 'react';
import Question from './Question'

const QuestionList = props => {
  const [toggleId, setToggleId] = useState(null)
  const questionObjArray = props.data.map(questionObj => {

    let selectState = false;
    if(toggleId === questionObj.id) {
      selectState = true;
    }

    const setToggleIdClosure = event => {
      event.preventDefault();
      if (toggleId === questionObj.id) {
        setToggleId(null)
      } else {
        setToggleId(questionObj.id)
      }
    }

    return (
      <Question
        key={questionObj.id}
        question={questionObj.question}
        answer={questionObj.answer}
        selectState={selectState}
        setToggleIdClosure={setToggleIdClosure}
      />
    )
  });

  return (
    <div className="QuestionList">
      {questionObjArray}
    </div>
  )
}

export default QuestionList;
