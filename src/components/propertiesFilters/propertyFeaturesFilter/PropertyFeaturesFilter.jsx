import React, { useContext } from 'react';

import styles from './PropertyFeaturesFilter.module.scss';

import { MyPZAutocomplete } from '../../../mypzkit';
import featuresConfig from '../../../data/config/featuresConfig';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const PropertyFeaturesFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const optionToAutocompleteItem = (option) => (
    {
      ...option,
      label: option ? option.v : '',
      value: option ? option.c : '',
    }
  );

  const handleChange = (value) => {
    setAllFilters({ ...allFilters, features: value });
  };

  let finalValues = allFilters.features;
  if (finalValues && featuresConfig) {
    finalValues = finalValues.map((v) => {
      if (v.value && v.label) {
        return v;
      }
      return featuresConfig.find((o) => o.c === v.value);
    });
    finalValues = finalValues.map(optionToAutocompleteItem);
  }

  return (
    <div className={styles['property-features-filter']}>
      <MyPZAutocomplete
        options={featuresConfig.map(optionToAutocompleteItem)}
        onChange={handleChange}
        values={finalValues}
        renderOption={(option) => (
          <div>{option.label}</div>
        )}
        placeholder="Pool, Garden, Beach..."
      />
    </div>
  );
};

export default PropertyFeaturesFilter;
