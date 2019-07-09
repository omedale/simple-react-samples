import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}> I am { props.name } and I am {props.age} years olds</p>
      <p>{props.children}</p>
    </div>
    )
};

export default person;