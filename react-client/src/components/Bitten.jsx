import React from 'react';

const Bitten = (props) => (
  <div>
    <h2>YOU GOT TAGGED, DON'T PANIC!  SECURE THE ANIMAL AND CALL 911!!!</h2>
    <iframe src={props.snake.biteProtocol}></iframe>
    <h2> {props.snake.notes} </h2> 
  </div>
)

export default Bitten;
