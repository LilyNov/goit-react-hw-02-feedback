import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  handleGoodBtn = () => {
    console.log('Клик по кнопке Good');
  };
  render() {
    return (
      <div className="Counter">
        <div className="feedback">
          <h2 className="textFeedback">Please leave feedback</h2>
          <button className="buttonFeedback" onClick={this.handleGoodBtn}>
            Good
          </button>
          <button
            className="buttonFeedback"
            onClick={() => {
              console.log('Клик по кнопке Neutral');
            }}
          >
            Neutral
          </button>
          <button
            className="buttonFeedback"
            onClick={() => {
              console.log('Клик по кнопке Bad');
            }}
          >
            Bad
          </button>
          <h3>Statistics</h3>
          <ul className="listStat ">
            <li className="itemStat">
              Good: <span className="countStat">3</span>
            </li>
            <li className="itemStat">
              Neutral: <span className="countStat">2</span>
            </li>
            <li className="itemStat">
              Bad: <span className="countStat">2</span>
            </li>
            <li className="itemStat">
              Total: <span className="countStat">7</span>
            </li>
            <li className="itemStat">
              Positive feedback: <span className="countStat">43 %</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
