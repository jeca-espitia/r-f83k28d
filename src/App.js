import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.changeValue.bind(this)}>Incrementa</button>
        
      </div>)
  }

  changeValue() {
    //const newValue = + this.state.value;
    this.setState({
      value: this.state.value+1
    })
  }
}
export default App;