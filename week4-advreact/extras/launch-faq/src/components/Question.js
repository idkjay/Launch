import React from 'react';

const Question = props => {
  let answer;
  let button;
  const question = props.question

  if (props.selectState === true) {
    answer = props.answer;
    button =
      <div>
        <button onClick={props.setToggleIdClosure} className="button small buttonTrue" type="button">-</button>
        <span className="question">{question}</span>
      </div>
  } else {
    button =
      <div>
        <button onClick={props.setToggleIdClosure} className="button small" type="button">+</button>
        <span className="question">{question}</span>
      </div>
  }

  return (
    <div className="row buttonBox">
        {button}
      <p className="columns small-12">{answer}</p>

    </div>
  )
}

export default Question;
