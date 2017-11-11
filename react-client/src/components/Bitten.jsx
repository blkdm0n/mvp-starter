import React from 'react';

const Bitten = (props) => (
  <div>
    <h1>CALL 911 YOU'VE BEEN BITTEN!!!!</h1>
    <iframe src="http://toxicology.ucsd.edu/Snakebite%20Protocols/Ophiopha.htm"></iframe>
    <h2> Use at least 10 vials for Tiger Snake Antivenom </h2> 
  </div>
)

export default Bitten;

//Conditional Rendering
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );