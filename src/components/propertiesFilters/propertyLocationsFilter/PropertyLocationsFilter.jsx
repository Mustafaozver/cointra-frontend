import React, { useContext } from 'react';

import styles from './PropertyLocationsFilter.module.scss';

import { MyPZAutocomplete } from '../../../mypzkit';
import PinIcon from '../../icons/pin/PinIcon';
import { locationsSearch } from '../../../data/config/locations';
import { FiltersContext } from '../../../context/filters/FiltersContext';

const PropertyLocationsFilter = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);

  const optionToAutocompleteItem = (option) => {
    const key = option ? `${option.n}__${option.s}` : '';
    return {
      ...option,
      label: option ? option.n : '',
      value: option ? option.s : '',
      key,
    };
  };

  let finalValues = [];
  if (allFilters.locations && locationsSearch) {
    finalValues = allFilters.locations.map((v) => {
      if (v.value && v.label && v.key) {
        return v;
      }
      return locationsSearch.find((o) => o.s === v.value);
    });
    finalValues = finalValues.map(optionToAutocompleteItem);
  }

  const onChange = (value) => {
    setAllFilters({ ...allFilters, locations: value });
  };

  return (
    <div className={styles['property-locations-filter']}>
      <MyPZAutocomplete
        options={locationsSearch.map(optionToAutocompleteItem)}
        placeholder="City, community or building name"
        onChange={onChange}
        values={finalValues}
        renderOption={(option) => (
          <div key={option.key}>{option.label}</div>
        )}
        prefixInput={(
          <div className={styles['property-locations-filter__icon']}>
            <PinIcon />
          </div>
        )}
      />
    </div>
  );
};

export default PropertyLocationsFilter;
