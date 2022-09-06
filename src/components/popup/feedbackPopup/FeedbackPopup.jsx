import React, { useState, useEffect } from 'react';

import styles from './FeedbackPopup.module.scss';

import { MyPZModal } from '../../../mypzkit';
import { postFeedback } from '../../../api/feedbacks/feedbacksApi';
import storageManager from '../../../storage/storageManager';

const FeedbackPopup = (props) => {
  const { isOpen, onClose } = props;
  const [feedbackDone, setFeedbackDone] = useState(false);

  useEffect(() => {
    const isFeedbackDone = storageManager.getFeebackDone();
    setFeedbackDone(isFeedbackDone);
  }, []);

  const handleClick = (rate) => () => {
    postFeedback(rate);
    storageManager.setFeebackDone();
    setFeedbackDone(true);
  };

  const renderFeedbackNote = (note) => {
    return (<div key={`note-${note}`} onClick={handleClick(note)} onKeyPress={handleClick(note)} role="button" tabIndex="0" className={`${styles['popup-feedback__note']}`}>
      <img src={`/images/smiley/smiley-${note}.png`} />
    </div>);
  };

  const renderFeedbackNotes = () => {
    const res = [];
    for (let i = 1; i <= 5; i++) {
      res.push(renderFeedbackNote(i));
    }
    return res;
  };

  const renderPopupContent = () => {
    if (!feedbackDone) {
      return (
        <>
          <div className={styles['popup-feedback__title']}>
            How is your experience with zeekeez ?
          </div>
          <div className={styles['popup-feedback__choice']}>
            {renderFeedbackNotes()}
          </div>
        </>
      );
    }

    return (
      <>
        <div className={styles['popup-feedback__thumbs']}>
          <img src="/images/thumbsup.png" />
        </div>
        <div className={styles['popup-feedback__title']}>
          We value your feedback,
          <br />
          thank you!
        </div>
        <div className={styles['popup-feedback__text']}>
          Customer Care Team
        </div>
        <div className={styles['popup-feedback__signature']}>
          Grace
        </div>
      </>
    );
  };

  return (
    <MyPZModal isOpen={isOpen} onClose={onClose}>
      <div className={styles['popup-feedback']}>
        {renderPopupContent()}
      </div>
    </MyPZModal>
  );
};

export default FeedbackPopup;
