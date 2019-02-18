import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <div className='wrapper'>
        { this.state.secondsLeft ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!'}
      </div>
    )
  }

}
