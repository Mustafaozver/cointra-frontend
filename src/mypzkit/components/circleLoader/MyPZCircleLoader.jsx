import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './MyPZCircleLoader.module.scss';

const MyPZCircleLoader = (props) => (
  <div className={styles['mypz-circle-loader']}>
    <CircularProgress color="inherit" {...props} />
  </div>
);

export default MyPZCircleLoader;
