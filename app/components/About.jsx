import React, {Component} from 'react';

// class About extends React.Component{
//   render(){
//     return (
//         <h3>About Component</h3>
//     );
//   }
// }

const About = (props) => {
  return (
  <div className="row">
      <div className="medium-6 large-4 small-centered columns">
        <h1 className="text-center">About</h1>
        <p>Weather app built on React. Get the weather from any city in an easy way.</p>
        <p>Tools used building this app:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - JavaScript library.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - Weather Data.
          </li>
        </ul>
      </div>
  </div>
  );
};

module.exports = About;