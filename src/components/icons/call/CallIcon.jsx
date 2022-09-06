import React from 'react';

import styles from './CallIcon.module.scss';

const defaultProps = {
  width: 13,
  height: 13,
};

const CallIcon = (props) => {
  const { width, height } = { ...defaultProps, ...props };

  return (
    <img
      src="/icons/call.png"
      alt="call icon"
      width={width}
      height={height}
      className={styles['icon-call']}
    />
  );
};

export default CallIcon;
