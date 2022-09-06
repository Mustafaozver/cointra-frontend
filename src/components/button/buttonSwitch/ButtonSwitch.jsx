import React from 'react';

import styles from './ButtonSwitch.module.scss';

const ButtonSwitch = (props) => {
  const {
    options,
    value,
    onChange,
  } = props;

  const handleSelectedChange = (newValue) => () => {
    onChange(newValue);
  };

  const renderButton = () => options.map((o) => (
    <button
      type="button"
      onClick={handleSelectedChange(o.value)}
      key={o.value}
      className={styles[value === o.value ? 'active' : null]}
    >
      {o.text}
    </button>
  ));

  return (
    <div className={styles['button-switch']}>
      {renderButton()}
    </div>
  );
};

export default ButtonSwitch;
