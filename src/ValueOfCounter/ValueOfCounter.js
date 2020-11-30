import React from 'react';

const ValueOfCounter = ({ value }) => (
  <>
    <li className="itemStat">
      Good: <span className="countStat">{value}</span>
    </li>
    <li className="itemStat">
      Neutral: <span className="countStat">{value}</span>
    </li>
    <li className="itemStat">
      Bad: <span className="countStat">{value}</span>
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
