import React from 'react';
import styles from './PropertyFeatures.module.scss';

import BedIcon from '../../../icons/bed/BedIcon';
import BathIcon from '../../../icons/bath/BathIcon';
import ScaleIcon from '../../../icons/scale/ScaleIcon';
import propertyTypesConfig from '../../../../data/config/propertyTypesConfig';

const PropertyFeatures = (props) => {
  const {
    type,
    bedroom,
    bathroom,
    size,
    category,
  } = props;

  const getSize = () => {
    const finalSize = new Intl.NumberFormat().format(size);
    return (
      <>
        {finalSize}&nbsp;
        <span className={styles['property-features-part-text__unit']}>sqft</span>
      </>
    );
  };

  const renderSize = () => {
    if (!size) {
      return null;
    }

    return (<>
      <div>
        <ScaleIcon className={styles['property-feature-icon']} />
        <span className={styles['property-features-part-text']}>{getSize()}</span>
      </div>
    </>);
  };

  const getBedroom = () => {
    if (bedroom < 1) {
      return 'Studio';
    }

    return bedroom;
  };

  const renderBathroom = () => {
    if (!bathroom) {
      return null;
    }

    return (<div>
      <BathIcon className={styles['property-feature-icon']} />
      <span className={styles['property-features-part-text']}>{bathroom}</span>
    </div>);
  };

  const renderResidentialFeatures = () => {
    if (category === 'commercial') {
      return null;
    }

    return (
      <>
        <div>
          <BedIcon className={styles['property-feature-icon']} />
          <span className={styles['property-features-part-text']}>{getBedroom()}</span>
        </div>
        {renderBathroom()}
      </>
    );
  };

  const renderType = () => {
    if (!type) {
      return null;
    }

    const propertyType = propertyTypesConfig.find((p) => p.code === type);
    const t = propertyType.value;

    return (<>
      <div className={styles['property-features-part-separator']}>|</div>
      <div><span className={styles['property-features-part-text']}>{t}</span></div>
    </>)
  };

  return (
    <div className={styles['property-features-part']}>
      {renderResidentialFeatures()}
      {renderSize()}
      {renderType()}
    </div>
  );
};

export default PropertyFeatures;
