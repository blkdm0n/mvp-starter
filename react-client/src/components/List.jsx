import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>Venomous Snake Collection</h4>
    There are {props.snakes.length} Snakes in your collection.
    { props.snakes.map((snake, index) => <ListItem key ={index} item={snake} clickHandler={props.clickHandler} />)}
  </div>
)

export default List;

