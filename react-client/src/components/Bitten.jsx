import React from 'react';

const Bitten = (props) => (
  <div>
    <h1>OH NOES, YOU GOT BIT!</h1>
    <h3>1. Secure the snake</h3>
    <h3>2. Call 911</h3>
    <iframe height="400" width="1200" src={props.snake.biteProtocol}></iframe>
    <h2> SPECIAL NOTES:   {props.snake.notes} </h2> 
  </div>
)

export default Bitten;
