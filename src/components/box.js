import React, {Component} from 'react';
import './box.css'

class Box extends Component {

	render() {

		return(
			<div className="box" class='App-box' style={{backgroundColor: this.props.color}}>
				<h4 class="round"> {this.props.title} </h4>
				<hr></hr>
				<p> {this.props.desc} </p>
				<button class="button2" style={{color: this.props.color}}> En savoir plus </button>
			</div>	
		);
	}
}

export default Box;