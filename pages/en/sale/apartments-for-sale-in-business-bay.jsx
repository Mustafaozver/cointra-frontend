import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'sale', propertyTypes: 'APT', locations: 'dubai-business-bay' };

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
        <title>Apartments Flats for Sale in Business Bay | zeekeez.com</title>
        <meta name="description" content="Apartments for Sale in Business Bay Dubai UAE. Buy Sell Residential Properties in UAE : 1 Bedroom, Flats, Duplexes, Lofts, Penthouses, Studios, Full Floors…"/>
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Apartments for sale in Business Bay Dubai UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
