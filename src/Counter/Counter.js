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

  state = { value: this.props.initialValue };

  handleGoodBtn = eventId => {
    this.setState(prevState => ({
      value: prevState.value.filter(val => val.id !== eventId),
    }));
    //  this.state.value + 1
  };

  handleNeutralBtn = event => {
    const neutral = event.target;
    if (neutral.textContent === 'Neutral') {
      this.setState({ value: this.state.value + 1 });
      return;
    }
  };

  render() {
    return (
      <div className="Counter">
        <div className="feedback">
          <h2 className="textFeedback">Please leave feedback</h2>
          <FeedbackBtn
            onGoodBtn={this.handleGoodBtn}
            onNeutralBtn={this.handleNeutralBtn}
          />
          <h3>Statistics</h3>
          <ul className="listStat ">
            <ValueOfCounter value={this.state.value} />
          </ul>
        </div>
      </div>
    );
  }
}

// {
//   this.state.value;
// }
