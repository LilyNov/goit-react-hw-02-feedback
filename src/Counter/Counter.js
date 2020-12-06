import React from 'react';
import PropTypes from 'prop-types';
import s from '../Counter/Counter.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

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

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback,
    );

    return (
      <div className={s.container}>
        <div className="feedback">
          <Section title="Please leave feedback">
            <FeedbackOptions
              onGoodBtn={this.handleGoodBtn}
              onNeutralBtn={this.handleNeutralBtn}
              onBadBtn={this.handleBadlBtn}
            />
          </Section>

          <Section title="Statistics">
            <ul className={s.listStat}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={countTotalFeedback}
                percentage={countPositiveFeedbackPercentage}
              />
            </ul>
          </Section>
        </div>
      </div>
    );
  }
}
