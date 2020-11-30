import React from 'react';

const FeedbackBtn = ({ onGoodBtn, onNeutralBtn }) => (
  <>
    <button className="buttonFeedback" onClick={onGoodBtn}>
      Good
    </button>
    <button className="buttonFeedback" onClick={onNeutralBtn}>
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
  </>
);

export default FeedbackBtn;
