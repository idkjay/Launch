import React from 'react';

const Numbers = props => {
  return (
    <div className='box numbers'>
      <h1>{props.numberHeader}</h1>
      {props.numberDateDisplay}
    </div>
  )
}

export default Numbers;
