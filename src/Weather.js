import React, { Component } from 'react';
import axios from 'axios'

class Weather extends Component {

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

	render () {
			const weather = this.state.weather
			const pic = `http://openweathermap.org/img/w/${weather.icon}.png`
			return (
				<div>
					<div>
 						<h2>{weather.city}, TN</h2>
 						<img alt='pic' src={pic}></img>
 						<h3>{weather.description}</h3>
 						<h3>{Math.round(weather.temp)}*F</h3>
 						<h3>Humidity: {weather.humidity}%</h3>
 						<h3>Wind: {weather.wind}mph</h3>
					</div>
				</div>
			)

	}
}

export default Weather