import React, { useContext } from 'react';

import styles from './PropertyCompletionFilter.module.scss';

import PropertyCheckboxFilter from '../propertyCheckboxFilter/PropertyCheckboxFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const completionOptions = [
  {
    name: 'Off-plan',
    value: 'off',
  },
  {
    name: 'Ready',
    value: 'ready',
  },
];

const PropertyCompletionFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, completionStatus: value });
  };

  return (
    <div className={styles['property-completion-filter']}>
      <PropertyCheckboxFilter
        values={allFilters.completionStatus}
        onChange={handleChange}
        options={completionOptions}
      />
    </div>
  );
};

export default PropertyCompletionFilter;
