// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  countdown() {
    return (`${this.state.secondsLeft} seconds left before I go boom!`);
  }

  boom() {
    return (`Boom!`);
  }


  render() {
    return (
      <div>
        {this.state.secondsLeft > 0 ? this.countdown() : this.boom()}
      </div>
    );
  }

}
