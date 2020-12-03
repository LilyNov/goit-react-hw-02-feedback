import React from 'react';

const ValueOfCounter = ({ good, neutral, bad, total, percentage }) => (
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
          Total: <span className="countStat">{good + neutral + bad}</span>
        </li>
        <li className="itemStat">
          Positive feedback:{total}
          <span className="countStat">{percentage} %</span>
        </li>
      </>
    ) : (
      <p>No feedback given</p>
    )}
  </>
);

export default ValueOfCounter;
