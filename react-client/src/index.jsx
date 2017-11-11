import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddSnake from './components/AddSnake.jsx';
import Bitten from './components/Bitten.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    //data moved to a json file in server retrieved by 'GET' request
      snakes: [],
      isBitten: false
    }
    //handle any bites
    this.biteHandler = this.biteHandler.bind(this);
  }

  biteHandler(biter) {
    //change state 
      //isBitten
      //send the Biter to the Bitten component to be rendered
    this.setState({
      isBitten: !isBitten,
      biter: this.state.snakes[0]
    })
    event.preventDefault();
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/getsnakes', 
      dataType: 'json',
      success: (data) => {
        this.setState({snakes:data});
        console.log('you got data', data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



render() {
  if (this.state.isBitten) {
    return (
    <div>
      <h1>SNAKEBYTE</h1>
      <Bitten/>
    </div>
    )
  } 
    return (<div>
      <h1>SNAKEBYTE</h1>
      <AddSnake />
      <List onClick={this.biteHandler} snakes={this.state.snakes}/>
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));