import React, { useState, useEffect } from 'react';

import styles from './PropertyRangeFilter.module.scss';

import PropertyFilterSelect from '../propertyFilterSelect/PropertyFilterSelect';

const PropertyRangeFilter = (props) => {
  const {
    rangeConfig,
    values,
    onChange,
  } = props;

  const [propertyRangeValues, setPropertyRangeValues] = useState(values || { min: 0, max: 'Any' });
  useEffect(() => { setPropertyRangeValues(values); }, [values]);

  const minValues = [];
  const maxValues = [];
  rangeConfig.forEach((c) => {
    const max = parseInt(propertyRangeValues.max, 10)
      ? Math.min(propertyRangeValues.max, c.max)
      : c.max;
    for (let i = c.min; i < max; i += c.step) {
      minValues.push({ name: new Intl.NumberFormat().format(i), value: i.toString() });
    }

    const min = parseInt(propertyRangeValues.min, 10)
      ? Math.max(propertyRangeValues.min, c.min)
      : c.min;
    for (let i = min; i < c.max; i += c.step) {
      maxValues.push({ name: new Intl.NumberFormat().format(i), value: i.toString() });
    }
  });
  minValues.unshift({ name: '0', value: 0 });
  maxValues.unshift({ name: 'Any', value: 'Any' });

  const onClose = () => {
    onChange(propertyRangeValues);
  };

  const handleRangeChange = (type, value) => () => {
    const newRange = { ...propertyRangeValues, [type]: value };
    const min = parseInt(newRange.min, 10);
    const max = parseInt(newRange.max, 10);
    if (min && max && min > max && max !== 'Any') {
      if (type === 'min') {
        newRange.max = newRange.min;
      } else {
        newRange.min = newRange.max;
      }
    }
    setPropertyRangeValues(newRange);
  };

  const handleRangeInputChange = (type) => (e) => {
    const newRange = parseInt(e.target.value, 10) || 0;
    handleRangeChange(type, newRange.toString())();
  };

  const getRangeContent = (title, type, rangeValues) => (
    <div className={styles['property-range-filter-content-range']}>
      <div className={styles['property-range-filter-content-range-label']}>{title}</div>
      <input value={propertyRangeValues[type]} className={styles['property-range-filter-content-range-input']} onChange={handleRangeInputChange(type)} />
      <div className={styles['property-range-filter-content-range-button-group']}>
        {rangeValues.map((m) => (
          <button
            type="button"
            onClick={handleRangeChange(type, m.value)}
            className={`${styles['property-range-filter-content-range-button']} ${styles[m.value.toString() === propertyRangeValues[type].toString() ? 'active' : '']}`}
            key={m.value}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );

  const getContent = () => (
    <div className={styles['property-range-filter-content']}>
      {getRangeContent('Min', 'min', minValues)}
      {getRangeContent('Max', 'max', maxValues)}
    </div>
  );

  const getOpenerContent = () => (
    <div className={styles['property-range-filter-opener-content']}>
      <span>{new Intl.NumberFormat().format(propertyRangeValues.min)}</span>
      <span className={styles['property-range-filter-opener-content-to']}>to</span>
      <span>
        {
          parseInt(propertyRangeValues.max, 10)
            ? new Intl.NumberFormat().format(propertyRangeValues.max)
            : propertyRangeValues.max
        }
      </span>
    </div>
  );

  return (
    <div className={styles['property-range-filter']}>
      <PropertyFilterSelect
        onClose={onClose}
        openerContent={getOpenerContent()}
        content={getContent()}
      />
    </div>
  );
};

export default PropertyRangeFilter;
