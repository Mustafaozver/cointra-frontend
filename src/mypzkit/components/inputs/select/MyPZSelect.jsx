import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './MyPZSelect.module.scss';

const MyPZSelect = (props) => {
  const {
    options,
    value,
    onChange,
    label,
  } = props;

  const renderOptions = () => options.map((o) => (
    <MenuItem value={o.value} key={o.value}>{o.text}</MenuItem>
  ));

  return (
    <div className={styles['mypz-select']}>
      <span className={styles['mypz-select__label']}>{label}</span>
      <Select value={value} onChange={onChange} className={styles['mypz-select__main']}>
        {renderOptions()}
      </Select>
    </div>
  );
};

export default MyPZSelect;
