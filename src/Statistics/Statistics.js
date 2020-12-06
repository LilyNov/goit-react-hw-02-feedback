import React from 'react';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <>
    {total > 0 ? (
      <>
        <li className="itemStat">
          Good: <span className="countStat">{good}</span>
        </li>
        <li className="itemStat">
          Neutral: <span className="countStat">{neutral}</span>
        </li>
        <li className="itemStat">
          Bad: <span className="countStat">{bad}</span>
        </li>
        <li className="itemStat">
          Total: <span className="countStat">{total}</span>
        </li>
        <li className="itemStat">
          Positive feedback:
          <span className="countStat"> {percentage} %</span>
        </li>
      </>
    ) : (
      <Notification message="No feedback given"></Notification>
    )}
  </>
);

export default Statistics;
