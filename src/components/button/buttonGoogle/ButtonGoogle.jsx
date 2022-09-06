import React from 'react';

import styles from './ButtonGoogle.module.scss';

const ButtonGoogle = (props) => {
  const { onClick } = props;

  return (
    <div className={styles['g-sign-in-button']} onClick={onClick} onKeyPress={onClick} role="button" tabIndex="0">
      <div className={styles['g-sign-in-button__content-wrapper']}>
        <div className={styles['g-sign-in-button__logo-wrapper']}>
          <img src="/icons/google.png" alt="google-img" />
        </div>
        <span className={styles['g-sign-in-button__text-container']}>
          <span>Sign in with Google</span>
        </span>
      </div>
    </div>
  );
};

export default ButtonGoogle;
