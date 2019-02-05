import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Weather from './Weather';
import Forecast from './Forecast';
import Date from './Date';

class App extends Component {

	state = {
		weather: {},
		forecast: []
	}

	getCurrentWeather() {
		return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&APPID=25e989bd41e3e24ce13173d8126e0fd6')
		.then(response => {
			// CREATE OBJECT TO HOLD WEATHER DATA
			const weatherData = {
				'city': response.data.name,
				'temp': response.data.main.temp,
				'humidity':	response.data.main.humidity,
				'wind': response.data.wind.speed,
				'description':	response.data.weather[0].description,
				'icon':response.data.weather[0].icon,
				'time': response.data.dt,
				'min': response.data.main.temp_min,
				'max': response.data.main.temp_max
			}



			console.log(response)

		  	this.setState({weather: weatherData})
			}
		)
	}

	getFiveDayForecast() {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&APPID=25e989bd41e3e24ce13173d8126e0fd6')
		.then(response => this.setState({forecast: response.data.list}))
	}

	componentDidMount() {
		this.getCurrentWeather()
		this.getFiveDayForecast()
	}

  render() {

    return (
      <div className="App">
			<Weather weather={this.state.weather}/>
			<Date weather={this.state.weather}/>
			<Forecast forecast={this.state.forecast}/>
      </div>
    );
  }
}

export default App;
