import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import styles from './ButtonEmail.module.scss';

import { MyPZButton } from '../../../mypzkit';

const ButtonEmail = (props) => {
  const { children, onClick } = props;

  return (
    <MyPZButton onClick={onClick}>
      <div className={styles['mail-button']}>
        <MailOutlineIcon className={styles['icon-mail-button']} />&nbsp;
        <span className={styles['text-mail-button']}>{children}</span>
      </div>
    </MyPZButton>
  );
};

export default ButtonEmail;
