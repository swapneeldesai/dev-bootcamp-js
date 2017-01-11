import React from 'react';

export default class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			counter: 0
		}

		this.onIncrement = this.increment.bind(this)
		this.onDecrement = this.decrement.bind(this)
	}
	increment () {
		this.setState({counter: this.state.counter + 1})
	}
	decrement () {
		this.setState({counter: this.state.counter - 1})
	}
	render() {
		return (
			<div id="counter">
				<p>{this.state.counter}</p>
				<button id="increment" onClick={this.onIncrement}>+</button>
				<button id="decrement" onClick={this.onDecrement}>-</button>
			</div>
		)
	}
}