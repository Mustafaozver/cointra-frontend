import React from 'react';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import styles from './ButtonCall.module.scss';

import { MyPZButton } from '../../../mypzkit';

const ButtonCall = (props) => {
  const {
    children,
    active,
    value,
    loading,
    onClick,
  } = props;

  const content = () => {
    if (loading) {
      return (<span className={`${styles['text-call-button']} ${styles.active}`}>Loading...</span>);
    }

    if (active) {
      return (<span className={`${styles['text-call-button']} ${styles.active}`}>{value}</span>);
    }

    return (<span className={styles['text-call-button']}>{children}</span>);
  };

  return (
    <MyPZButton onClick={onClick}>
      <div className={styles['call-button']}>
        <PhoneInTalkIcon className={styles['icon-call-button']} />&nbsp;
        {content()}
      </div>
    </MyPZButton>
  );
};

export default ButtonCall;
