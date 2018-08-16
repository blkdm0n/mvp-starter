import React from 'react';
import ReactDOM from 'react-dom';


class AddSnake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }

  handleSubmit(event) {
    event.preventDefault();
    //i am updating my data and sending it :) 
    //bodyparse will prevent empty bodies!!!!
    var snakeData = this.state.formValues;
      
    $.ajax({
      method: 'POST',
      data: JSON.stringify(snakeData),
      url: '/', 
      success: function (data) {
        console.log(`Post sent!`);  
        this.setState({formValues:{
          species: '',
          photoLink: '',
          biteProtocol: '',
          notes: ''
        }});
      },
      error: (err, data) => {
        console.log('The POST is not working');
      }
    });
  } 

  render(){
  return (
  <form onSubmit={this.handleSubmit}>
    <input type="text" name="species" placeholder="Enter the species here" value={this.state.formValues["species"]} onChange={this.handleChange} /><br/>
    <input type="text" name="photoLink" placeholder="Enter URL address for photo" value={this.state.formValues["photoLink"]} onChange={this.handleChange}/><br/>
    <input type="text" name="biteProtocol" placeholder="Enter the bite protocol URL here" value={this.state.formValues["biteProtocol"]} onChange={this.handleChange} /><br/>
    <input type="text" name="notes" placeholder="Enter additional notes here" value={this.state.formValues["notes"]} onChange={this.handleChange} /><br/>
    <input className="btn btn-primary" type="submit" value="Submit" />
  </form>
  )
 }
}
export default AddSnake;




