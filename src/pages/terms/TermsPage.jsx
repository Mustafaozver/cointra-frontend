import React from 'react';

import styles from './TermsPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import termsAndConditions from '../../config/termsAndConditions';

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

  return (
    <div className={styles['page-terms']}>
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
