import React from 'react';
import Link from 'next/link';

import styles from './PropertySuggestedItem.module.scss';

import { MyPZCarousel } from '../../../mypzkit';
import Config from '../../../config/Config';
import PropertyAgentInfos from '../components/propertyAgentInfos/PropertyAgentInfos';
import PropertyLocation from '../components/propertyLocation/PropertyLocation';
import PropertyFeatures from '../components/propertyFeatures/PropertyFeatures';
import PropertyPrice from '../components/propertyPrice/PropertyPrice';

const view = 'grid';

const PropertySuggestedItem = (props) => {
  const { data } = props;
  const {
    agent,
    agency,
  } = data;

  const renderImageCarousel = () => {
    if (!data.images || data.images.length < 1) {
      return [{
        index: 0,
        render: (
          <>
            <span>Sorry, photos are not available <br /> Please contact the agent</span>
          </>
        ),
      }];
    }

    const imagesFiltered = data.images.filter((image) => image.format === view);

    return imagesFiltered.map((img, index) => ({
      index,
      render: (<img
        className={styles['property-suggested-item-image-main-element']}
        src={Config.getImageUrl(img.path)}
        alt={data.slug}
      />),
    }));
  };

  return (
    <div className={styles['property-suggested-item']}>
      <Link href={`/en/properties/${data.slug}`} passHref>
        <a>
          <div>
            <div className={styles['property-suggested-item-section-image']}>
              <div className={styles['property-suggested-item-profile']}>
                <PropertyAgentInfos agent={agent} agency={agency} />
              </div>
              <div>
                <div className={styles['property-suggested-item-image-headband']} />
                <div className={styles['property-suggested-item-image-main']}>
                  <MyPZCarousel
                    items={renderImageCarousel()}
                  />
                </div>
              </div>
            </div>
            <div className={styles['property-suggested-item-info']}>
              <div className={styles['property-suggested-item-info-price']}>
                <PropertyPrice value={data.price} type={data.businessType} />
              </div>
              <div className={styles['property-suggested-item-info-title']} title={data.title}>{data.title}</div>
              <div className={styles['property-suggested-item-info-location']}>
                <PropertyLocation value={data.locationName} />
              </div>
              <div className={styles['property-suggested-item-info-details']}>
                <PropertyFeatures
                  bedroom={data.bedrooms}
                  bathroom={data.bathrooms}
                  size={data.size}
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PropertySuggestedItem;
