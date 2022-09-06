import React, { useState, useEffect } from 'react';

import styles from './PropertyCheckboxMultiFilter.module.scss';

import { MyPZCheckbox } from '../../../mypzkit';
import PropertyFilterSelect from '../propertyFilterSelect/PropertyFilterSelect';

const PropertyCheckboxMultiFilter = (props) => {
  const {
    values,
    onChange,
    options,
    menuActive,
    onChangeMenuActive,
  } = props;

  const finalValues = options[menuActive].values.map((p) => p.value).reduce((acc, v) => {
    acc[v] = acc[v] ? acc[v] : false;
    return acc;
  }, values || {});

  const [propertyCheckboxValues, setPropertyCheckboxValues] = useState(finalValues);

  useEffect(() => { setPropertyCheckboxValues(finalValues); }, [values]);

  const renderHeaderSelection = () => options.map((o, i) => (
    <span
      onClick={handleHeaderClick(i)}
      key={o.type}
      onKeyPress={handleHeaderClick(i)}
      role="button"
      tabIndex="0"
      className={styles[menuActive === i ? 'active' : '']}
    >
      {o.type}
    </span>
  ));

  const handleHeaderClick = (index) => () => {
    onChangeMenuActive(index);
    setPropertyCheckboxValues([]);
  };

  const handleCheckbox = (value) => (e) => {
    setPropertyCheckboxValues({ ...propertyCheckboxValues, [value]: e.target.checked });
  };

  const onClose = () => {
    onChange(propertyCheckboxValues);
  };

  const getContent = () => (
    <div className={styles['property-multi-checkbox__content']}>
      <div className={styles['property-multi-checkbox__content-header']}>
        {renderHeaderSelection()}
      </div>
      <div className={styles['property-multi-checkbox__content-selection']}>
        {getChildCOntent()}
      </div>
    </div>
  );

  const getChildCOntent = () => options[menuActive].values.map((propertyType) => (
    <div className={styles['property-multi-checkbox__content-selection-checkbox']} key={propertyType.value}>
      <MyPZCheckbox
        label={propertyType.name}
        checked={!!propertyCheckboxValues[propertyType.value]}
        onChange={handleCheckbox(propertyType.value)}
      />
    </div>
  ));

  const getOpenerContent = () => {
    const selectedTypes = options[menuActive].values.filter((p) => propertyCheckboxValues[p.value]);
    return selectedTypes.length <= 0
      ? 'Any'
      : selectedTypes.map((propertyType) => propertyType.name)
        .join(', ');
  };

  return (
    <div className={styles['property-multi-checkbox']}>
      <PropertyFilterSelect
        onClose={onClose}
        openerContent={getOpenerContent()}
        content={getContent()}
      />
    </div>
  );
};

export default PropertyCheckboxMultiFilter;
