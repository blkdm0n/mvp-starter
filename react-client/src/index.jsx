import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    //dummy data is here for now...needs to move to database
      snakes: [
        {
          species: 'King Cobra',
          photoLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-NxFQ5w1eW7JiobvVm3ppsR62eMtPN1fIK6XOAfEaHr9dHuxPQ`,
          biteProtocol: `http://toxicology.ucsd.edu/Snakebite%20Protocols/Ophiopha.htm`, 
          notes: `Have a MINIMUM of 10 vials minimum of Tiger Snake Antivenom available`
        },
        {
          species: 'Black Mamba',
          photoLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-NxFQ5w1eW7JiobvVm3ppsR62eMtPN1fIK6XOAfEaHr9dHuxPQ`, 
          biteProtocol: `http://toxicology.ucsd.edu/Snakebite%20Protocols/Dendroa3.htm`, 
          notes: `Have a MINIMUM of 10 vials of SAIMR Polyvalent Antivenom available`
        },
        {
          species: 'Fer De Lance',  
          photoLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-NxFQ5w1eW7JiobvVm3ppsR62eMtPN1fIK6XOAfEaHr9dHuxPQ`,  
          biteProtocol: `http://toxicology.ucsd.edu/Snakebite%20Protocols/Bothrops.htm`, 
          notes: `Have a MINIMUM of 20 vials of Wyeth Crotalidae Polyvalent Antivenom`
        },
        {
          species: 'Coastal Taipan',
          photoLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-NxFQ5w1eW7JiobvVm3ppsR62eMtPN1fIK6XOAfEaHr9dHuxPQ`,  
          biteProtocol: `http://toxicology.ucsd.edu/Snakebite%20Protocols/Oxyura~2.htm`, 
          notes: `Have a MINIMUM of 10 vials of Taipan Antivenom available`
        },
        {
          species: 'Western Green Mamba', 
          photoLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-NxFQ5w1eW7JiobvVm3ppsR62eMtPN1fIK6XOAfEaHr9dHuxPQ`, 
          biteProtocol: `http://toxicology.ucsd.edu/Snakebite%20Protocols/Dendroa4.htm`, 
          notes: `Have a MINIMUM of 10 vials of Taipan Antivenom available`
        }
      ]
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/', 
      dataType: 'json',
      success: (data) => {
        this.setState({
          snakes: data
        })
        console.log(data);
        
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
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));