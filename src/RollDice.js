import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOne : 1,
			numberTwo : 6,
			stringOne : 'one',
			stringTwo : 'six',
			rolling   : false
		};
		this.rollDice = this.rollDice.bind(this);
	}
	static defaultProps = {
		strings : [
			'one',
			'two',
			'three',
			'four',
			'five',
			'six'
		]
	};
	rollDice() {
		const newNumberOne = Math.floor(Math.random() * 6) + 1;
		const newNumberTwo = Math.floor(Math.random() * 6) + 1;
		const newStringOne = this.props.strings[newNumberOne - 1];
		const newStringTwo = this.props.strings[newNumberTwo - 1];

		this.setState({
			numberOne : newNumberOne,
			numberTwo : newNumberTwo,
			stringOne : newStringOne,
			stringTwo : newStringTwo,
			rolling   : true
		});

		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}

	render() {
		let button = this.state.rolling ? (
			<button className='RollDice__button RollDice--rolling'>Rolling...</button>
		) : (
			<button onClick={this.rollDice} className='RollDice__button'>
				Role Dice!
			</button>
		);
		return (
			<div className='RollDice'>
				<div className='RollDice__dice-container'>
					<Die string={this.state.stringOne} rolling={this.state.rolling} />
					<Die string={this.state.stringTwo} rolling={this.state.rolling} />
				</div>
				{button}
			</div>
		);
	}
}

export default RollDice;
