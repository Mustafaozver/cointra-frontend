import React from 'react';
import ContentEditable from 'react-contenteditable';

import styles from './MyPZTextArea.module.scss';

const MyPZTextArea = (props) => {
  const {
    onChange,
    onBlur,
    value,
  } = props;

  return (
    <div className={styles['mypz-textarea']}>
      <ContentEditable
        className={styles['mypz-textarea__content']}
        onChange={onChange}
        onBlur={onBlur}
        html={value}
      />
    </div>
  );
};

export default MyPZTextArea;
