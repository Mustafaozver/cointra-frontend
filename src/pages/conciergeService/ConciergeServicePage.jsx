import React from 'react';

import styles from './ConciergeServicePage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import ConciergeServiceHire from '../../components/statics/conciergeService/hire/ConciergeServiceHire';
import ConciergeServiceWork from '../../components/statics/conciergeService/work/ConciergeServiceWork';
import ConciergeServicePackage from '../../components/statics/conciergeService/package/ConciergeServicePackage';

const ConciergeServicePage = () => (
  <div className={styles['page-concierge-service']}>
    <MyPZContainer>
      <div className={styles['page-concierge-service__title']}>
        <h1>You search, we find</h1>
        <p>
          How to buy a villa in Dubai?
          How to rent an apartment in Dubai?
          How to buy a luxury property in the UAE? Can I be a property owner in UAE?
          I am a new expatriate in Dubai, how can I rent a flat?
          I will move to live in Abu Dhabi,
          which documents I need to rent an apartment in UAE?
          Which are real estate property rules in the UAE?
          I am not in the UAE,
          how to buy a real estate property?
        </p>
      </div>
      <ConciergeServiceHire />
      <ConciergeServiceWork />
      <ConciergeServicePackage />
      <div className={styles['page-concierge-footer']}>
        # The House Hunters are Agents from zeekeez’s partner agencies #
      </div>
    </MyPZContainer>
  </div>
);

export default ConciergeServicePage;
