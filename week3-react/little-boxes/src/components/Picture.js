import React from 'react';
import List from './List'

let listHeader = "Here is a List"
let listItems = <ul>
  <li>Asteroids</li>
  <li>Comets</li>
  <li>Moon</li>
  <li>Planets</li>
  <li>Stars</li>
  <li>Sun</li>
</ul>

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>{props.pictureHeader}</h1>
      <img alt='Clever EEs' src={props.url}/>
      <List
        listHeader={listHeader}
        listItems={listItems}/>
    </div>
  )
}

export default Picture;
