import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {stateMinutes: 0, stateSeconds: 0, isTimeRunning: false}

  updateUiTime = () => {
    const {stateSeconds} = this.state
    if (stateSeconds < 59) {
      this.setState(prevState => ({stateSeconds: prevState.stateSeconds + 1}))
    } else {
      this.setState(prevState => ({stateMinutes: prevState.stateMinutes + 1}))
      this.setState({stateSeconds: 0})
    }
    console.log('Callback Function Called')
  }

  startButtonClicked = () => {
    console.log('Start Button Clicked')
    this.setState(prevState => ({isTimeRunning: !prevState.isTimeRunning}))
    this.timerId = setInterval(this.updateUiTime, 1000)
  }

  stopButtonClicked = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isTimeRunning: !prevState.isTimeRunning}))
    console.log('Stopped Button Clicked')
  }

  resetTimerButton = () => {
    clearInterval(this.timerId)
    this.setState({stateMinutes: 0, stateSeconds: 0, isTimeRunning: false})
    console.log('Reset Button Clicked')
  }

  render() {
    const {stateMinutes, stateSeconds, isTimeRunning} = this.state

    const formattedStateMinutes =
      stateMinutes < 10 ? `0${stateMinutes}` : stateMinutes
    const formattedStateSeconds =
      stateSeconds < 10 ? `0${stateSeconds}` : stateSeconds

    return (
      <div className="main-div-bg-container">
        <div className="stop-watch-container-with-heading">
          <h1>Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="watch-icon-and-heading">
              <img
                className="timer-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <div className="time-container">
              <h1>{`${formattedStateMinutes}:${formattedStateSeconds}`}</h1>
            </div>
            <div className="controller-buttons">
              <button
                disabled={isTimeRunning}
                onClick={this.startButtonClicked}
                type="button"
                className="green common-button-style"
              >
                Start
              </button>
              <button
                onClick={this.stopButtonClicked}
                disabled={!isTimeRunning}
                type="button"
                className="red common-button-style"
              >
                Stop
              </button>
              <button
                disabled={isTimeRunning}
                onClick={this.resetTimerButton}
                type="button"
                className="orange common-button-style"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
