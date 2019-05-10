import React, {Component} from 'react';
import './box.css'

class Location extends Component {

	render() {

		return(
			<div className="location" class='Loc-box'>
				<img src={require(`${this.props.image}`)} 
					class= 'Loc-img' alt="loc"/>
				<h2> {this.props.title} </h2>
			</div>		
		);
	}
}

export default Location;