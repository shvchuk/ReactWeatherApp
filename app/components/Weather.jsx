import React, {Component} from 'react';

import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component{
  state = {
    isLoading: false
  };

  handleSearch = (location) => {
    const that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (error) => {
      that.setState({
        isLoading: false
      });
      alert(error);
    });
  };

  render(){
    let {temp, location, isLoading} = this.state;
    const renderMessage = () => {
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    };
    return (
        <div>
          <h3>Weather Component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {/*<WeatherMessage location={this.state.location} temp={this.state.temp}/>*/}
        </div>

    );
  }
}

module.exports = Weather;