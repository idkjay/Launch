import React,{useState} from 'react';

const App = (props) => {
  const question = props.data.question
  const answer = props.data.answer
  const setId = props.data.id

  const [toggleId, setToggleId] = useState(null)

  const setToggleIdClosure = () => {
    setToggleId(setId)
  }

  const resetToggleIdClosure =() => {
    setToggleId(null)
  }

  let selectState = false;
  let button;
  if(toggleId === setId) {
    selectState = true
    button =
    <div className="buttonBox">
      <button onClick={resetToggleIdClosure} className="button buttonTrue" type="button">-</button><span>{question}</span>
      <p>{answer}</p>
    </div>
  } else {
    selectState = false
    button =
    <div className="buttonBox">
      <button onClick={setToggleIdClosure} className="button" type="button">+</button><span>{question}</span>

    </div>
  }


  return(
    <div>
      <h1 className="text-center">We're here to help</h1>
      {button}

    </div>
  )
}

export default App;
