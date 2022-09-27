import React from 'react';

import styles from './TermsPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import termsAndConditions from '../../config/termsAndConditions';

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

const TermsPage = (props) => {
  const { mainTitle, subTitle } = props;

  const renderTitle = (d) => (
    <li>
      {d.title}
      <ol>
        {renderContent(d.content)}
      </ol>
    </li>
  );

  const renderAllData = () => termsAndConditions.map((d) => renderTitle(d));

  const renderContent = (content) => content.map((c) => {
    if (typeof c === 'object') {
      return (renderTitle(c));
    }

    return <li key={c}>{c}</li>;
  });
  //schemaJson.description = '';
  return (
    <div className={styles['page-terms']}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <MyPZContainer>
        <h1>{mainTitle}</h1>
        <h2>{subTitle}</h2>
        <div className={styles['page-terms__description']}>
          <h3>zeekeez - Property Portal Dubai UAE</h3>
          <p>
            Property Portal Dubai – Contractual Terms of Use of the zeekeez
            Property Portal in Dubai and the UAE refers to Website,
            Mobile sites and Apps iOS and Android.
          </p>
        </div>
        <div className={styles['page-terms__content']}>
          <ol>{renderAllData()}</ol>
        </div>
        <div className={styles['page-terms__footer']}>© zeekeez DIFC 2022</div>
      </MyPZContainer>
    </div>
  );
};

export default TermsPage;
