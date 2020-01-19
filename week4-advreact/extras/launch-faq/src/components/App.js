import React from 'react';
import QuestionList from './QuestionList'

const App = (props) => {
  return(
    <div className="row column">
      <h1 className="text-center">We're here to help</h1>
      <QuestionList
        data={props.data}
      />
    </div>
  )
}
export default App;
