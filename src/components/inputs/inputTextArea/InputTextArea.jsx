import React from 'react';

import styles from './InputTextArea.module.scss';

import { MyPZTextArea } from '../../../mypzkit';

const InputTextArea = (props) => {
  const {
    label,
    onChange,
    error,
    value,
  } = props;

  return (
    <div className={`${styles['input-text-area']} ${styles[error ? 'show-error' : '']}`}>
      <span className={styles['input-text-area__label']}>{label}</span>
      <MyPZTextArea onChange={onChange} value={value} />
      <span className={styles['input-text-area__alert']}>{error ?? ''}</span>
    </div>
  );
};

export default InputTextArea;
