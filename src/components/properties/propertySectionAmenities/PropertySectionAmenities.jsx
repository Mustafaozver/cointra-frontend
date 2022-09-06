import React from 'react';

import styles from './PropertySectionAmenities.module.scss';

import amenitiesConfig from '../../../data/config/amenitiesConfig';

const PropertySectionAmenities = (props) => {
  const { amenities } = props;

  const renderListAmenities = () => amenities.map((a) => {
    const amenity = amenitiesConfig.find((aConfig) => aConfig.c === a);

    return (
      <div className={styles['property-section-amenities__item']} key={amenity.c}>
        {amenity.v}
      </div>
    );
  });

  return (
    <div className={styles['property-section-amenities']}>
      {amenities ? renderListAmenities() : null}
    </div>
  );
};

export default PropertySectionAmenities;
