import React, { Component } from 'react';
import axios from 'axios'

class Weather extends Component {
	state = {
		people: []
	}
	componentDidMount() {
		return axios.get("https://swapi.co/api/people")
		.then(r => {
		  console.log(r.data.results)
		  this.setState({people: r.data.results})
		})
	}

	render () {
			const people = this.state.people
			console.log(people)
			return (
				<div>
					{people.map(p => {

						return(
							<div>
								<h1>{p.name}</h1>
							</div>
						)})}
				</div>
			)

	}
}

export default Weather