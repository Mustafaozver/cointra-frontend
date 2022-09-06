import React, { useState } from 'react';

import styles from './Feedback.module.scss';

import FeedbackPopup from '../popup/feedbackPopup/FeedbackPopup';

const Feedback = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <FeedbackPopup isOpen={showPopup} onClose={handleClose} />
      <div className={styles['feedback-component']} onClick={handleClick} onKeyPress={handleClick} role="button" tabIndex="0">
        my feedback
      </div>
    </>
  );
};

export default Feedback;
