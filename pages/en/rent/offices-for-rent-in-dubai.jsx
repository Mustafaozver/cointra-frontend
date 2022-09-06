import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 1, businessType: 'rent', propertyTypes: 'OFF', locations: 'dubai' };

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
        <title>Affordable Office on rent in Dubai, UAE |Office space for rent in Dubai-Zeekeez</title>
        <meta name="description" content="3129 Offices for rent in Dubai UAE, Completely outfitted adjusted workplaces are accessible for rent in Dubai. Book your office for rent in Dubai outfitted with all cutting edge office conveniences."/>
        <meta name="keywords" content="Offices for rent in Dubai UAE, office space for rent in Dubai, office on rent in Dubai" />
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Offices for rent in Dubai UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
