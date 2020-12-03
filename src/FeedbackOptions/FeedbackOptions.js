import React from 'react';

const FeedbackOptions = ({ onGoodBtn, onNeutralBtn, onBadBtn }) => (
  <>
    <button className="buttonFeedback" onClick={onGoodBtn}>
      Good
    </button>
    <button className="buttonFeedback" onClick={onNeutralBtn}>
      Neutral
    </button>
    <button className="buttonFeedback" onClick={onBadBtn}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
