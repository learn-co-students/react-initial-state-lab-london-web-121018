// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {

constructor(initialCount) {
  super(initialCount)
  this.state = {
    secondsLeft: initialCount.initialCount
  }
}



  render() {
    if(this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>)
    }
    else {
      return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
    }
  }


}
