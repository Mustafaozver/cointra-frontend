import React from 'react';

import styles from './MyPZContainer.module.scss';

const MyPZContainer = (props) => {
  const { children, isSmall, className } = props;
  return (
    <div className={`${styles['mypz-container']} ${styles[isSmall ? 'mypz-container__small' : 'mypz-container__default']} ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default MyPZContainer;
