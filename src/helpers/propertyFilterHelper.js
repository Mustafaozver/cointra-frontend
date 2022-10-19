export const filtersToParams = (filters) => {
  const params = {};

  if (filters.businessType) {
    params.businessType = filters.businessType;
  }

  if (filters.order) {
    params.order = filters.order;
  }

  if (filters.page) {
    params.page = filters.page;
  }

  if (filters.locations && filters.locations.length > 0) {
    params.locations = filters.locations
      .map((l) => l.value)
      .join(',');
  }

  if (filters.features && filters.features.length > 0) {
    params.features = filters.features
      .map((l) => l.value)
      .join(',');
  }

  if (filters.propertyTypes) {
    const propertyTypes = Object.keys(filters.propertyTypes)
      .map((k) => ({ k, v: filters.propertyTypes[k] }))
      .filter((p) => p.v)
      .map((p) => p.k)
      .join(',');
    if (propertyTypes.length > 0) {
      params.propertyTypes = propertyTypes;
    }
  }

  params.category = 0;
  if (filters.category) {
    if (filters.category > 0 || filters.category === 'commercial') {
      params.category = 1;
    }
  }

  if (filters.bedrooms) {
    const bedrooms = Object.keys(filters.bedrooms)
      .map((k) => ({ k, v: filters.bedrooms[k] }))
      .filter((p) => p.v)
      .map((p) => p.k)
      .join(',');
    if (bedrooms.length > 0) {
      params.bedrooms = bedrooms;
    }
  }

  if (filters.bathrooms) {
    const bathrooms = Object.keys(filters.bathrooms)
      .map((k) => ({ k, v: filters.bathrooms[k] }))
      .filter((p) => p.v)
      .map((p) => p.k)
      .join(',');
    if (bathrooms.length > 0) {
      params.bathrooms = bathrooms;
    }
  }

  if (filters.completionStatus) {
    const completionStatus = Object.keys(filters.completionStatus)
      .map((k) => ({ k, v: filters.completionStatus[k] }))
      .filter((p) => p.v)
      .map((p) => p.k)
      .join(',');
    if (completionStatus.length > 0) {
      params.completionStatus = completionStatus;
    }
  }

  if (filters.furnishes) {
    const furnishes = Object.keys(filters.furnishes)
      .map((k) => ({ k, v: filters.furnishes[k] }))
      .filter((p) => p.v)
      .map((p) => p.k)
      .join(',');
    if (furnishes.length > 0) {
      params.furnishes = furnishes;
    }
  }

  if (filters.price) {
    if (filters.price.min && parseInt(filters.price.min, 10)) {
      params.priceMin = filters.price.min;
    }
    if (filters.price.max && parseInt(filters.price.max, 10)) {
      params.priceMax = filters.price.max;
    }
  }

  if (filters.areas) {
    if (filters.areas.min && parseInt(filters.areas.min, 10)) {
      params.sizeMin = filters.areas.min;
    }
    if (filters.areas.max && parseInt(filters.areas.max, 10)) {
      params.sizeMax = filters.areas.max;
    }
  }

  if (filters.s) {
    params.s = filters.s;
  } else {
    params.s = (Math.floor((new Date()).getTime() / (1000 * 60 * 60 * 24 * 30)) * 168297) % 1000; // 
  }

  return params;
};

export const paramsToFilters = (params) => {
  const filters = {};

  filters.order = 'default';
  if (params.order) {
    filters.order = params.order;
  }

  if (params.businessType) {
    filters.businessType = params.businessType;
  }

  if (params.page) {
    filters.page = params.page;
  }

  if (params.locations && params.locations.length > 0) {
    filters.locations = params.locations
      .split(',')
      .map((l) => ({ value: l }));
  }

  if (params.propertyTypes) {
    filters.propertyTypes = params.propertyTypes
      .split(',')
      .reduce((acc, pt) => {
        acc[pt] = true;
        return acc;
      }, {});
  }

  if (params.bedrooms) {
    filters.bedrooms = params.bedrooms
      .split(',')
      .reduce((acc, l) => {
        acc[l] = true;
        return acc;
      }, {});
  }

  if (params.bathrooms) {
    filters.bathrooms = params.bathrooms
      .split(',')
      .reduce((acc, l) => {
        acc[l] = true;
        return acc;
      }, {});
  }

  if (params.features) {
    filters.features = params.features
      .split(',')
      .map((f) => ({ value: f }));
  }

  if (params.completionStatus) {
    filters.completionStatus = params.completionStatus
      .split(',')
      .reduce((acc, cs) => {
        acc[cs] = true;
        return acc;
      }, {});
  }

  if (params.furnishes) {
    filters.furnishes = params.furnishes
      .split(',')
      .reduce((acc, l) => {
        acc[l] = true;
        return acc;
      }, {});
  }

  filters.price = { min: 0, max: 'Any' };
  if (params.priceMin) {
    filters.price.min = params.priceMin;
  }
  if (params.priceMax) {
    filters.price.max = params.priceMax;
  }

  filters.areas = { min: 0, max: 'Any' };
  if (params.sizeMin) {
    filters.areas.min = params.sizeMin;
  }
  if (params.sizeMax) {
    filters.areas.max = params.sizeMax;
  }

  filters.category = 0;
  if (params.category) {
    filters.category = params.category;
  }

  if (params.s) {
    filters.s = params.s;
  }

  return filters;
};

export const queryParamsToParams = (queryParams, defaultParams) => {
  let priceMin = queryParams.priceMin;
  if (typeof priceMin === 'undefined') {
    priceMin = defaultParams.price.min;
  }

  let priceMax = queryParams.priceMax;
  if (typeof priceMax === 'undefined') {
    priceMax = defaultParams.price.max;
  }

  let bedrooms = queryParams.bedrooms;
  if (typeof bedrooms === 'undefined') {
    bedrooms = defaultParams.bedrooms;
  }

  let bathrooms = queryParams.bathrooms;
  if (typeof bathrooms === 'undefined') {
    bathrooms = defaultParams.bathrooms;
  }

  return {
    category: queryParams.category || defaultParams.category,
    businessType: queryParams.businessType || defaultParams.businessType,
    order: queryParams.order,
    page: queryParams.page,
    locations: queryParams.locations || defaultParams.locations,
    propertyTypes: queryParams.propertyTypes || defaultParams.propertyTypes,
    bedrooms,
    bathrooms,
    priceMin,
    priceMax,
    sizeMin: queryParams.sizeMin,
    sizeMax: queryParams.sizeMax,
    features: queryParams.features,
    completionStatus: queryParams.completionStatus,
    furnishes: queryParams.furnishes,
    s: queryParams.s,
  };
};

export const getDiffParams = (params1, params2) => {
  let res = {};

  const allKeys = Object.keys(params2);
  for (let i in allKeys) {
    const key = allKeys[i];
    if (JSON.stringify(params1[key]) !== JSON.stringify(params2[key])) {
      res[key] = params2[key] ? params2[key] : params1[key];
    }
  }
  return res;
};

export const stringifyParams = (params) => {
  if (Number.isInteger(params.priceMin)) {
    params.priceMin = params.priceMin.toString();
  }

  if (Number.isInteger(params.priceMax)) {
    params.priceMax = params.priceMax.toString();
  }

  if (Number.isInteger(params.sizeMin)) {
    params.sizeMin = params.sizeMin.toString();
  }

  if (Number.isInteger(params.sizeMax)) {
    params.sizeMax = params.sizeMax.toString();
  }

  return params;
};
