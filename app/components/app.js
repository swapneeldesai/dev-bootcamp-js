import React from 'react';
import Counter from './counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome! </h1>
        <h2>This is a simple React component with lot of white space and no relevant content in it as of now.</h2>
        <img src="http://i.imgur.com/Wo3YF30.png" alt=""></img>

        <Counter />
      </div>
    )
  }
}