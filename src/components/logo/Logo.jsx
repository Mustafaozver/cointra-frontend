import React from 'react';

import styles from './Logo.module.scss';

const Logo = (props) => {
  const { logoStyle } = props;
  const finalStyle = logoStyle || 'black';
  const imageSrc = `/images/zeekeez-logo-${finalStyle}.svg`;

  return (
    <div className={styles.logo}>
      <img src={imageSrc} alt="zeekeez logo" />
    </div>
  );
};

export default Logo;
