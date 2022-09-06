import React from 'react';

import styles from './ConciergeServicePackage.module.scss';

import { MyPZButton } from '../../../../mypzkit';

const pricingLists = [
  {
    name: 'Rent Search Pack',
    description: 'Hire your House Hunter to rent your next home',
    type: 'POPULAR',
    price: 3490,
    per: 'pack',
    features: [
      '1 dedicated House Hunter',
      'Rent search up to 500K AED',
      'No limited duration',
    ],
  },
  {
    name: 'Buy Search Pack',
    description: 'Hire your House Hunter to buy your next home',
    type: 'BEST CHOICE',
    price: 4590,
    per: 'pack',
    features: [
      '1 dedicated House Hunter',
      'Buy search up to 10 millions AED',
      'No limited duration',
    ],
  },
  {
    name: 'Luxury Search Pack',
    description: 'Hire your House Hunter to find your next luxury property',
    type: 'VIP',
    price: 9990,
    per: 'pack',
    features: [
      '2 dedicated House Hunters',
      'Buy from 10M AED & Rent from 500K AED',
      'No limited duration',
    ],
  },
];

const ConciergerServicePackage = () => {
  const formatPrice = (value) => new Intl.NumberFormat().format(value);

  const renderFeature = (feature) => feature.map((f) => (
    <div className={styles.feature__item} key={f}>✔ {f}</div>
  ));

  const renderPricing = () => pricingLists.map((p) => (
    <div className={styles['package-pricing__item']} key={p.name}>
      <div className={styles['package-pricing__item-badge']}>{p.type}</div>
      <div className={styles['package-pricing__item-name']}>{p.name}</div>
      <span className={styles['package-pricing__item-description']}>{p.description}</span>
      <div className={styles['package-pricing__item-price']}>
        <span className={styles['package-pricing__item-currency']}>AED</span>
        <span className={styles['package-pricing__item-price__value']}>{formatPrice(p.price)}</span>
        <span className={styles['package-pricing__item-price__unit']}>/{p.per}</span>
      </div>
      <div className={styles['package-pricing__item-feature']}>
        {renderFeature(p.features)}
      </div>
      <div className={styles['package-pricing__item-action']}>
        <MyPZButton>Get {p.name}</MyPZButton>
      </div>
    </div>
  ));

  return (
    <div className={styles['concierge-service-package']}>
      <h1>Select your package</h1>
      <div className={styles['concierge-service-package__items']}>
        {renderPricing()}
      </div>
    </div>
  );
};

export default ConciergerServicePackage;
