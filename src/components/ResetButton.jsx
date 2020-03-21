import React, { Component } from 'react';
import './ResetButton.css'

class ResetButton extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render = () => { 
    return (
      <div >
        <br/>
        <button className="resetButton" onClick={this.reset}>RESET</button>
      </div>
    );
  }

  reset = () => {
    this.props.resetMethod();
  }

}

export default ResetButton;