import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let dieClass = this.props.rolling ? 'Die Die__rolling' : 'Die';
		return (
			<div className={dieClass}>
				<i className={`fas fa-dice-${this.props.string} Die__icon`} />
			</div>
		);
	}
}

export default Die;
