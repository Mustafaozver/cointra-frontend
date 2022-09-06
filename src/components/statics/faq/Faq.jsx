import React from 'react';
import Link from 'next/link';

import styles from './Faq.module.scss';

import { MyPZAccordion } from '../../../mypzkit';
import faq from '../../../config/faq';

const Faq = () => {
  const renderContent = () => faq.map((d) => (
    <div key={d.question} className={styles['page-faq__item']}>
      <MyPZAccordion title={d.question}>
        <p>{d.answer}</p>
      </MyPZAccordion>
    </div>
  ));

  return (
    <div className={styles['statics-faq']}>
      <div className={styles['statics-faq__title']}>
        <h1>Frequently Asked Questions</h1>
        <h2>Answers to the questions we receive most.</h2>
      </div>
      <div className={styles['statics-faq__content']}>
        {renderContent()}
        <div className={styles['statics-faq__content-footer']}>
          Have a question ?&nbsp;
          <Link href="/en/contact" className={styles['statics-faq__content-footer__link']} passHref>Ask here</Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
