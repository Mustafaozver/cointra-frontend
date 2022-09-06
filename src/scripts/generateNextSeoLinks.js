const fs = require('fs');
const { parse } = require('csv-parse');

const linksList = {};

const getFileName = (link) => {
  const splittedLink = link.split('/');

  return [splittedLink[2], splittedLink[3]];
};

const getFilters = (filters) => {
  const {
    businessType,
    propertyType,
    category,
    location,
    bedrooms,
    minPrice,
    maxPrice,
  } = filters;

  let res = {
    category: 1,
  };

  if (businessType) {
    res = { ...res, businessType };
  }

  if (propertyType) {
    res = { ...res, propertyTypes: propertyType };
  }

  if (category) {
    res = { ...res, category: parseInt(category, 10) };
  }

  if (location) {
    res = { ...res, locations: location };
  }

  if (bedrooms) {
    res = { ...res, bedrooms: bedrooms.toString() };
  }

  if (minPrice && maxPrice) {
    res = { ...res, price: { min: parseFloat(minPrice), max: parseFloat(maxPrice) } };
  }

  return JSON.stringify(res);
};

const getContent = (meta, title, h1, filters, nbProperties, keywords) => (
  `import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';

const pageFilters = ${filters};

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
        <title>${title}</title>
        <meta name="description" content="${meta}"/>${keywords ? `
        <meta name="keywords" content="${keywords}" />` : ''}
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle={"${h1}"}
          data={data}
        />
      </FiltersProvider>
    </>
  );
};
`
);

const createModule = (data) => {
  const [
    link,,,
    businessType,
    propertyType,
    category,
    location,
    bedrooms,
    minPrice,
    maxPrice,
    title,
    nbProperties,
    h1,
    meta,,
    keywords,
  ] = data;

  const [folder, filename] = getFileName(link);
  const filters = getFilters({
    businessType,
    propertyType,
    category,
    location,
    bedrooms,
    minPrice,
    maxPrice,
  });
  const content = getContent(meta, title, h1, filters, nbProperties, keywords);

  fs.writeFile(`../../pages/en/${folder}/${filename}.jsx`, content, () => console.log(`${filename}.jsx`));
};

const getLinksLabel = (data) => data.map((d) => (
  `   <div className={styles['seo-links_item_link']} key="${d.link}">
    <MyPZLink
      to="${d.link}"
      linkType="simple"
    >
            ${d.linkLabel}
    </MyPZLink>
  </div>
`
));

const getTitleLinks = () => Object.keys(linksList).map((k) => (
  `<div className={styles['seo-links_item']} key="${k}">
      <h3 className={styles['seo-links_item_title']}>${k}</h3>
      <div className={styles['seo-links_item_links']}>
        ${getLinksLabel(linksList[k]).join('')}
      </div>
  </div>
`
));

const getContentSeoLinks = () => (
  `import React from 'react';
import { MyPZLink } from '../../../mypzkit';

import styles from './SeoLinks.module.scss';

const SeoLinks = () => (
  <div className={styles['seo-links']}>
    ${getTitleLinks().join('')}
  </div>
);

export default SeoLinks;
`
);

const createSeoLinks = (data) => {
  const [link, linkSection, linkLabel] = data;

  if (linksList[linkSection]) {
    linksList[linkSection].push({ link, linkLabel });
    return;
  }

  linksList[linkSection] = [{ link, linkLabel }];
};

fs.createReadStream('SEO-zeekeez-V1.csv')
  .pipe(parse({ delimiter: ',' }))
  .on('data', (csvrow) => {
    if (!csvrow[0] || csvrow[0] === 'path') {
      return;
    }

    createModule(csvrow);
    createSeoLinks(csvrow);
  })
  .on('end', () => {
    // eslint-disable-next-line no-restricted-syntax
    const content = getContentSeoLinks();

    fs.writeFile('../components/seo/links/SeoLinks.jsx', content, () => console.log('SeoLinks.jsx'));
  });
