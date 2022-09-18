import React from 'react';

import styles from './AboutUsPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import AboutUsTitle from '../../components/statics/aboutUs/aboutUsTitle/AboutUsTitle';
import AboutUsInterest from '../../components/statics/aboutUs/aboutUsInterest/AboutUsInterest';
import AboutUsEthics from '../../components/statics/aboutUs/aboutUsEthics/AboutUsEthics';
import NavBar from '../../components/navbar/navbar';

const AboutUsPage = (props) => (
  <div className={styles['page-about-us']}>
    <NavBar
      Paths={[
        { Path: 'Home', Url: '/' },
        { Path: 'About Us', Url: '/en/about-us' },
      ]}
    ></NavBar>
    <MyPZContainer>
      <AboutUsTitle {...props} />
      <AboutUsInterest />
      <AboutUsEthics />
    </MyPZContainer>
  </div>
);

export default AboutUsPage;
