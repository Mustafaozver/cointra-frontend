import React from 'react';
import Head from 'next/head';

import HomePage from '../src/pages/home/HomePage';
import FiltersProvider/*, { defaultFilters } */ from '../src/context/filters/FiltersContext';
// TODO: put back suggestion once performance is better
/*
import {
  filtersToParams,
  paramsToFilters,
  queryParamsToParams,
} from '../src/helpers/propertyFilterHelper';
import { getProperties } from '../src/api/properties/propertiesApi';

const pageFilters = { category: 0, businessType: 'rent', propertyTypes: 'VIL', locations: 'dubai' };

export async function getServerSideProps(context) {
  const initialFilters = { ...defaultFilters, ...pageFilters };
  const { query } = context;
  const params = queryParamsToParams(query, initialFilters);
  const filters = paramsToFilters(params);
  // TODO: limit call to 5 instead of slicing after call
  const propertiesResponse = await getProperties(filtersToParams(filters));

  return {
    props: {
      suggestedProperties: propertiesResponse.data.slice(0, 5),
    },
  };
}
*/

export default (props) => {
  const { suggestedProperties } = props;
  return (
    <>
      <Head>
        <title>
          Property Portal UAE - Best Property Finder Alternative | zeekeez.com
        </title>
        <meta name="description" content="Zeekeez.com is the biggest property portal in the UAE with a broad scope of residential and commercial properties available for sale and for rent." />
        <meta name="keywords" content="property portal for UAE, apartments for sale in UAE, villas to rent in UAE, best property finder alternative" />
      </Head>
      <FiltersProvider>
        {/*
        TODO: put back suggested properties once performance is better
        <HomePage suggestedProperties={suggestedProperties} />
        */}
        <HomePage suggestedProperties={[]}/>
      </FiltersProvider>
    </>
  );
};
