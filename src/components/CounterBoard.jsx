import React, { Component } from 'react';
import './CounterBoard.css'

class CounterBoard extends Component {

  render = () => {
    return (
      <div className="counterBoard">
        <br />
        <span className="count">{this.props.counter}</span>
      </div>
    );
  }
}

export default CounterBoard;