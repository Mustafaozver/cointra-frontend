import React from 'react';

import styles from './MyPZRadio.module.scss';

const MyPZRadio = (props) => {
  const {
    label,
    disabled,
    checked,
    name,
    onChange,
    value,
  } = props;

  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className={`${styles['mypz-radio']} ${styles[disabled ? 'mypz-radio__disabled' : '']}`}>
      <input
        onChange={handleChange}
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
      />
      <div className={styles['mypz-radio__label']}>{label}</div>
    </label>
  );
};

export default MyPZRadio;
