import React, { Component } from 'react';


class Weather extends Component {

	render () {
			const weather = this.props.weather
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