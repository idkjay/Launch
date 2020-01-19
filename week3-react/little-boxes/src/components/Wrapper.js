import React from 'react';

import Numbers from "./Numbers"
import Picture from "./Picture"


let date = (new Date).toString()
let random = parseInt(Math.random() * 100)
let numberDate =
<p>
  Today's date is
  <strong>&nbsp;{date}&nbsp;</strong>
  and
  <em>&nbsp;{random}&nbsp;</em>
  is a random number.
</p>

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>

      <Numbers
        numberHeader="Today's Date and Random Number"
        numberDateDisplay={numberDate}
      />

      <Picture
        pictureHeader="Look at This Picture"
        url={'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'}
      />


    </div>
  )
}

export default Wrapper;
