import React, { useState } from 'react';

import styles from './ForDeveloperPage.module.scss';

import { MyPZContainer, MyPZButton } from '../../mypzkit';
import ForDeveloperFeatures from '../../components/statics/forDeveloper/forDeveloperFeatures/ForDeveloperFeatures';
import ForDeveloperServices from '../../components/statics/forDeveloper/forDeveloperServices/ForDeveloperServices';
import ForDeveloperPricing from '../../components/statics/forDeveloper/forDeveloperPricing/ForDeveloperPricing';
import Faq from '../../components/statics/faq/Faq';
import ButtonSwitch from '../../components/button/buttonSwitch/ButtonSwitch';

import forDeveloperPricing from '../../config/forDeveloperPricing';

const ForDeveloperPage = () => {
  const [selectedPricing, setSelectedPricing] = useState('monthly');

  const handleSelectedPricingChange = (selectedPricingValue) => {
    setSelectedPricing(selectedPricingValue);
  };

  const renderIntroduction = () => (
    <>
      <h2>Frictionless, Paperless, Seamless.</h2>
      <h1>All-In-One Real Estate Property Platform</h1>
      <h3>
        From your first listing to final signature,
        empower your agents by using zeekeez :
        Apps, Website, CRM, eKYC, eContract Management,
        Social Booster, Scoring tools, Short Term platform…
      </h3>
      <div className={styles['page-for-developer__introduction-image']}>
        <img src="/images/CRM-zeekeez-V2.png" alt="CRM-zeekeez-V2" />
      </div>
      <h2>
        Do what you do best,
        even better, even faster with zeekeez
      </h2>
      <div className={styles['page-for-developer__introduction_button-get']}>
        <MyPZButton>Get Now Free Unlimited 30-day trial</MyPZButton>
      </div>
    </>
  );

  return (
    <div className={styles['page-for-developer']}>
      <MyPZContainer>
        <div className={styles['page-for-developer__introduction']}>
          {renderIntroduction()}
        </div>
        <div className={styles['page-for-developer__features']}>
          <ForDeveloperFeatures />
        </div>
        <div className={styles['page-for-developer__pricing']}>
          <h1>Developer pricing</h1>
          <h3>Choose the best plan for your team</h3>
          <p>
            Time to empower your business and reduce your costs!
            No matter how many people work at your company,
            no matter how many listings your agency has,
            your subscription is all you’ll pay.
          </p>
          <h4>Start your Free Unlimited 30-day trial!</h4>
          <h5>Special offer based on Unlimited package</h5>
          <div className={styles['page-for-developer__pricing__advantage']}>
            <span>✓ Unlimited listings</span>
            <span>✓ Unlimited users</span>
            <span>✓ No credit card required</span>
            <span>✓ Instant access</span>
            <span>✓ Non-binding offer</span>
            <div className={styles['page-for-developer__pricing__advantage-button']}>
              <MyPZButton>Yes I start my Free Unlimited 30-day trial</MyPZButton>
            </div>
          </div>
          <div className={styles['page-for-developer__pricing__services']}>
            <h3>Your membership includes a range of exclusive services:</h3>
            <div className={styles['page-for-developer__pricing__services-items']}>
              <ForDeveloperServices />
            </div>
            <div className={styles['page-for-developer__pricing__services-button']}>
              <MyPZButton>Yes I start my Free Unlimited 30-day trial</MyPZButton>
            </div>
          </div>
          <h1>Frictionless, Paperless, Seamless.</h1>
          <h3>Monthly & annually Subscription rates</h3>
          <ButtonSwitch
            options={[
              { value: 'monthly', text: 'Monthly' },
              { value: 'annually', text: 'Annually' },
            ]}
            onChange={handleSelectedPricingChange}
            value={selectedPricing}
          />
          <div className={styles['page-for-developer__pricing-items']}>
            <ForDeveloperPricing dataPrice={forDeveloperPricing[selectedPricing]} />
          </div>
        </div>
        <div className={styles['page-for-developer__faq']}>
          <Faq />
        </div>
      </MyPZContainer>
    </div>
  );
};

export default ForDeveloperPage;
