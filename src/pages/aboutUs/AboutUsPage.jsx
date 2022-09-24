import React from 'react';

import styles from './AboutUsPage.module.scss';

import { MyPZContainer, MyPZBreadcrumbs } from '../../mypzkit';
import AboutUsTitle from '../../components/statics/aboutUs/aboutUsTitle/AboutUsTitle';
import AboutUsInterest from '../../components/statics/aboutUs/aboutUsInterest/AboutUsInterest';
import AboutUsEthics from '../../components/statics/aboutUs/aboutUsEthics/AboutUsEthics';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeekeez',
  url: 'https://www.zeekeez.com',
  logo: 'https://www.zeekeez.com/images/zeekeez-logo-black.svg',
  description: 'Zeekez.com is the 1st UAE’s Property Portal for people to explore, research and share their interests for the UAE property market.',
  telephone: '+97145781335',
  foundingDate: '2022',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97145781335',
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  sameAs: [
    'https://www.facebook.com/people/Zeekeez/100079499966747/',
    'https://www.instagram.com/zeekeez_official/',
    'https://www.linkedin.com/company/zeekeez',
    'https://www.zeekeez.com/'
  ]
};

const AboutUsPage = (props) => (
  <div className={styles['page-about-us']}>
    <MyPZContainer>
      <NavigationBar
        Paths={[
          { Path: 'Home', Url: '/' },
          { Path: 'About Us', Url: '/en/about-us' },
        ]}
      ></NavigationBar>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <AboutUsTitle {...props} />
      <AboutUsInterest />
      <AboutUsEthics />
    </MyPZContainer>
  </div>
);

export default AboutUsPage;
