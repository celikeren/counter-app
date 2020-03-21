import React, { Component } from 'react';
import './CounterButton.css'

class CounterButton extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render = () => {
    return (
      <div >
        <br />
        <button onClick={this.increment} className="counterButton">{this.props.by}</button>
        <br />
      </div>
    );
  }

  increment = () => {
    this.props.incrementMethod(this.props.by);
  }

}


export default CounterButton;