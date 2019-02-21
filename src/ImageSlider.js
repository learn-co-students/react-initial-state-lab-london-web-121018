// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0
    }
  }

  // changeSlideIndex = () => {
  //   const newSlideIndex = this.state.currentSlideIndex + 1;
  //   this.setState({
  //     currentSlideIndex: newSlideIndex
  //   })
  // }

  render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }

}

export default ImageSlider;
