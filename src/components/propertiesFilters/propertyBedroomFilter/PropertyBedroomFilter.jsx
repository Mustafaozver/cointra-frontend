import React, { useContext } from 'react';

import styles from './PropertyBedroomFilter.module.scss';

import PropertyCheckboxFilter from '../propertyCheckboxFilter/PropertyCheckboxFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const bedroomOptions = [
  {
    name: 'Studio',
    value: '0',
  },
  {
    name: '1',
    value: '1',
  },
  {
    name: '2',
    value: '2',
  },
  {
    name: '3',
    value: '3',
  },
  {
    name: '4',
    value: '4',
  },
  {
    name: '5',
    value: '5',
  },
  {
    name: '6',
    value: '6',
  },
  {
    name: '7',
    value: '7',
  },
  {
    name: '8+',
    value: '999',
  },
];

const PropertyBedroomFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, bedrooms: value });
  };

  return (
    <div className={styles['property-bedroom-filter']}>
      <PropertyCheckboxFilter
        values={allFilters.bedrooms}
        onChange={handleChange}
        options={bedroomOptions}
      />
    </div>
  );
};

export default PropertyBedroomFilter;
