import React from 'react';
import { Modal as MaterialModal } from '@material-ui/core';

import styles from './MyPZModal.module.scss';

const MyPZModal = (props) => {
  const {
    children,
    isOpen,
    onClose,
  } = props;

  return (
    <div className={styles['mypz-modal']}>
      <MaterialModal
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles['mypz-modal__modal']}>
          <div className={styles['mypz-modal__container']}>
            {children}
          </div>
        </div>
      </MaterialModal>
    </div>
  );
};

export default MyPZModal;
