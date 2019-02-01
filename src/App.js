import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';

class App extends Component {

	state = {
		weather: {}
	}
	componentDidMount() {
		return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&APPID=25e989bd41e3e24ce13173d8126e0fd6')
		.then(response => {
			// CREATE OBJECT TO HOLD WEATHER DATA
			const weatherData = {
				'city': response.data.name,
				'temp': response.data.main.temp,
				'humidity':	response.data.main.humidity,
				'wind': response.data.wind.speed,
				'description':	response.data.weather[0].description,
				'icon':response.data.weather[0].icon
			}
			console.log(response)

		  	this.setState({weather: weatherData})
			}
		)
	}
  render() {
    return (
      <div className="App">
			<Weather weather={this.state.weather}/>
      </div>
    );
  }
}

export default App;
