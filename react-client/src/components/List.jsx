import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> <a href="#" onClick={props.clickHandler} >Venomous Snake Collection</a> </h4>
    There are { props.snakes.length } Snakes in your collection.
    { props.snakes.map((snake, index) => <ListItem key ={index} item={snake} />)}
  </div>
)

export default List;

