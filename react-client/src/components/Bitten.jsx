import React from 'react';

const Bitten = (props) => (
  <div>
    <h1>CALL 911 YOU'VE BEEN BITTEN!!!!</h1>
    <iframe src={props.snake.biteProtocol}></iframe>
    <h2> {props.snake.notes} </h2> 
  </div>
)

export default Bitten;
