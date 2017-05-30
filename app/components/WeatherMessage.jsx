import React, {Component} from 'react';

// class WeatherMessage extends React.Component{
//   render(){
//     return (
//         <h3>It is {this.props.temp} C in {this.props.location}.</h3>
//     );
//   }
// }

const WeatherMessage = (props) => {
  return (
      <h3>It is {props.temp} C in {props.location}.</h3>
  );
};

module.exports = WeatherMessage;