import React from 'react';
import RoomIcon from '@material-ui/icons/Room';

import styles from './PropertyLocation.module.scss';

const PropertyLocation = ({ value }) => {
  const finalLocation = value || 'No location available';

  return (
    <div className={styles['property-location']}>
      <RoomIcon className={styles['property-location-icon']} />&nbsp;
      <span className={styles['property-location-part']} title={finalLocation}>{finalLocation}</span>
    </div>
  );
};

export default PropertyLocation;
