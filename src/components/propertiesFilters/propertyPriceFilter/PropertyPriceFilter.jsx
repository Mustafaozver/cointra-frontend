import React, { useContext } from 'react';

import './PropertyPriceFilter.module.scss';

import PropertyRangeFilter from '../propertyRangeFilter/PropertyRangeFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';
import config from '../../../config/Config';

const PropertyPriceFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, price: value });
  };

  return (
    <>
      <PropertyRangeFilter
        rangeConfig={config.propertyFilters.priceConfigPerBusinessType[allFilters.businessType]}
        values={allFilters.price}
        onChange={handleChange}
      />
    </>
  );
};

export default PropertyPriceFilter;
