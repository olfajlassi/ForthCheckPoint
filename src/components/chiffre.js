import React, {Component} from 'react';
import './box.css'

class Chiffre extends Component {

	render() {

		return(
			<div className="chiffre" class='Chiff-box'>
				<h1> {this.props.num} </h1>
				<p> {this.props.detail} </p>
			</div>	
		);
	}
}

export default Chiffre;