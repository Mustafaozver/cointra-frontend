import React from 'react';

import styles from './PrivacyPolicyPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import privacyPolicy from '../../config/privacyPolicy';

const PrivacyPolicyPage = () => {
  const renderTitle = (d) => (
    <li>
      {d.title}
      <ol>
        {renderContent(d.content)}
      </ol>
    </li>
  );

  const renderAllData = () => privacyPolicy.map((d) => renderTitle(d));

  const renderContent = (content) => content.map((c) => {
    if (typeof c === 'object') {
      return (renderTitle(c));
    }

    return <li key={c}>{c}</li>;
  });

  return (
    <div className={styles['page-privacy-policy']}>
      <MyPZContainer>
        <div className={styles['page-privacy-policy__titles']}>
          <h1>Privacy Policy</h1>
          <span>-</span>
          <h2>Property Finder policy of zeekeez</h2>
        </div>
        <div className={styles['page-privacy-policy__description']}>
          <h4>
            zeekeez.com – Privacy Policy of the zeekeez.com Platform refers to Website,
            Mobile sites and Apps iOS and Android.
          </h4>
          <p>
            zeekeez Group trading as zeekeez Platform
            (zeekeez Platform or our or we or us)
            is in the business of operating the zeekeez Platform (Online Platform)
            which provides users (Customers )
            with an opportunity to browse for services
            from a number of zeekeez Platform’s real estates,
            agents, properties project owners, landlords (Professionals ),
            in order to buy and/or rent these properties.
            The services provided by zeekeez Platform in operating
            the Online Platform are the “Services”.
          </p>
          <p>
            This Policy governs how we will deal with
            your Personal Information collected in connection with the Services.
          </p>
          <p>
            This Policy also applies to Personal Information collected by
            zeekeez Platform in connection with its website,
            social media accounts, applications,
            software and/or any other technological means (Online Platforms ),
            as well as in connection with any direct communication between you and
            zeekeez Platform.
          </p>
          <p>
            zeekeez Platform may use third parties located both locally and
            overseas in addition to its own resources to provide these Services.
          </p>
        </div>
        <div className={styles['page-privacy-policy__content']}>
          <ol>{renderAllData()}</ol>
        </div>
        <div className={styles['page-privacy-policy__footer']}>© MP Group 2020</div>
      </MyPZContainer>
    </div>
  );
};

export default PrivacyPolicyPage;
