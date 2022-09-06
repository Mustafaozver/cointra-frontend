import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import styles from './MyPZCheckbox.module.scss';

const MyPZCheckbox = (props) => {
  const {
    checked,
    label,
    onChange,
    disabled,
    name,
  } = props;

  const renderBox = () => {
    if (checked) {
      return (
        <div className={`${styles['mypz-checkbox__box']} ${styles['mypz-checkbox__box-checked']}`}>
          <CheckBoxIcon fontSize="inherit" />
        </div>
      );
    }
    return (
      <div className={styles['mypz-checkbox__box']}>
        <CheckBoxOutlineBlankIcon fontSize="inherit" />
      </div>
    );
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e, !checked);
    }
  };

  return (
    <label className={`${styles['mypz-checkbox']} ${styles[disabled ? 'mypz-checkbox__disabled' : '']}`}>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        hidden
        name={name}
      />
      {renderBox()}
      <div className={styles['mypz-checkbox__label']}>{label}</div>
    </label>
  );
};

export default MyPZCheckbox;
