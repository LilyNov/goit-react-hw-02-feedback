import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

export default class Counter extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

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

  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (good * 100) / countTotalFeedback;

    return (
      <div className="Counter">
        <div className="feedback">
          <h2 className="textFeedback">Please leave feedback</h2>
          <FeedbackOptions
            onGoodBtn={this.handleGoodBtn}
            onNeutralBtn={this.handleNeutralBtn}
            onBadBtn={this.handleBadlBtn}
          />
          <h3>Statistics</h3>
          <ul className="listStat ">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              percentage={countPositiveFeedbackPercentage}
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
