import React from 'react';

const ListItem = (props) => (
  <div>
    <h3>Species: 
      {props.item.species}
    </h3>
  </div>
)

export default ListItem;


// //list user snakes
//     Protocol: {props.item.link} <br/>
//     Notes: {props.item.notes}