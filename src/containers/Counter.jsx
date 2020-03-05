import React, { Component } from 'react';
import CounterButton from '../components/CounterButton';
import CounterBoard from '../components/CounterBoard';
import ResetButton from '../components/ResetButton';
import propTypes from 'prop-types'

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
      <div className="Counter">
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <ResetButton resetMethod={this.reset}/>
        <CounterBoard counter={this.state.counter}/>
      </div>
    );
  }


  increment = (by) => {
    console.log(`increment by: ${by}`);
    this.setState({
      counter: this.state.counter + by
    });
  }

  reset = () => {
    this.setState({
      counter: 0
    });
  }

}

CounterButton.defaultProps = {
  by: 1
}

CounterButton.propTypes = {
  by: propTypes.number
}

export default Counter;
