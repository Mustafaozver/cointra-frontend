import React from 'react';
import styles from './PropertyPrice.module.scss';

const PropertyPrice = (props) => {
  const { value, type } = props;
  const finalPrice = new Intl.NumberFormat().format(value);
  const payment = type === 'rent' ? 'per year' : '';
  /*
  const ParityAEDUSD = 0.27225367508422722536750842;
  const AsUSD = new Intl.NumberFormat().format((value * ParityAEDUSD * 1.001).toFixed(0));
  console.log(AsUSD);
  */
  
  return (
    <div className={styles['property-price-part']}>
      <span className={styles['property-price-part__currency']}>AED</span>
      <span className={styles['property-price-part__value']}> {finalPrice} </span>
      <span className={styles['property-price-part__currency']}> {payment} </span>
    </div>
  );
};

export default PropertyPrice;
