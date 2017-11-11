import React from 'react';

const ListItem = (props) => (
  <div>
    <a href="#" onClick={() => console.log('I got a click')}>
      <img src={props.item.photoLink}/> 
      <h6> {props.item.species} </h6>
    </a>  
  </div>
)

export default ListItem;

