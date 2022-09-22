import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import 'react-image-crop/dist/ReactCrop.css';
import '../src/mypzkit/components/mypz.scss';
import '../src/App.scss';

import config from '../src/config/Config';
import MainLayout from '../src/components/layouts/main/MainLayout';
import MyPZLinkContext from '../src/mypzkit/components/linkContext/MyPZLinkContext';

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (config.googleAnalyticsTrackingCode) {
        ReactGA.initialize(config.googleAnalyticsTrackingCode);
        ReactGA.pageview(url);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    handleRouteChange(router.asPath);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <MyPZLinkContext.Provider value={Link}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N4W3JQX');" }} />
        <meta name="author" content="Zeekeez" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        <meta name="Language" content="English" />
        <meta name="Publisher" content="Zeekeez" />
        <meta name="Revisit-After" content="2 Days" />
        <meta name="distribution" content="Local" />
        <meta name="Robots" content="INDEX, FOLLOW" />
        <meta name="page-topic" content="Zeekeez" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="index,follow" />
        <meta name="Rating" content="General" />
        <meta name="allow-search" content="yes" />
        <meta name="expires" content="never" />

        <meta name="DC.title" content="Zeekeez" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.position" content="25.265347;55.292491" />
        <meta name="ICBM" content="25.265347, 55.292491" />

        <meta name="description" content="Zeekeez.com is the biggest property portal in the UAE with a broad scope of residential and commercial properties available for sale and for rent." />
        <meta name="msvalidate.01" content="3C9C2B8E2B1F97EF0A1BC44A458B7648" />
        <title>Property Portal UAE - Best Property Finder Alternative | zeekeez.com</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href={`${config.baseUrl}${router.asPath}`} />
        <meta name="ahrefs-site-verification" content="e2bf64b8fb7392d69161cdaaedd1d8db1b743c7442500822954b767eb954d1d4"></meta>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4W3JQX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MyPZLinkContext.Provider>
  );
}
