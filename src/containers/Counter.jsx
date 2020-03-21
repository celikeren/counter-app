import React, { Component } from 'react';
import './Counter.css';
import CounterButton from '../components/CounterButton';
import CounterBoard from '../components/CounterBoard';
import ResetButton from '../components/ResetButton';
import propTypes from 'prop-types';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }

    //this.increment = this.increment.bind(this);
    //if arrow function, no need to bind
  }

  render() {
    return (
      <div className="counter">
        <CounterBoard counter={this.state.counter} />
        <div className="grid">
          <CounterButton incrementMethod={this.increment} />
          <CounterButton by={'+5'} incrementMethod={this.increment} />
          <CounterButton by={'+10'} incrementMethod={this.increment} />
          <CounterButton by={-1} incrementMethod={this.increment} />
          <CounterButton by={-5} incrementMethod={this.increment} />
          <CounterButton by={-10} incrementMethod={this.increment} />
        </div>
        <ResetButton resetMethod={this.reset} />
      </div>
    );
  }

  /* with this.state
    increment = (by) => {
      this.setState({
        counter: this.state.counter + by
      });
    }
  */


  // with prevState
  increment = (by) => {
    this.setState(
      (prevState) => {
        var b = parseInt(by, 10);
        return { counter: prevState.counter + b }
      });
  }

  reset = () => {
    this.setState({
      counter: 0
    });
  }

}

CounterButton.defaultProps = {
  by: '+1'
}

/*
CounterButton.propTypes = {
  by: propTypes.number
}
*/

export default Counter;
