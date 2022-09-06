import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'rent', propertyTypes: 'VIL', locations: 'dubai' };

export async function getServerSideProps(context) {
  const initialFilters = { ...defaultFilters, ...pageFilters };
  const { query } = context;
  const params = queryParamsToParams(query, initialFilters);
  const filters = paramsToFilters(params);
  const propertiesResponse = await getProperties(filtersToParams(filters));

  return {
    props: {
      data: {
        properties: propertiesResponse.data,
        pagination: propertiesResponse.stats,
      },
      filters,
      initialFilters,
    },
  };
};

export default (props) => {
  const { data, filters, initialFilters } = props;

  return (
    <>
      <Head>
        <title>Villas for Rent in Dubai | zeekeez.com</title>
        <meta name="description" content="Villas to Rent in Dubai UAE. Rent Residential Properties in UAE : Villas, Houses, Homes, Townhouses…"/>
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Villas for rent in Dubai UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
