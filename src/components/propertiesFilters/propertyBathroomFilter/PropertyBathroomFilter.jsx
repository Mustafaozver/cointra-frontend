import React, { useContext } from 'react';

import styles from './PropertyBathroomFilter.module.scss';

import PropertyCheckboxFilter from '../propertyCheckboxFilter/PropertyCheckboxFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const bathroomOptions = [
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
    name: '+6',
    value: '999',
  },
];

const PropertyBathroomFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, bathrooms: value });
  };

  return (
    <div className={styles['property-bathroom-filter']}>
      <PropertyCheckboxFilter
        values={allFilters.bathrooms}
        onChange={handleChange}
        options={bathroomOptions}
      />
    </div>
  );
};

export default PropertyBathroomFilter;
