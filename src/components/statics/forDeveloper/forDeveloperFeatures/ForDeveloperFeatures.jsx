import React from 'react';

import styles from './ForDeveloperFeatures.module.scss';

const ForDeveloperFeatures = () => (
  <>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/CRM-zeekeez-V2-2.png" alt="CRM-zeekeez-V2-2" />
      </div>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Add, Manage & Promote your listings</h3>
        <p>
          Enable your agents to increase their productivity by
          providing an intuitive and innovative Real Estate CRM.
          Few clicks from one place to add, manage and promote their listings.
          Market your Agency brand through
          zeekeez Real Estate Omnichannel CRM prouldy built in-house.
        </p>
      </div>
    </div>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Create, Share and Boost your social visibility</h3>
        <p>
          Manage from one place your social contents.
          Convert automatically your listings to social medias ready to be
          immediately shared.
          Don’t spend time anymore to convert your listings.
          Few clicks to extend your advertising listings on your social networks.
        </p>
      </div>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/CRM-zeekeez-V2-4.png" alt="CRM-zeekeez-V2-4" />
      </div>
    </div>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/CRM-zeekeez-V2-7.png" alt="CRM-zeekeez-V2-7" />
      </div>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Generate, Track and Manage your leads</h3>
        <p>
          Reports that allows to keep in control.
          Be informed immediately thru calls,
          messages, emails, alerts and more anywhere anytime.
          Follow your leads on your dashboard.
          Customize your tools and program actions.
          Discover what clients love about working with your agents.
          Get a a complete reporting in real time regarding your team.
        </p>
      </div>
    </div>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Check, Score and Validate your customers</h3>
        <p>
          Secure your business with Digital Identity Verification eKYC.
          Score your leads and save your time by targeting the right client.
          Automated and Securised digital solution to empower your legal process.
          Check all identity documents in few clicks.
        </p>
      </div>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/check-score.jpg" alt="check-score" />
      </div>
    </div>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/CRM-zeekeez-V2-5.png" alt="CRM-zeekeez-V2-5" />
      </div>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Edit, Check and e-Sign your contracts</h3>
        <p>
          Accelerate your Home-Buying or Home-Renting agreement experience.
          Build your own approval worksflows.
          Boost your brokerage’s success to the next level.
          Simplify your tasks with the e-Contract management.
        </p>
      </div>
    </div>
    <div className={styles['page-for-developer__features-item']}>
      <div className={styles['page-for-developer__features-item__text']}>
        <h3>Promote, Manage and Rent your short term rentals</h3>
        <p>
          Increase your revenues by renting on zeekeez BnB platform.
          Promote your properties in few clicks by using the calendar management.
          Simplify your process with our payment gateway. Check out anytime your incomes.
        </p>
      </div>
      <div className={styles['page-for-developer__features-item__image']}>
        <img src="/images/CRM-zeekeez-V2-6.png" alt="CRM-zeekeez-V2-6" />
      </div>
    </div>
  </>
);

export default ForDeveloperFeatures;
