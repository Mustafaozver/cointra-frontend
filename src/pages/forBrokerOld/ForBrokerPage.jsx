import React, { useState } from 'react';
import Link from 'next/link';

import styles from './ForBrokerPage.module.scss';

import { MyPZContainer, MyPZButton } from '../../mypzkit';
import ForDeveloperFeatures from '../../components/statics/forDeveloper/forDeveloperFeatures/ForDeveloperFeatures';
import ForDeveloperServices from '../../components/statics/forDeveloper/forDeveloperServices/ForDeveloperServices';
import ForDeveloperPricing from '../../components/statics/forDeveloper/forDeveloperPricing/ForDeveloperPricing';
import Faq from '../../components/statics/faq/Faq';
import ButtonSwitch from '../../components/button/buttonSwitch/ButtonSwitch';

import forDeveloperPricing from '../../config/forDeveloperPricing';

const ForBrokerPage = () => {
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
      <div className={styles['page-for-broker__introduction-image']}>
        <img src="/images/CRM-zeekeez-V2.png" alt="CRM-zeekeez-V2" />
      </div>
      <h2>
        Do what you do best,
        even better, even faster with zeekeez©
      </h2>
      <div className={styles['page-for-broker__introduction_button-get']}>
        <MyPZButton>Get Now Free Unlimited 30-day trial</MyPZButton>
      </div>
    </>
  );

  const renderExclusivity = () => (
    <>
      <h2>Discover our new exclusive services</h2>
      <div className={styles['page-for-broker__exclusivity__image']}>
        <img src="/images/new-2-2.png" alt="new-2-2" />
      </div>
      <div className={styles['page-for-broker__exclusivity__items']}>
        <div className={styles['page-for-broker__exclusivity__item']}>
          <div className={styles['page-for-broker__exclusivity__item-image']}>
            <img src="/images/zeekeez-Try2Buy.png" alt="zeekeez-Try2Buy" />
          </div>
          <div className={styles['page-for-broker__exclusivity__item-text']}>
            <h3>
              Accelerate your sales! Sell your properties differently by using
              <br />
              Try2Buy©
            </h3>
            <span>
              More infos ?&nbsp;
              <Link href="/en/contact" className={styles['page-for-broker__exclusivity__item-text__contact']} passHref>
                Contact us
              </Link>
            </span>
          </div>
        </div>
        <div className={styles['page-for-broker__exclusivity__item']}>
          <div className={styles['page-for-broker__exclusivity__item-image']}>
            <img src="/images/zeekeez-Try2Rent.png" alt="zeekeez-Try2Rent" />
          </div>
          <div className={styles['page-for-broker__exclusivity__item-text']}>
            <h3>
              Stay ahead! Rent your properties differently by using
              <br />
              Try2Rent©
            </h3>
            <span>
              More infos ?&nbsp;
              <Link href="/en/contact" className={styles['page-for-broker__exclusivity__item-text__contact']} passHref>
                Contact us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const renderWork = () => (
    <>
      <div className={styles['page-for-broker__work__item']}>
        <img src="/images/zeekeez-Customer-Journey-2-1.jpg" alt="zeekeez-Customer-Journey-2-1" />
        <span>
          Choose the best plan for your team and enjoy all
          digital tools from one integrated solution.
        </span>
        <span>
          Plug & Play platform, set up your dashboard in a few clicks.
        </span>
      </div>
      <div className={styles['page-for-broker__work__item']}>
        <img src="/images/zeekeez-Customer-Journey-3.jpg" alt="zeekeez-Customer-Journey-3" />
        <span>
          Upload all your listings, medias, files, documents on zeekeez© cloud.
        </span>
        <span>
          Manage your properties, your agents and your leads from your back office.
        </span>
        <span>
          Boost your sales and your rentals with Try2Buy and Try2Rent
        </span>
      </div>
      <div className={styles['page-for-broker__work__item']}>
        <img src="/images/zeekeez-Customer-Journey-4.jpg" alt="zeekeez-Customer-Journey-4" />
        <span>
          Send immediately in few clicks an e-KYC to your client to verify his identity.
        </span>
        <span>
          All the process is fully automated and secure encrypted with Biometric digital signature.
        </span>
      </div>
      <div className={styles['page-for-broker__work__item']}>
        <img src="/images/zeekeez-Customer-Journey-7.jpg" alt="zeekeez-Customer-Journey-7" />
        <span>
          Send immediately in few clicks an e-Contract to your client to close the deal.
        </span>
      </div>
      <div className={styles['page-for-broker__work__item']}>
        <img src="/images/zeekeez-Customer-Journey-8.jpg" alt="zeekeez-Customer-Journey-8" />
        <span>
          Do what you do best, even better, even faster with zeekeez.
        </span>
      </div>
    </>
  );

  return (
    <div className={styles['page-for-broker']}>
      <MyPZContainer>
        <div className={styles['page-for-broker__introduction']}>
          {renderIntroduction()}
        </div>
        <div className={styles['page-for-broker__exclusivity']}>
          {renderExclusivity()}
        </div>
        <div className={styles['page-for-broker__features']}>
          <h2>Why choosing zeekeez© ?</h2>
          <ForDeveloperFeatures />
        </div>
        <div className={styles['page-for-broker__work']}>
          <h2>How it works?</h2>
          {renderWork()}
        </div>
        <div className={styles['page-for-broker__benefits']}>
          <h1>Your benefits</h1>
          <span>✓ empower your business</span>
          <span>✓ centralize your data</span>
          <span>✓ simplify your workflows</span>
          <span>✓ increase your productivity</span>
          <span>✓ secure all your process</span>
          <span>✓ reduce frictions in your organization</span>
        </div>
        <div className={styles['page-for-broker__plan']}>
          <h1>Choose the best plan for your team</h1>
          <h2>Broker pricing</h2>
          <p>
            Time to empower your business and reduce your costs!
            No matter how many people work at your company,
            no matter how many listings your agency has,
            your subscription is all you’ll pay.
          </p>
          <span>Start your Free Unlimited 30-day trial!</span>
          <h3>Special offer based on Unlimited package</h3>
          <span>✓ Unlimited listings</span>
          <span>✓ Unlimited users</span>
          <span>✓ No credit card required</span>
          <span>✓ Instant access</span>
          <span>✓ Non-biding offer</span>
          <div className={styles['page-for-broker__plan-button']}>
            <MyPZButton>Yes I start my Free Unlimited 30-day trial</MyPZButton>
          </div>
        </div>
        <div className={styles['page-for-broker__pricing']}>
          <h3>Your membership includes a range of exclusive services:</h3>
          <div className={styles['page-for-broker__pricing__services-items']}>
            <ForDeveloperServices />
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
          <div className={styles['page-for-broker__pricing-items']}>
            <ForDeveloperPricing dataPrice={forDeveloperPricing[selectedPricing]} />
          </div>
        </div>
        <div className={styles['page-for-broker__faq']}>
          <Faq />
        </div>
      </MyPZContainer>
    </div>
  );
};

export default ForBrokerPage;
