import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = { category: 0, businessType: 'sale', propertyTypes: 'APT' };

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
  const paginationLink = '/en/sale/apartments-for-sale-in-uae?page=';
  const NextLinksRenderer = () => {
    const paginationLinknext = paginationLink + (data.pagination.page + 1);
    if (data.pagination.page < data.pagination['page-count']) return (
      <link rel="next" href={paginationLinknext} />
    );
    else return null;
  };
  const PrevLinksRenderer = () => {
    const paginationLinkprev = paginationLink + (data.pagination.page - 1);
    if(data.pagination.page > 1) return (
      <link rel="prev" href={paginationLinkprev} />
    );
  };

  return (
    <>
      <Head>
        <title>Apartments Flats for Sale in UAE | zeekeez.com</title>
        <meta name="description" content="Apartments for Sale in UAE. Buy Sell Residential Properties in UAE : Flats, Duplexes, Lofts, Penthouses, Studios, 1 Bedroom, Full Floors..."/>
        {PrevLinksRenderer()}
        {NextLinksRenderer()}
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={'Apartments for sale in UAE'}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
