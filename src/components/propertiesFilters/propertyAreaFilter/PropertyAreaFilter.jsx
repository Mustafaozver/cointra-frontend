import React, { useContext } from 'react';

import './PropertyAreaFilter.module.scss';

import PropertyRangeFilter from '../propertyRangeFilter/PropertyRangeFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';
import config from '../../../config/Config';

const PropertyAreaFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, areas: value });
  };

  return (
    <>
      <PropertyRangeFilter
        rangeConfig={config.propertyFilters.areaConfig}
        values={allFilters.areas}
        onChange={handleChange}
      />
    </>
  );
};

export default PropertyAreaFilter;
