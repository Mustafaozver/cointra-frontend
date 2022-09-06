import React from 'react';

import styles from './InputCheckboxGroup.module.scss';

import { MyPZCheckbox } from '../../../mypzkit';

const InputCheckboxGroup = (props) => {
  const {
    label,
    data,
    onChange,
    values,
  } = props;

  const renderCheckbox = () => data.map((d) => (
    <MyPZCheckbox
      key={d.name}
      label={renderCheckboxText(d.label)}
      name={d.name}
      onChange={onChange}
      checked={values[d.name]}
    />
  ));

  const renderCheckboxText = (text) => <span className={styles['form-luxury-help__input-checkbox-label']}>{text}</span>;

  return (
    <div className={styles['input-checkbox-group']}>
      <div className={styles['input-checkbox-group__title']}>
        {label}
      </div>
      <div className={styles['input-checkbox-group__items']}>
        {renderCheckbox()}
        <div />
      </div>
    </div>
  );
};

export default InputCheckboxGroup;
