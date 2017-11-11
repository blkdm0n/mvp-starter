import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddSnake from './components/AddSnake.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    //dummy data was here for now...needs to move to database
      snakes: []
    }
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

  render () {
    return (<div>
      <h1>SNAKEBYTE</h1>
      <List snakes={this.state.snakes}/>
      <AddSnake/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));