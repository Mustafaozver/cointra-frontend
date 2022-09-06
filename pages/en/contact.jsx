import React from 'react';
import Head from 'next/head';

import ContactPage from '../../src/pages/contact/ContactPage';

export default () => (
  <>
    <Head>
      <title>Contact Us | Submit a request | Zeekeez.com	</title>
      <meta name="description" content="Find contact details and office address. Search at buy, sale or rent properties in Dubai, Abu Dhabi and the rest of UAE. Begin your property search today on zeekeez.com." />
    </Head>
    <ContactPage mainTitle="Contact us" subTitle="Fill out the form to contact zeekeez team" />
  </>
);
