import React from 'react';

const ValueOfCounter = ({ good, neutral, bad }) => (
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
      Total: <span className="countStat">7</span>
    </li>
    <li className="itemStat">
      Positive feedback: <span className="countStat">43 %</span>
    </li>
  </>
);

export default ValueOfCounter;
