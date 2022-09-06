import React from 'react';

import styles from './ForDeveloperPricing.module.scss';

import { MyPZButton } from '../../../../mypzkit';

const ForDeveloperPricing = (props) => {
  const { dataPrice } = props;

  if (!dataPrice) {
    return null;
  }

  const formatPrice = (value) => new Intl.NumberFormat().format(value);

  const renderDetailsPricing = (details) => details.map((d) => (
    <div className={styles['__pricing-item__details__value']} key={d}>{d}</div>
  ));

  const renderFeaturesPricing = (features) => features.map((f) => (
    <div className={styles['__pricing-item__features__value']} key={f}>✔&nbsp;{f}</div>
  ));

  return (dataPrice.map((p) => (
    <div className={styles['page-for-developer__pricing-item']} key={p.type}>
      <div className={styles['page-for-developer__pricing-item-body']}>
        <div className={styles['page-for-developer__pricing-item__type']}>{p.type}</div>
        <div className={styles['page-for-developer__pricing-item__price']}>
          <span className={styles['__pricing-item__price__currency']}>AED&nbsp;</span>
          <span className={styles['__pricing-item__price__value']}>{formatPrice(p.price)}</span>
        </div>
        <div className={styles['page-for-developer__pricing-item__details']}>
          {renderDetailsPricing(p.details)}
        </div>
        <hr />
        <div className={styles['page-for-developer__pricing-item__features']}>
          <h3>Features</h3>
          {renderFeaturesPricing(p.features)}
        </div>
      </div>
      <div className={styles['page-for-developer__pricing-item-footer']}>
        <MyPZButton>Available soon</MyPZButton>
      </div>
    </div>
  )));
};

export default ForDeveloperPricing;
