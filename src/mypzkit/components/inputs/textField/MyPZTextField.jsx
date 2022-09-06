import React from 'react';

import styles from './MyPZTextField.module.scss';

const MyPZTextField = (props) => {
  const {
    placeholder,
    error,
    label,
    onChange,
    value,
    onFocus,
    onBlur,
  } = props;
  return (
    <div className={`${styles['mypz-text-field']} ${styles[error ? 'show-error' : '']}`}>
      <span className={styles['mypz-text-field__label']}>{label}</span>
      <input
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      <span className={styles['mypz-text-field__alert']}>{error ?? ''}</span>
    </div>
  );
};

export default MyPZTextField;
