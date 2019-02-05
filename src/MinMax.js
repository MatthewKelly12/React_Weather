import React, { Component } from 'react'

class MinMax extends Component {
	render() {
		const temp = this.props.weather
		return (
			<div>
				{temp.max} {temp.min}
			</div>
		)
	}
}

export default MinMax