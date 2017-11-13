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
      isBitten: false,
      biter: {}
    }
    //handle any bites
    this.biteHandler = this.biteHandler.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/getsnakes', 
      dataType: 'json',
      success: (data) => {
        this.setState({snakes:data});
        //console.log('you got data', data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    }

    biteHandler() {
      //change state of isBitten will render Bitten component
      console.log('click on photo');
      this.setState({isBitten: true});
    }
    

    render() {
      if (this.state.isBitten) {
        return (
          <div>
      <h1>SNAKEBYTE</h1>
      <Bitten snake={this.state.snakes[0]}/>
    </div>
    )
      } 
        return (<div>
            <h1>SNAKEBYTE</h1>
            <AddSnake />
            <List clickHandler={this.biteHandler} snakes={this.state.snakes}/>
          </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

//we cannot use onClick on a React Component
  //pass handler as prop => clickHandler = {this.myHandler}
  //reference INSIDE our component using props.clickHandler
  