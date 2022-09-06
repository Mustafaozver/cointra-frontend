import React from 'react';

import styles from './LoyaltyProgramPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import FormRegister from '../../components/form/register/FormRegister';

const LoyaltyProgramPage = () => (
  <div className={styles['page-loyalty-program']}>
    <MyPZContainer className={styles['page-loyalty-program__content']}>
      <h1>Get rewarded on zeekeez!</h1>
      <h3>
        Become a member of zeekeez Loyalty Program and benefit from
        discounts with our partners.
      </h3>
      <p>
        The more you interact on zeekeez
        (calls, messages, visits, inquiries…with our brokers and developers),
        the more you get rewards.
        <br />
        Your loyalty comes at a price.
      </p>
      <span>
        <b>★ zeekeez </b>
        is proudly the
        <b>first UAE’s Property Marketplace to reward its visitors ★</b>
      </span>
      <h1>Join us! 100% Free!</h1>
      <i>Membership will be effective for unlimited duration.</i>
      <div className={styles['page-loyalty-program__content__image']}>
        <img src="/images/zeekeez-loyalty-program.png" alt="zeekeez-loyalty-program" />
      </div>
      <i># Coming soon here the complete list of zeekeez partners #</i>
      <div className={styles['page-loyalty-program__content__form']}>
        <h3>Register now & Become member</h3>
        <FormRegister />
      </div>
    </MyPZContainer>
  </div>
);

export default LoyaltyProgramPage;
