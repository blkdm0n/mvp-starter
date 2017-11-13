import React from 'react';

const ListItem = (props) => (
  <div>
    <a href="#" onClick={props.clickHandler}>
      <img src={props.item.photoLink}/> 
    </a>  
      <h6>{props.item.species}</h6>
  </div>
)

export default ListItem;

//I can access the picture on click
 //I can also capture the snake that was clicked
   //How do I get this back up to my App component to update the state?