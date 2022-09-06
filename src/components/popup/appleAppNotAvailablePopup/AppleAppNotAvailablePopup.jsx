import React, { useState, useEffect } from 'react';

import styles from './AppleAppNotAvailablePopup.module.scss';

import { MyPZButton, MyPZModal } from '../../../mypzkit';

const AppleAppNotAvailablePopup = (props) => {
  const { isOpen, onClose } = props;

  return (
    <MyPZModal isOpen={isOpen} onClose={onClose}>
      <div className={styles['apple-app-not-available-popup']}>
        <div>
          Apple mobile application is currently not available.
        </div>
        <div>
          Please try again later
        </div>
        <div className={styles['apple-app-not-available-popup__button']}>
          <MyPZButton onClick={onClose}>Close</MyPZButton>
        </div>
      </div>
    </MyPZModal>
  );
};

export default AppleAppNotAvailablePopup;
