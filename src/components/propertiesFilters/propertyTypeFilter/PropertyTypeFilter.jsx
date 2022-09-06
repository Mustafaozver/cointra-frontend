import React, { useContext, useState, useEffect } from 'react';

import styles from './PropertyTypeFilter.module.scss';

import PropertyCheckboxMultiFilter from '../propertyCheckboxMultiFilter/PropertyCheckboxMultiFilter';
import propertyTypesConfig from '../../../data/config/propertyTypesConfig';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const PropertyTypeFilter = () => {
  const [typeParentMenu, setTypeParentMenu] = useState(0);
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  useEffect(() => {
    setTypeParentMenu(allFilters.category);
  }, [allFilters.category]);

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, propertyTypes: value, category: typeParentMenu });
  };

  const finalOptions = propertyTypesConfig.reduce((acc, cur) => {
    const {
      residential,
      commercial,
      code,
      value,
    } = cur;

    if (residential) {
      acc[0].values.push({ name: value, value: code });
    }

    if (commercial) {
      acc[1].values.push({ name: value, value: code });
    }

    return acc;
  }, [
    { type: 'Residential', values: [] },
    { type: 'Commercial', values: [] },
  ]);

  return (
    <div className={styles['property-type-filter']}>
      <PropertyCheckboxMultiFilter
        values={allFilters.propertyTypes}
        onChange={handleChange}
        options={finalOptions}
        menuActive={typeParentMenu}
        onChangeMenuActive={setTypeParentMenu}
      />
    </div>
  );
};

export default PropertyTypeFilter;
