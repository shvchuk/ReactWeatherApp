import React, {Component} from 'react';

class WeatherForm extends React.Component{
  onFormSubmit = (event) => {
    event.preventDefault();

    const location = this.location.value;
    if(location.length > 0){
      this.location.value = '';
      this.props.onSearch(location);
    }
  };

  render(){
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref={(ref) => this.location = ref} placeholder="Enter city name..."/>
            <button>Get Weather</button>
          </form>
        </div>
    );
  }
}

module.exports = WeatherForm;