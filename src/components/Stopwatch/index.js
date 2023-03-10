import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
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
              <h1>00:50</h1>
            </div>
            <div className="controller-buttons">
              <button type="button" className="green common-button-style">
                Start
              </button>
              <button type="button" className="red common-button-style">
                Stop
              </button>
              <button type="button" className="orange common-button-style">
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
