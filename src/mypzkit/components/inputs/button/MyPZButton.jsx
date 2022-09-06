import React from 'react';

import styles from './MyPZButton.module.scss';

const MyPZButton = (props) => {
  const {
    children,
    buttonstyle,
  } = props;

  return (
    <div className={styles['mypz-button']}>
      <button type="button" {...props} className={styles[buttonstyle ? `mypz-button__style-${buttonstyle}` : '']}>
        {children}
      </button>
    </div>
  );
};

export default MyPZButton;
