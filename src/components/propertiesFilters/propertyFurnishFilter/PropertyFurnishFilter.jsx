import React, { useContext } from 'react';

import styles from './PropertyFurnishFilter.module.scss';

import PropertyCheckboxFilter from '../propertyCheckboxFilter/PropertyCheckboxFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const furnishOptions = [
  {
    name: 'Furnished',
    value: 'full',
  },
  {
    name: 'Partly Furnished',
    value: 'partial',
  },
  {
    name: 'Unfurnished',
    value: 'not',
  },
];

const PropertyFurnishFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, furnishes: value });
  };

  return (
    <div className={styles['property-furnish-filter']}>
      <PropertyCheckboxFilter
        values={allFilters.furnishes}
        onChange={handleChange}
        options={furnishOptions}
      />
    </div>
  );
};

export default PropertyFurnishFilter;
