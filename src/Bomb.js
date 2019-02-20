// your Bomb code here!
// your ImageSlider code here!
import React from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    bombMessage = () => {
        if (this.state.secondsLeft > 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return 'Boom!'
    }

    render() {
        return (
            <div>
                {this.bombMessage()}
            </div>
        )
    }

}