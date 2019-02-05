import React, { Component } from 'react'

class Today extends Component {


	getDay(time) {
		let today = new Date(time*1000)
		let day = today.getDay()
		return this.convertDay(day)
	}

	getMonth(time) {
		let today = new Date(time*1000)
		let month = today.getMonth()
		return this.convertMonth(month)
	}

	getDayOfMonth(time) {
		let today = new Date(time*1000)
		let theDate = today.getDate()
		return theDate
	}

	convertDay(day) {

		// eslint-disable-next-line default-case
		switch(day) {
		  	case 0: return "Sunday";
			  	break;
			case 1:	return "Monday"
			  	break;
			case 2:	return "Tuesday"
				break;
			case 3:	return "Wednesday"
				break;
			case 4:	return "Thursday"
				break;
		  	case 5:	return "Friday"
			  break;
		  	case 6:	return "Saturday"
			  break;
		}
	}

	convertMonth(month) {
		// eslint-disable-next-line default-case
		switch(month) {
			case 0 : return "January"
				break;
			case 1: return "February"
				break;
			case 2 : return "March"
				break;
			case 3: return "April"
				break;
			case 4 : return "May"
				break;
			case 5: return "June"
				break;
			case 6 : return "July"
				break;
			case 7: return "August"
				break;
			case 8 : return "September"
				break;
			case 9: return "October"
				break;
			case 10 : return "November"
				break;
			case 12: return "December"
				break;
		}
	}

	render() {
		const today = this.props.weather.time
		return (
			<div>
				<h3>
					{this.getDay(today)} {this.getMonth(today)} {this.getDayOfMonth(today)}
				</h3>
			</div>
		)
	}
}

export default Today