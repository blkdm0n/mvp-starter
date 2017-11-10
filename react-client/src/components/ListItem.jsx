import React from 'react';

const ListItem = (props) => (
  <div>
    <a href="#">
      <img src={props.item.link}/> 
    </a>  
  </div>
)

export default ListItem;


// //list user snakes
//     Protocol: {props.item.link} <br/>
//     Notes: {props.item.notes}