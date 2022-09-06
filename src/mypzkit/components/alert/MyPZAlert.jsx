import React from 'react';
import Alert from '@material-ui/lab/Alert';

import styles from './MyPZAlert.module.scss';

const MyPZAlert = (props) => {
  const {
    type,
    children,
    className,
  } = props;

  return (
    <div className={`${styles['mypz-alert']} ${styles[`${className ?? ''}`]}`}>
      <Alert severity={type ?? 'success'}>
        {children}
      </Alert>
    </div>
  );
};

export default MyPZAlert;
