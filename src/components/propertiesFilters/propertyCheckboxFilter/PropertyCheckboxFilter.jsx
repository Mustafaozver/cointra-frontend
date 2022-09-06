import React, { useState, useEffect } from 'react';

import styles from './PropertyCheckboxFilter.module.scss';

import { MyPZCheckbox } from '../../../mypzkit';
import PropertyFilterSelect from '../propertyFilterSelect/PropertyFilterSelect';

const PropertyCheckboxFilter = (props) => {
  const {
    options,
    values,
    onChange,
  } = props;

  const finalValues = options.map((p) => p.value).reduce((acc, v) => {
    acc[v] = acc[v] ? acc[v] : false;
    return acc;
  }, values || {});
  const [propertyCheckboxValues, setPropertyCheckboxValues] = useState(finalValues);
  useEffect(() => { setPropertyCheckboxValues(finalValues); }, [values]);

  const handleCheckbox = (value) => (e) => {
    setPropertyCheckboxValues({ ...propertyCheckboxValues, [value]: e.target.checked });
  };

  const onClose = () => {
    onChange(propertyCheckboxValues);
  };

  const getContent = () => options.map((propertyType) => (
    <div className={styles['property-checkbox-filter__content']} key={propertyType.value}>
      <MyPZCheckbox
        label={propertyType.name}
        checked={propertyCheckboxValues[propertyType.value]}
        onChange={handleCheckbox(propertyType.value)}
      />
    </div>
  ));

  const getOpenerContent = () => {
    const selectedTypes = options.filter((p) => propertyCheckboxValues[p.value]);
    return selectedTypes.length <= 0
      ? 'Any'
      : selectedTypes.map((propertyType) => propertyType.name)
        .join(', ');
  };

  return (
    <div className={styles['property-checkbox-filter']}>
      <PropertyFilterSelect
        onClose={onClose}
        openerContent={getOpenerContent()}
        content={getContent()}
      />
    </div>
  );
};

export default PropertyCheckboxFilter;
