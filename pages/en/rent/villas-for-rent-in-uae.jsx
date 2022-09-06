import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'rent', propertyTypes: 'VIL' };

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
        <title>Villas for rent in UAE | Villa for rent in Dubai |Properties find at Zeekeez</title>
        <meta name="description" content="4266 Villas for rent in UAE on zeekeez.com. Spacious units, fully upgraded, affordable ready to move easy payment options. Now find world class properties here. "/>
        <meta name="keywords" content="villa for rent in Dubai, villa for rent in the palm Jumeirah, villas to rent in Abu Dhabi, villas for rent in UAE, villas for rent in Abu Dhabi, villas for rent in Dubai investment park" />
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Villas for rent in UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
