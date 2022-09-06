import React from 'react';
import { Drawer } from '@material-ui/core';

import styles from './MyPZDrawer.module.scss';

const MyPZDrawer = (props) => {
  const {
    open, onClose, children, anchor, className,
  } = props;

  return (
    <Drawer anchor={anchor} open={open} onClose={onClose} className={`${styles['mypz-drawer']} ${className ?? ''}`}>
      {children}
    </Drawer>
  );
};

export default MyPZDrawer;
