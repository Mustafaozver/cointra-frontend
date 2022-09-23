import React from 'react';
import Head from 'next/head';

import PropertyDetailPage from '../../../src/pages/properties/propertyDetailPage/PropertyDetailPage';
import { getProperty } from '../../../src/api/properties/propertiesApi';
import propertyTypesConfig from '../../../src/data/config/propertyTypesConfig';

export async function getServerSideProps(context) {
  const property = await getProperty(context.params.slug);

  let bedroomTitle = 'studio';
  if (property.bedrooms > 0) {
    bedroomTitle = `${property.bedrooms} bedroom`;
    if (property.bedrooms > 1) {
      bedroomTitle = bedroomTitle + 's';
    }
  }
  const propertyType = propertyTypesConfig.find((p) => p.code === property.type);

  let title = '';
  let metaDescription = '';
  let h1 = '';
  if (property.category === 'residential') {
    title = `${property.id} | ${propertyType.value} ${bedroomTitle} ${property.size} sqft for ${property.businessType} in ${property.locationName}`;
    metaDescription = `${property.size} sqft ${propertyType.value} ${bedroomTitle} for ${property.businessType} in ${property.locationName}`;
    h1 = `${propertyType.value} ${bedroomTitle} ${property.size} sqft for ${property.businessType} in ${property.locationName} | Ref: #${property.id}`;
  } else {
    title = `${property.id} | ${propertyType.value} ${property.size} sqft for ${property.businessType} in ${property.locationName}`;
    metaDescription = `${property.size} sqft ${propertyType.value} for ${property.businessType} in ${property.locationName}`;
    h1 = `${propertyType.value} ${property.size} sqft for ${property.businessType} in ${property.locationName} | Ref: #${property.id}`;
  }

  return {
    props: {
      property,
      title,
      metaDescription,
      h1,
    },
  };
};

export default (props) => {
  const {
    property,
    title,
    metaDescription,
    h1,
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription}/>
      </Head>
      <PropertyDetailPage property={property} h1={h1} description={metaDescription}/>
    </>
  );
}
