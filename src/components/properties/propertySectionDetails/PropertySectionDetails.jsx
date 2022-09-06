import React from 'react';

import styles from './PropertySectionDetails.module.scss';

import propertyTypesConfig from '../../../data/config/propertyTypesConfig';
import furnishConfig from '../../../data/config/furnishConfig';

const PropertySectionDetails = (props) => {
  const { data } = props;

  const getPropertyType = () => {
    const propertyType = propertyTypesConfig.find((p) => p.code === data.type);

    return (<>{propertyType.value}</>);
  };

  const getPrice = () => {
    const finalPrice = new Intl.NumberFormat().format(data.price);
    const payment = data.businessType === 'rent' ? 'per year' : '';

    return (<>{`AED ${finalPrice} ${payment}`}</>);
  };

  const getSize = () => {
    const finalSize = new Intl.NumberFormat().format(data.size);
    return (<>{`${finalSize} sqft`}</>);
  };

  const getBedroom = () => {
    if (data.bedrooms < 1) {
      return 'Studio';
    }

    return data.bedrooms;
  };

  const gerFurnish = () => furnishConfig[data.furnish];

  const renderItems = (name, value) => (
    <div className={styles['property-section-details__items']}>
      <span className={styles['property-section-details__items-name']}>{name}</span>
      <span className={styles['property-section-details__items-value']}>{value}</span>
    </div>
  );

  return (
    <div className={styles['property-section-details']}>
      {renderItems('Type', data.businessType)}
      {renderItems('Property ID', data.reference)}
      {renderItems('Permit Number', data.permitNumber)}
      {renderItems('Property Status', data.status)}
      {renderItems('Property Type', getPropertyType())}
      {renderItems('Category', data.category)}
      {renderItems('Furnishes', gerFurnish())}
      {renderItems('Price', getPrice())}
      {renderItems('Property Size', getSize())}
      {renderItems('Bedrooms', getBedroom())}
      {renderItems('Bathrooms', data.bathrooms)}
      {renderItems('Parking', data.parkings)}
    </div>
  );
};

export default PropertySectionDetails;
