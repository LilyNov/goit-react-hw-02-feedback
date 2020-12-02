import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import ValueOfCounter from '../ValueOfCounter/ValueOfCounter';

export default class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutralBtn = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBadlBtn = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <div className="Counter">
        <div className="feedback">
          <h2 className="textFeedback">Please leave feedback</h2>
          <FeedbackBtn
            onGoodBtn={this.handleGoodBtn}
            onNeutralBtn={this.handleNeutralBtn}
            onBadBtn={this.handleBadlBtn}
          />
          <h3>Statistics</h3>
          <ul className="listStat ">
            <ValueOfCounter
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </ul>
        </div>
      </div>
    );
  }
}

// {
//   this.state.value;
// }

// state = { value: this.props.initialValue };
