import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'sale', propertyTypes: 'APT', locations: 'dubai' };

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
        <title>Apartments for sale in Dubai | 7004 Apartments for sale in Dubai UAE| Zeekeez</title>
        <meta name="description" content="Luxury apartments for sale in Dubai. Fully furnished handover soon 1,2,3,4 bedroom apartments, penthouse, studio, duplex, villas. Kindly get in touch with us."/>
        <meta name="keywords" content="apartments for sale in Dubai silicon oasis, apartments for sale in Dubai, apartments for sale in Dubai hills estate" />
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Apartments for sale in Dubai UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
