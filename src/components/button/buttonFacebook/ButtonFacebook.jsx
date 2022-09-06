import React from 'react';

import styles from './ButtonFacebook.module.scss';

const ButtonFacebook = (props) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} type="button" className={`${styles['facebook-login-button']}`}>
      Sign in with Facebook
    </button>
  );
};

export default ButtonFacebook;
