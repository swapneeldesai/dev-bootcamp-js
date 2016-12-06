import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }

    this.onDecrement = this.decrement.bind(this)
    this.onIncrement = this.increment.bind(this)
  }
  increment() {
    this.setState({counter: this.state.counter + 1})
  }
  decrement() {
    this.setState({counter: this.state.counter - 1})
  }
  render() {
    return (
      <div>
        <p id="counter">{this.state.counter}</p>
        <button id="btn-decrement" onClick={this.onDecrement}>-</button>
        <button id="btn-increment" onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}