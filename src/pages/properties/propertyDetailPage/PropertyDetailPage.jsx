import React, { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './PropertyDetailPage.module.scss';

import {
  MyPZContainer,
  MyPZGallery,
  MyPZMap,
  MyPZShowMore,
} from '../../../mypzkit';
import { contactAgent, getPropertyEmail } from '../../../api/properties/propertiesApi';
import PropertyLocation from '../../../components/properties/components/propertyLocation/PropertyLocation';
import PropertyPrice from '../../../components/properties/components/propertyPrice/PropertyPrice';
import PropertyHighlight from '../../../components/properties/propertyHighlight/PropertyHighlight';
import PropertySectionAmenities from '../../../components/properties/propertySectionAmenities/PropertySectionAmenities';
import PropertySectionDetails from '../../../components/properties/propertySectionDetails/PropertySectionDetails';
import PropertyDetailsAgent from '../../../components/properties/propertyDetailsAgent/PropertyDetailsAgent';
import ContactPopup from '../../../components/popup/contactPopup/ContactPopup';
import config from '../../../config/Config';
import {
  filtersToParams,
  stringifyParams,
} from '../../../helpers/propertyFilterHelper';
import NavBar from '../../../components/navbar/navbar';

const PropertyDetailPage = (props) => {
  const {
    property,
    h1,
  } = props;

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [isContactSuccess, setIsContactSuccess] = useState(false);
  const [isContactDisabled, setIsContactDisabled] = useState(false);

  const renderTitle = () => (
    <div className={styles['property-detail-page__title']}>
      <div className={styles['property-detail-page__title-text']}>{property.title}</div>
      <div className={styles['property-detail-page__title-price']}>
        <PropertyPrice value={property.price} type={property.businessType} />
      </div>
      <div className={styles['property-detail-page__title-location']}>
        <PropertyLocation value={property.locationName} />
      </div>
    </div>
  );

  const renderDescription = () => (
    <div className={styles['property-detail-page__box-container']}>
      <div className={styles['property-detail-page__section-title']}>Description</div>
      <div className={styles['property-detail-page__description']}>
        <MyPZShowMore showMoreText="Read More" showLessText="Read Less">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(property.description, {
                allowedTags: ['p', 'br', 'b', 'i', 'em', 'strong'],
                exclusiveFilter: (frame) => frame.tag === 'a',
              }),
            }}
          />
        </MyPZShowMore>
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className={styles['property-detail-page__box-container']}>
      <div className={styles['property-detail-page__section-title']}>Details</div>
      <PropertySectionDetails data={property} />
    </div>
  );

  const getImagesPerFormat = (format) => {
    const res = property.images.filter((i) => i.format === format);
    return res;
  };

  const renderGallery = () => {
    if (!Array.isArray(property.images)
      || (Array.isArray(property.images) && !property.images.length)) {
      return null;
    }

    return (
      <div className={styles['property-detail-page__gallery-container']}>
        <MyPZGallery
          images={
            getImagesPerFormat('big').map((image) => ({
              index: image.id,
              path: image.path,
              name: property.slug,
            }))
          }
          getImageUrl={config.getImageUrl}
        />
      </div>
    );
  };

  const renderHighLight = () => (
    <div className={styles['property-detail-page__box-container']}>
      <PropertyHighlight
        bedroom={property.bedrooms}
        bathroom={property.bathrooms}
        parking={property.parkings}
        size={property.size}
      />
    </div>
  );

  const renderAmenities = () => (
    <div className={styles['property-detail-page__box-container']}>
      <div className={styles['property-detail-page__section-title']}>Amenities</div>
      <PropertySectionAmenities amenities={property.amenities} />
    </div>
  );

  const propertyDetailRender = () => {
    if (!property) {
      return null;
    }
    const lng = parseFloat(property.geopoint.lon);
    const lat = parseFloat(property.geopoint.lat);

    return (
      <div>
        {renderGallery()}
        {renderTitle()}
        <div className={styles['property-detail-page__body']}>
          <MyPZContainer className={styles['property-detail-page__body-main']}>
            {renderHighLight()}
            <h1 className={styles['property-detail-page__title-h1']}>{h1}</h1>
            {renderDescription()}
            {renderDetails()}
            {renderAmenities()}
          </MyPZContainer>
          <MyPZContainer isSmall className={styles['property-detail-page__body-side']}>
            <div className={styles['property-detail-page__agent']}>
              <PropertyDetailsAgent
                agent={property.agent}
                slug={property.slug}
                onEmailClick={onContactOpen}
              />
            </div>
            <div className={styles['property-detail-page__map']}>
              <MyPZMap
                markers={[
                  { lat, lng, title: property.title },
                ]}
                mapHeight="20rem"
                mapPublicKey={config.mapPublicKey}
              />
            </div>
          </MyPZContainer>
        </div>
      </div>
    );
  };

  const onContactOpen = () => {
    setIsContactOpen(true);
    setContactData(property);
    getPropertyEmail(property.slug);
  };

  const submitContactPopup = async (contactAgentData) => {
    setIsContactSuccess(false);
    setIsContactDisabled(true);
    try {
      let userPropertyPreferences = undefined;
      if (contactAgentData.userPropertyPreferences) {
        userPropertyPreferences = filtersToParams(contactAgentData.userPropertyPreferences);
        userPropertyPreferences = stringifyParams(userPropertyPreferences);
        userPropertyPreferences.isDataShared = contactAgentData.userPropertyPreferences.isDataShared;
        userPropertyPreferences.moveDate = contactAgentData.userPropertyPreferences.moveDate;
        userPropertyPreferences.preApproval = contactAgentData.userPropertyPreferences.preApproval;
      }

      await contactAgent({
        propertySlug: contactData.slug,
        ...contactAgentData,
        userPropertyPreferences,
      });
      setIsContactSuccess(true);

      setTimeout(() => {
        setIsContactSuccess(false);
        setIsContactOpen(false);
        setIsContactDisabled(false);
      }, 5000);
    } catch (e) {
      console.log('could not contact agent:', e);
    }
  };

  const onCloseContactPopup = () => {
    setIsContactOpen(false);
    setContactData(null);
  };
  return (
    <div className={styles['property-detail-page']}>
      <MyPZContainer>
        {NavBar({ Paths: [
          { Path: 'Home', Url: '/' },
          { Path: property.title, Url: '/en/properties/' + property.slug },
        ] })}
        <ContactPopup
          isOpen={isContactOpen}
          onClose={onCloseContactPopup}
          onSubmit={submitContactPopup}
          data={contactData}
          isSuccess={isContactSuccess}
          isDisabled={isContactDisabled}
        />
        {propertyDetailRender()}
      </MyPZContainer>
    </div>
  );
};

export default PropertyDetailPage;
