import React from 'react';
import styles from './PropertyPrice.module.scss';

const PropertyPrice = (props) => {
  const { value, type } = props;
  const finalPrice = new Intl.NumberFormat().format(value);
  const payment = type === 'rent' ? 'per year' : '';

  return (
    <div className={styles['property-price-part']}>
      <span className={styles['property-price-part__currency']}>AED</span>
      <span className={styles['property-price-part__value']}> {finalPrice} </span>
      <span className={styles['property-price-part__currency']}> {payment} </span>
    </div>
  );
};

export default PropertyPrice;
