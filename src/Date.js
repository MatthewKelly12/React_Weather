import React, { Component } from 'react'
import MinMax from './MinMax';
import Today from './Today';


class Date extends Component {
	render() {

		return (
			<div>
				<Today weather={this.props.weather}/>
				<MinMax weather={this.props.weather}/>
			</div>
		)
	}
}

export default Date