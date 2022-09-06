import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import styles from './PropertySorter.module.scss';

import { MyPZPopover, MyPZRadio } from '../../../mypzkit';

// TODO: Add newest and oldest area when available from the backend.
const options = [
  { value: 'default', text: 'Popular' },
  { value: 'low-to-high', text: 'Lowest price' },
  { value: 'high-to-low', text: 'Highest price' },
  { value: 'size-big', text: 'Largest area' },
  { value: 'size-small', text: 'Smallest area' },
];

const PropertySorter = (props) => {
  const {
    onChange,
    value,
  } = props;

  const [selected, setSelected] = useState(value || options[0].value);
  const [text, setText] = useState(options.find((o) => o.value === value).text);

  const handleChange = (v) => {
    setSelected(v);
    setText(options.find((o) => o.value === v).text);
    updateFilters();
  };

  const onCloseHandler = () => {
    updateFilters();
  };

  const updateFilters = () => {
    onChange(selected);
  };

  const opener = () => (
    <div className={styles['property-sorter__opener']}>
      <button type="button">
        <div className={styles['property-sorter__button']}>
          <span className={styles['property-sorter__button-text']}>{text}</span>
          <div className={styles['property-sorter__button-arrow']}><KeyboardArrowDownIcon /></div>
        </div>
      </button>
    </div>
  );

  const renderOptions = () => (options.map((v) => (
    <div className={styles['property-sorter__option']} key={v.value}>
      <MyPZRadio
        key={v.value}
        value={v.value}
        label={v.text}
        onChange={handleChange}
        checked={selected === v.value}
      />
    </div>
  )));

  return (
    <div className={styles['property-sorter']}>
      <div className={styles['property-sorter__label']}>Sort by</div>
      <MyPZPopover opener={opener()} onClose={onCloseHandler}>
        <div className={styles['property-sorter__content']}>
          {renderOptions()}
        </div>
      </MyPZPopover>
    </div>
  );
};

export default PropertySorter;
