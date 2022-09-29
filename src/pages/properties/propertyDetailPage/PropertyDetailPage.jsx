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
import propertyTypesConfig from '../../../data/config/propertyTypesConfig';
import PropertyDetailsAgent from '../../../components/properties/propertyDetailsAgent/PropertyDetailsAgent';
import ContactPopup from '../../../components/popup/contactPopup/ContactPopup';
import config from '../../../config/Config';
import {
  filtersToParams,
  stringifyParams,
} from '../../../helpers/propertyFilterHelper';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeekeez',
  url: 'https://www.zeekeez.com',
  logo: 'https://www.zeekeez.com/images/zeekeez-logo-black.svg',
  description: 'Zeekez.com is the 1st UAE’s Property Portal for people to explore, research and share their interests for the UAE property market.',
  telephone: '+97145781335',
  foundingDate: '2022',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97145781335',
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  sameAs: [
    'https://www.facebook.com/people/Zeekeez/100079499966747/',
    'https://www.instagram.com/zeekeez_official/',
    'https://www.linkedin.com/company/zeekeez',
    'https://www.zeekeez.com/'
  ]
};

const PropertyDetailPage = (props) => {
  const {
    property,
    h1,
    description,
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
  const NavBarBuild = ()=>{
    const arr = [];
    arr.push({ Path: 'Home', Url: '/' });
    switch (property.businessType){
    case 'sale':
      if (property.price > 10000000) arr.push({ Path: 'Luxury Properties for sale in UAE', Url: '/en/sale/luxury-properties-for-sale-in-uae' });
      else arr.push({ Path: 'Properties for sale in the UAE', Url: '/en/sale/properties-for-sale' });
      break;
    case 'rent':
      if (property.price > 500000) arr.push({ Path: 'Luxury Properties for rent in UAE', Url: '/en/rent/luxury-properties-for-rent-in-uae' });
      else arr.push({ Path: 'Properties for rent in the UAE', Url: '/en/rent/properties-for-rent' });
      break;
      defalut:
      //arr.push({ Path: 'Home', Url: '/' });
      break;
    }
    arr.push({ Path: property.title, Url: '/en/properties/' + property.slug });
    return arr;
  };
  const generateSchemaJson = ()=>{
    console.log('property', property);
    var schemaJson = {
      '@context': 'https://schema.org',
      name: property.title,
      description: property.description,
      url: 'https://www.zeekeez.com/en/properties/' + property.slug,
      //image: property.images[0],
      latitude: property.geopoint.lat,
      longitude: property.geopoint.lon,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UAE',
        //addressRegion: property.locations[0].name,
        addressLocality: property.locationName,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: property.geopoint.lat,
        longitude: property.geopoint.lon,
      },
    };
    
    if(property.images.length > 0) schemaJson.image = property.images[0];
    if(property.locations.length > 0) schemaJson.address.addressRegion = property.locations[0].name;
    
    switch(property.type){
    case 'FAC':
    case 'STF':
    case 'LAN':
    case 'OFF':
    case 'RET':
    case 'RES':
    case 'SHP':
    case 'SHW':
    case 'STO':
    case 'WAR':
    case 'BUN': // commercial
      schemaJson['@type'] = 'Apartment';
      schemaJson.floorSize = {
        '@type': 'QuantitativeValue',
		    unitText2: 'SQFT',
		    value: property.size,
      };
      
      break;
    case 'APT':
    case 'COM':
    case 'DUP':
    case 'PEN':
    case 'LFT': // resident
      schemaJson['@type'] = 'Apartment';
      
      schemaJson.floorSize = {
        '@type': 'QuantitativeValue',
		    unitText2: 'SQFT',
		    value: property.size,
      };
      schemaJson.numberOfRooms = property.bedrooms + property.bathrooms;
      schemaJson.numberOfBathroomsTotal = property.bathrooms;
      schemaJson.numberOfBedrooms = property.bedrooms;
      
      break;
    }
    
    switch(property.type){
    case 'BUL':
    case 'FFL':
    case 'HFL':
    case 'HTA':
    case 'TWN':
    case 'VIL':
    case 'BUI':
    case 'HOT': // both
      schemaJson['@type'] = 'SingleFamilyResidence';
      schemaJson.floorSize = {
        '@type': 'QuantitativeValue',
		    unitText2: 'SQFT',
		    value: property.size,
      };
      schemaJson.numberOfRooms = property.bedrooms + property.bathrooms;
      schemaJson.numberOfBathroomsTotal = property.bathrooms;
      schemaJson.numberOfBedrooms = property.bedrooms;
      break;
    }
    console.log('schemaJson', schemaJson);
    return(<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />);
  };
  return (
    <div className={styles['property-detail-page']}>
      {generateSchemaJson()}
      <MyPZContainer>
        <NavigationBar
          Paths={NavBarBuild()}
        ></NavigationBar>
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
