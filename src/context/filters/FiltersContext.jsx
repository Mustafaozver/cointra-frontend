import React, { useEffect, useState } from 'react';

export const defaultFilters = {
  order: 'default',
  businessType: 'sale',
  price: { min: 0, max: 'Any' },
  areas: { min: 0, max: 'Any' },
  category: 0,
};

export const FiltersContext = React.createContext(defaultFilters);

const FiltersProvider = (props) => {
  const {
    children,
    overrideFilters,
  } = props;

  const finalFilters = overrideFilters ? { ...defaultFilters, ...overrideFilters } : defaultFilters;
  const [filters, setFilters] = useState(finalFilters);
  const [isFetched, setIsFetched] = useState(true);

  useEffect(() => {
    if (!overrideFilters) {
      return;
    }
    setFilters({ ...defaultFilters, ...overrideFilters });
  }, [overrideFilters]);

  const finalSetFilters = (params) => {
    if (!areFiltersChanging(params)) {
      return;
    }

    setIsFetched(false)
    setFilters({ ...defaultFilters, ...params });
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const isReset = () => {
    return JSON.stringify(defaultFilters) === JSON.stringify(filters);
  };

  const areFiltersChanging = (params) => {
    return JSON.stringify(params) !== JSON.stringify(filters);
  };

  return (
    <FiltersContext.Provider value={[
      filters,
      finalSetFilters,
      isReset,
      resetFilters,
      areFiltersChanging,
      isFetched,
      setIsFetched,
    ]}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;

