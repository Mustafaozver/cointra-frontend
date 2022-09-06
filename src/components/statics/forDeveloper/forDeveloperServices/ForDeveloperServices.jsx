import React from 'react';

import styles from './ForDeveloperServices.module.scss';

const data = [
  {
    title: 'UAE’s Real Estate Property platform',
    description: 'Promote your listings on zeekeez anywhere anytime on all devices (mobile, tablet and laptop)',
    options: 'Board – Leads – Deals – Inquiries – Calls – Messages – Whatsapp – Listings – Agents activities and more features!',
    image: 'full-accessibility-icon.png',
  },
  {
    title: 'Loyalty Program',
    description: 'Get more visibility! All zeekeez individuals visitors get rewarded',
    options: 'Reewards & Discounts – Special offers – Home furnishing partners – Dashboard – Loyalty eCard and more features!',
    image: 'loyalty-program.png',
  },
  {
    title: 'House Hunter Concierge Service',
    description: 'Increase your revenue : become a House Hunter and be paid for your time',
    options: 'Buy search, earn 3,990 AED per search – Rent search, earn 2,990 AED per search – Luxury search, earn 8,990 AED per search',
    image: 'house-hunter.png',
  },
  {
    title: 'Identity verification & AML checking',
    description: 'Use our omnichannel certified KYC solutions to verify your customers identity (Add-on 24,99 AED per verification)',
    options: 'All devices – 100% automated process – AML included (Anti-Money-Laundry checking) – Fully GDPR compliant',
    image: 'house-hunter-2.png',
  },
  {
    title: 'Contract management',
    description: 'Accelerate your business by using our contract management (Add-on on demand)',
    options: 'All devices – 100% automated process – Legally-binding eSignature certified – Digital transaction process – Automated workflows',
    image: 'contract-1.png',
  },
  {
    title: 'Property CRM',
    description: 'Increase your productivity by using our Real Estate CRM Saas Software (available soon)',
    options: 'All devices – Property Listing management – Leads & Deals management – Dashboard & Reporting – Advanced Permissions – KYC & Scoring tools – Contract management – Automated workflows – Document storage – Campaigns & Marketing tools – Social Networks marketing tools – Calendar management – API plug & play integration',
    image: 'CRM-1.png',
  },
  {
    title: 'Short term rental platform',
    description: 'Promote your short term properties on mybnbz, the dedicated Short Term Rental platform signed by zeekeez',
    options: 'Customer bank deposit – Payment gateway – Leads & Deals management – Dashboard & Reporting – Calendar management – Exclusive concierge services',
    image: 'BnB-1.png',
  },
];

const ForDeveloperServices = () => data.map((d) => (
  <div className={styles['page-for-developer__pricing__services-item']} key={d.title}>
    <div className={styles['__pricing__services-item__image']}>
      <img src={`/images/${d.image}`} alt={d.title} />
    </div>
    <div className={styles['__pricing__services-item__text']}>
      <h4>{d.title}</h4>
      <p>{d.description}</p>
      <p className={styles['__pricing__services-item__text-options']}>{d.options}</p>
    </div>
  </div>
));

export default ForDeveloperServices;
