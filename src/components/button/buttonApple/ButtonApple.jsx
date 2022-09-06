import React from 'react';

import AppleIconMUI from '@material-ui/icons/Apple';

import styles from './ButtonApple.module.scss';

const ButtonApple = (props) => {
  const {
    onClick,
    disabled,
  } = props;

  const clickOnButton = () => {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles['apple-login-button']} ${disabled ? styles['apple-login-button__disabled'] : ''}`}
      onClick={clickOnButton}
      onKeyPress={clickOnButton}
      role="button"
      tabIndex="0"
    >
      <div className={styles['apple-login-button__container']}>
        <div className={styles['apple-login-button__icon']}>
          <AppleIconMUI />
        </div>
        <div className={styles['apple-login-button__text']}>
          <span>Sign in with Apple</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonApple;
