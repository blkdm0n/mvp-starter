import React from 'react';

const ListItem = (props) => (
  <div>
    <a href="#" onClick={() => console.log('I got a click')}>
      <img src={props.item.photoLink}/> 
    </a>  
  </div>
)

export default ListItem;

