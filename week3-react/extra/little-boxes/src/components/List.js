import React from 'react';

const List = props => {
  return ( <
    div className = 'box list' >
    <h1 >{props.listHeader} < /h1>
    <ul >
    {props.list}
    </ul> <
    /div>
  )
}

export default List;
