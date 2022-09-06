import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'rent', propertyTypes: 'APT', locations: 'dubai' };

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
        <title>Apartments to rent in Dubai | 3129 Apartments for rent in Dubai UAE</title>
        <meta name="description" content="Might it be said that you are searching a property for rent in Dubai? Observe an apartments or villas or commercial space of your decision, we offer a wide scope of residential properties. Reach us Now !"/>
        <meta name="keywords" content="apartments to rent in Dubai, apartments for rent in business bay, apartments for rent in Dubai land, house for rent in Dubai, apartment for rent in downtown Dubai, apartments to rent in Dubai marina" />
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Apartments for rent in Dubai UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
