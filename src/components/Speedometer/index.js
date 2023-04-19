import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg">
        <h1 className="heading-text">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="limits-text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            onClick={this.accelerateSpeed}
            className="button accelerate-btn"
            type="submit"
          >
            Accelerate
          </button>
          <button
            onClick={this.applyBrake}
            className="button brake-btn"
            type="submit"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
