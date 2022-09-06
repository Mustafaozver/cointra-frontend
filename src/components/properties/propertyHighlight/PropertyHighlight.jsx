import React from 'react';

import styles from './PropertyHighlight.module.scss';

import BathIcon from '../../icons/bath/BathIcon';
import BedIcon from '../../icons/bed/BedIcon';
import ScaleIcon from '../../icons/scale/ScaleIcon';
import ParkingIcon from '../../icons/parking/ParkingIcon';

const PropertyHighlight = (props) => {
  const {
    bedroom,
    bathroom,
    size,
    parking,
  } = props;

  const itemRender = (label, value, icon) => (
    <div className={styles['property-highlight__item']}>
      <div className={styles['property-highlight__item-icon']}>
        {icon}
      </div>
      <div className={styles['property-highlight__item-details']}>
        <div className={styles['item-details__value']}>{value ?? 0}</div>
        <div className={styles['item-details__text']}>{label}</div>
      </div>
    </div>
  );

  const finalSize = new Intl.NumberFormat().format(size);

  const getBedroom = () => {
    if (bedroom < 1) {
      return 'Studio';
    }

    return bedroom;
  };

  return (
    <div className={styles['property-highlight']}>
      {itemRender(bedroom < 1 ? '' : 'Bedrooms', getBedroom(), <BedIcon className={styles['item-icon__content']} />)}
      {itemRender('Bathrooms', bathroom, <BathIcon className={styles['item-icon__content']} />)}
      {itemRender('Sqft', finalSize, <ScaleIcon className={styles['item-icon__content']} />)}
      {itemRender('Parking', parking, <ParkingIcon className={styles['item-icon__content']} />)}
    </div>
  );
};

export default PropertyHighlight;
