/* eslint-disable */
// node scripts/generateSEOLinks.js > components/seo/routes/SeoRoutes.jsx

const seoData = require('../data/seo/seoData');

const extractDataLink = (el) => el.data.reduce((acc, cur) => (
  acc.flatMap((x) => (cur.map((y) => [...x, y])))), [[]]);

console.log(`import React from 'react';

import { Route } from 'react-router-dom';

import PropertiesListPage from '../../../pages/properties/propertiesListPage/PropertiesListPage';

const SeoRoutes = () => (
  <>`);
seoData.default.map((sd) => extractDataLink(sd).map((el) => {
  const url = `/${el[0].url}-for-${el[1].url}-in-${el[2].url}`;
  const params = {
    ...el[0].value,
    ...el[1].value,
    ...el[2].value,
  };

  console.log(`    <Route exact path="${url}">
      <PropertiesListPage initialFilters={JSON.parse('${JSON.stringify(params)}')} />
    </Route>`);
}));

console.log(`  </>
);

export default SeoRoutes;`);
