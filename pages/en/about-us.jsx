import React from 'react';
import Head from 'next/head';

import AboutUsPage from '../../src/pages/aboutUs/AboutUsPage';

export default () => (
  <>
    <Head>
      <title>About Us | Biggest property portal | Zeekeez.com	</title>
      <meta name="description" content="Zeekeez.com is largest property portal of UAE. We sell and rent apartments, villas, studio, townhouse, commercial space etc." />
    </Head>
    <AboutUsPage mainTitle="About us" subTitle="Property Portal - Best Bayut Alternative | zeekeez.com" />
  </>
);
