import React from 'react';

import styles from './MyPZBadge.module.scss';

const MyPZBadge = (props) => {
  const { children, value } = props;

  return (
    <div className={styles['mypz-badge']}>
      {children}
      <span className={styles['mypz-badge__counter']}>{value}</span>
    </div>
  );
};

export default MyPZBadge;
