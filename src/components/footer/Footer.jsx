import React, { useState } from 'react';

import {
  MyPZLink,
  MyPZContainer,
} from '../../mypzkit';

import Logo from '../logo/Logo';

import LinkedinIcon from '../icons/linkedin/LinkedinIcon';
import InstagramIcon from '../icons/instagram/InstagramIcon';
import FacebookIcon from '../icons/facebook/FacebookIcon';
// import PinterestIcon from '../icons/pinterest/PinterestIcon';
import TwitterIcon from '../icons/twitter/TwitterIcon';
import GooglePlayIcon from '../icons/googlePlay/GooglePlayIcon';
import AppleIosIcon from '../icons/appleIos/AppleIosIcon';

import styles from './Footer.module.scss';
import AppleAppNotAvailablePopup from '../popup/appleAppNotAvailablePopup/AppleAppNotAvailablePopup';

const links = [
  {
    title: 'zeekeez for broker',
    link: '/en/brokers/zeekeez-pricing',
  },
  {
    title: 'zeekeez for developer',
    link: '/en/developers/zeekeez-pricing',
  },
  /*
  {
    title: 'Property concierge service',
    link: '/property-concierge-service',
  },
  */
  {
    title: 'Privacy policy',
    link: '/en/privacy-policy',
  },
  {
    title: 'Terms and conditions',
    link: '/en/terms-and-conditions',
  },
  /*
  {
    title: 'Sitemap',
    link: '#',
  },
  {
    title: 'Loyalty program',
    link: '/loyalty-program',
  },
  */
  {
    title: 'About us',
    link: '/en/about-us',
  },
  {
    title: 'Contact',
    link: '/en/contact',
  },
  {
    title: 'Career',
    link: '/en/career',
  },
  /*
  {
    title: 'Home page',
    link: '/',
  },
  {
    title: 'Properties for Rent',
    link: '/properties-for-rent',
  },
  {
    title: 'Properties for Sale',
    link: '/properties-for-sale',
  },
  {
    title: 'Luxury Properties',
    link: '/luxury-properties',
  },
  {
    title: 'Agent Finder',
    link: '/finder',
  },
  {
    title: 'Agency Finder',
    link: '/finder',
  },
  {
    title: 'Community Guides',
    link: '#',
  },
  {
    title: 'Blog',
    link: '#',
  },
  */
];

const Footer = () => {
  const [isAppleAppnotAvailablePopupOpen, setIsAppleAppnotAvailablePopupOpen] = useState(false);

  const handleClickOnAppleLink = (e) => {
    e.preventDefault();
    setIsAppleAppnotAvailablePopupOpen(true);
  };

  const handleCloseAppleAppNotAvailablePopup = () => {
    setIsAppleAppnotAvailablePopupOpen(false);
  };


  const renderLinks = () => links.map((link) => (
    <div className={styles['footer-link-item']} key={link.title}>
      <MyPZLink to={link.link} activeclassName={styles.active} linkType="secondary">
        {link.title}
      </MyPZLink>
    </div>
  ));

  return (
    <div className={styles.footer}>
      <AppleAppNotAvailablePopup isOpen={isAppleAppnotAvailablePopupOpen} onClose={handleCloseAppleAppNotAvailablePopup} />
      <MyPZContainer>
        <div className={styles['footer-main-container']}>
          <div className={styles['footer-links-container']}>
            {renderLinks()}
          </div>
          <div className={styles['footer-action-container']}>
            <span>Download zeekeez app, find your dream home</span>
            <div className={styles['footer-mobile-download-links-container']}>
              {/*<a href="https://apps.apple.com/fr/app/mypropertyz-property-portal/id1538483999">*/}
              <div
                onClick={handleClickOnAppleLink}
                onKeyPress={handleClickOnAppleLink}
                role="button"
                tabIndex="0">
                <div className={styles['footer-mobile-download-link']}>
                  <AppleIosIcon />
                </div>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.zeekeez">
                <div className={styles['footer-mobile-download-link']}>
                  <GooglePlayIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </MyPZContainer>
      <div className={styles['footer-separator']} />
      <MyPZContainer>
        <div className={styles['footer-main-container']}>
          <div className={styles.footer__logo}>
            <MyPZLink>
              <div>
                <Logo logoStyle="white" />
              </div>
            </MyPZLink>
          </div>
          <div className={styles['footer-rights']}>© 2022 zeekeez.com</div>
          <div className={styles['footer-social-container']}>
            <a href="https://www.facebook.com/Zeekeez-101188815817180">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/zeekeez_official/">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/zeekeez">
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/zeekeez_zeekeez">
              <TwitterIcon />
            </a>
            {/*
            <a href="https://www.pinterest.fr/mypropertyz/">
              <PinterestIcon />
            </a>
            */}
          </div>
        </div>
      </MyPZContainer>
    </div>
  );
};

export default Footer;
