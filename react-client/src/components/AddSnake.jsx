import React from 'react';
import ReactDOM from 'react-dom';


class AddSnake extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    species: '',
    photoLink: '',
    biteProtocol: '',
    notes: ''
  }
  //binds our handleChange and handleSubmit methods
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handles changes in form
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //handles submit once complete
  handleSubmit(event) {
    alert(this.setState.value);
    event.preventDefault();
  }

  render() {
     return(
        <form onSubmit={this.handleSubmit} method='post'>
          <label>
          Enter your snake's info:
            <input type='text' value={this.state.species} placeholder='Enter the species here'/><br/>
            <input type='text' value={this.state.photoLink} placeholder = 'Add URL link to photo here'/><br/>
            <input type='text' value={this.state.biteProtocol} placeholder = 'Add URL link to bite protocol here'/><br/>
            <input type='text' value={this.state.notes} placeholder = 'add additional notes if you wish'/>         
         </label>
          <input type="submit" value="Submit"/>
        </form>
    );
  }
}

export default AddSnake;




