/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Head from 'next/head';

import PropertiesListPage from '../../../src/pages/properties/propertiesListPage/PropertiesListPage';
import { filtersToParams, paramsToFilters, queryParamsToParams } from '../../../src/helpers/propertyFilterHelper';
import { getProperties } from '../../../src/api/properties/propertiesApi';
import FiltersProvider, { defaultFilters } from '../../../src/context/filters/FiltersContext';
import seoTextStyles from '../../../src/pages/properties/propertiesListPage/PropertiesListSEOText.module.scss';

const pageFilters = { category: 1, businessType: 'rent' };

export async function getServerSideProps(context) {
  const initialFilters = { ...defaultFilters, ...pageFilters };
  const { query } = context;
  const params = queryParamsToParams(query, initialFilters);
  const filters = paramsToFilters(params);
  const propertiesResponse = await getProperties(filtersToParams(filters));

  return {
    props: {
      data: {
        properties: propertiesResponse.data,
        pagination: propertiesResponse.stats,
      },
      filters,
      initialFilters,
      page: filters && filters.page ? filters.page : null,
    },
  };
};

const renderSEOText = (page) => {
  if (page && page > 1) {
    return;
  }

  return (
    <div className={seoTextStyles['property-list-seo-text']}>
      <h2 className={seoTextStyles['property-list-seo-text__head-title']}>Rent properties in Dubai and in the UAE</h2>
      <div className={seoTextStyles['property-list-seo-text__block']}>Dubai, the dream destination for many around the world with its towering skyscrapers, immaculate streets, flashy neighbourhoods and a shimmering lifestyle has consistently enticed expats to move in and call it home. Irrespective of the popular notion of Dubai being one of the most expensive cities to live in, reports have shown that it is relatively cheaper than New York and Hong Kong and offers relatively good value for money.</div>
      <div className={seoTextStyles['property-list-seo-text__block']}>Renting a property in Dubai is not complex either. From salaried expats to entrepreneurs, the city of dreams has something for everyone. In this article we will try to gain a deeper understanding about the nitty gritties of renting a property in Dubai.</div>
      <h3 className={seoTextStyles['property-list-seo-text__title']}>Different types of Rental Properties in Dubai:</h3>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Rental properties in Dubai can be broadly classified into two types-</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>Residential Properties</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>Commercial Properties</div>
      <div className={seoTextStyles['property-list-seo-text__sub-title']}>Residential Properties:</div>
      <div className={seoTextStyles['property-list-seo-text__block']}>From luxury to budget accommodation, Dubai has an excellent portfolio of residential units to suit every need. The popular types of residential properties for renting in Dubai are as follows:</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Apartments-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>The most favored residential properties for rent in Dubai are the apartments.</div>
        <div>Studios and 1,2,3 bedroom apartments:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Ranging from Studios to 3-bedroom units, <span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/apartments-for-rent-in-uae" rel="noreferrer">apartments</a></span> are available in different configurations. Studios mainly comprise of a self-contained unit with a large main space, a kitchenette and toilet. Other bed types have one or more rooms. The apartments mostly come with a bouquet of facilities like shared pools and gym and 24/7 security surveillance.</div>
        <div>Duplexes:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}><span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/properties-for-rent?propertyTypes=DUP" rel="noreferrer">Duplexes</a></span> too are a popular choice for renting apartments. Spread over two floors, duplexes are spacious apartments and gives a taste of living in the villa while encompassing all the benefits of living in a compact apartment. Duplexes are mostly centered in Jumeirah Beach Residence, Jumeirah Village Circle, Silicon Oasis, Dubai Marina, Business Bay and Downtown Dubai.</div>
        <div>Lofts:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Commonly confused with Duplexes, Lofts usually have a smaller second floor which overlooks the first floor of the unit. Duplexes, on the other hand, comprises of two whole floors. Lofts are most popular in Jumeirah Beach Residence, Downtown Dubai and Dubai Marina.</div>
        <div>Hotel Apartments:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Fully furnished <span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/properties-for-rent?propertyTypes=HTA" rel="noreferrer">hotel apartments</a></span> remain a popular choice for short or long term stays in Dubai. They are mostly concentrated on Downtown Dubai, Al Barsha and Barsha Heights with former being the favorite with tourists and expats alike.</div>
        <div>Penthouses:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Penthouses boasts of panoramic views and elegant rooms with walk-in closets, en-suite restrooms, pools, private elevators and a bundle of other amenities. Penthouses can be rented in Palm Jumeirah, Jumeiraxh Beach Residence, Dubai Marina or DIFC. The iconic Burj Khalifa houses few alluring penthouses too!</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Villas-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}><span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/villas-for-rent-in-uae" rel="noreferrer">Villas</a></span> are spacious houses which comes with private gardens, attached garages and bigger living spaces and are perfect for big families. Villas can be attached, semi-detached and detached. Attached villas offer shared facilities whereas semi-detached and detached villas offer more privacy. Tenants interested in living in a villa can find it in two types of developments:</div>
        <div>Villa Communities:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Villa communities in Dubai boasts of picturesque villas with lush green landscaping. Villa communities are relatively large and come with a host of facilities. Some of these villas have splendid views of golf courses, lakes and azure beaches. There are many villa communities in Dubai, however, the most popular ones can be found at Jumeirah, Mirdif, Arabian Ranches, The Springs, Al Barsha, Dubailand and Dubai Hills Estate.</div>
        <div>Villa Compunds:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>In addition to villa communities, villas are also available in smaller compounds in Dubai. Usually the villa compounds are a group of 25 to 50 villas with shared facilities like pools, gyms and in some cases, sports complexes.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Townhouses-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Townhouses are often confused with villas, however, the most important factor that differentiates a townhouse from a villa is that townhouses typically shares a common wall with another unit. On the other hand, most villas are independent properties. Townhouses can be attached or semi-attached and range from 3 to 6 bedroom units. Beautiful townhouses are available on rent in Arabian Ranches, Akoya Oxygen, Jumeirah Village Circle, Dubailand and Jumeirah Golf Estates.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__sub-title']}>Commercial Properties:</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>The possibilities of commercial real estate in Dubai is endless. Let’s take a quick look at the different types of commercial real estate in Dubai.</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Offices-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Both furnished and unfurnished <span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/properties-for-rent?propertyTypes=OFF" rel="noreferrer">office</a></span> spaces are available for rent in Dubai.</div>
        <div>Office Spaces:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>The emirate offers commercial office spaces from as little as 216 sq.ft to a whopping over 45,000 sq. ft. Some of the best areas to rent offices in Dubai includes Business Bay, Sheikh Zayed Road and Jumeirah Lake Towers. </div>
        <div>Co-working spaces:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Co-working spaces are the first choice of business start-ups and entrepreneurs since it entails minimal capital requirements and offers a lot of flexibility. Few noted co-working spaces in Dubai are Our Space, Nook, The Bureau Dubai and the Nest.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Shops, Showrooms and Warehouses-</div>
        <div>Shops:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>From small outlets to large retails spaces, shops can be rented at Business Bay, Dubai Marina, DIFC, Sheikh Zayed Road and most other commercial districts I the city.</div>
        <div>Warehouses:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Dubai has an impressive listing of warehouses available for rent in Dubai. Dubai Investment Parks, Ras Al Khor and Al Quoz are among the best areas to rent warehouses in Dubai.</div>
        <div>Showrooms:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial showrooms for rent in Dubai can be found in Ras Al Khor and Al Quoz.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial Units-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}><span className={seoTextStyles['property-list-seo-text__link']}><a href="/en/rent/commercial-for-rent-in-uae" rel="noreferrer">Commercial</a></span> property of this type perfectly fits the operation of independent small businesses like gyms and spas.</div>
        <div>Commercial Villas:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Jumeirah, Al Safa, Al Wasl and Umm Suqeim houses the best commercial villas in Dubai.</div>
        <div>Commercial Floors:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Spread across commercial towers and business centres, these properties are available for rent in Dubai Internet City, Business Bay and Jumeirah Lake Towers.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial Land and Buildings-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Non-freehold real estate like plots, lands and buildings can also be rented.</div>
        <div>Buildings:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial buildings for rent usually comprise of business centres, hotels, apartment complexes and office buildings. Dubai Investment Parks and Deira have a good collection of commercial buildings in Dubai.</div>
        <div>Plots:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>A variety of commercial plots are available in Jebel Ali, Al Quoz and Al Barsha.</div>
        <div>Land:</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>As a commercial property, there are two types of land available in Dubai- industrial land and mix-use land. Al Quoz, Al Warsan and Jebel Ali Freezone have industrial lands ideal to set up a business. Mix-use lands can be rented at Jumeirah Village Circle, Business Bay and Al Jadaf.</div>
      </div>
      <h3 className={seoTextStyles['property-list-seo-text__title']}>How to rent a property in Dubai?</h3>
      <div className={seoTextStyles['property-list-seo-text__sub-title']}>Residential Properties:</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Select the Apartment-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>The journey to search for the perfect apartment starts online. You can filter the listings on property websites based on your requirements like preferred locality, number of rooms and so on and so forth. It is advisable to start planning at least 3 months ahead and narrow down your preferred properties.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>View the property-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Factors like the property’s proximity to schools, hospitals, supermarkets and public transportation system should be considered. Also, take a note of the building security system, maintenance and all shared facilities.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Negotiate the rent, pay security deposit and reserve the property-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Once you finalize the property, do not forget to negotiate. The landlord or agent may agree to reduce the total rent amount if you pay with fewer number of cheques. To secure the residential unit, a security deposit of 5% of the rental amount has to be paid which will be refunded upon the completion of the lease agreement.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Signing the Contract-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Read the tenancy contract carefully before signing. Once signed and submitted, the rent cheques and agency commission has to be settled. The contract will then be signed by the landlord and both you and your landlord will have a signed copy each. Thereafter you will receive your keys and access cards.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>DEWA Connection-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>For water, electricity and gas connection you would need to connect DEWA by setting up a DEWA account. Passport and tenancy contract copies have to be submitted to <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://www.dewa.gov.ae" target="_blank" rel="noreferrer">Dubai Electricity and Water Authority</a></span> and a refundable deposit with set-up charges has to be paid.</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Learn more about DEWA here: <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://www.dewa.gov.ae/en/about-us/service-guide/consumer-services" target="_blank" rel="noreferrer">https://www.dewa.gov.ae/en/about-us/service-guide/consumer-services</a></span></div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Ejari Registration-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Ejari is a rental portal by <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://dubailand.gov.ae/" target="_blank" rel="noreferrer">RERA</a></span> which aims to perpetuate and upgrade Dubai’s rental market transactions. Registering with Ejari is mandatory for all residents renting in Dubai. The Ejari registration cost is AED 195 for all types of properties. You can <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://dubailand.gov.ae/en/eservices/download-ejari-certificate/" target="_blank" rel="noreferrer">download Ejari Certificate</a></span> online.</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Learn more about Ejari registration here: <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://dubailand.gov.ae/en/eservices/all-services/#/" target="_blank" rel="noreferrer">https://dubailand.gov.ae/en/eservices/all-services/#/</a></span></div>
      </div>
      <div>Commercial Properties:</div>
      <div className={seoTextStyles['property-list-seo-text__block']}>The following tips should be kept in mind before renting a commercial space in Dubai.</div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Keep all documents updated-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>All documents, especially business license have to be kept updated and ready for submission once you decide to rent a commercial space. You can rent a property on-shore or in a free-zone depending on the scope of your license.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Studying the market-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Understanding the real estate market is crucial to decide on the budget and selecting the right location where you want to rent.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Finalize your budget-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Going for units that offer flexible and optimal payment plans will help you better manage your budget.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Choose the right developer-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Always zoom in your search to a list of reputable builders who have proven industry credentials.</div>
      </div>
      <div className={seoTextStyles['property-list-seo-text__list-item']}>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Consult-</div>
        <div className={seoTextStyles['property-list-seo-text__block-small']}>Always seek the consultancy of an established property service provider for advice and guidance.</div>
      </div>
      <h3 className={seoTextStyles['property-list-seo-text__title']}>Popular areas for renting properties in Dubai & Pricing Trends in 2020:</h3>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>From budget to luxury accommodation, Dubai has it all. A study by <span className={seoTextStyles['property-list-seo-text__link']}><a href="https://cavendishmaxwell.com/" target="_blank" rel="noreferrer">Cavendish Maxwell</a></span> reveals the annual rent for apartments has declined by 14% over a year. Villas and townhouses have declined by 10%.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>From studios to two-bedroom residences, the top three communities and neighborhoods that would guarantee you value for money are Dubai World Central (AED 24,000- AED 49,000), Dubai Sports City (AED 33,000- AED 57,000) and Dubai Culture Village (AED 58,000- AED 122,000).</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Apartment rent has also gone down been at favored neighborhoods like Barsha Heights (from AED 38,000), Jumeirah Village Circle (from AED 121,000), Dubai Marina (from AED 53,000), Business Bay (from AED 45,000), Downtown Dubai (from AED 51,000) and Dubai Silicon Oasis (from AED 26,000).</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>The annual rent for hotel apartments in Downtown Dubai starts from AED 70,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Penthouses are available for rent between AED 170,000 to AED 510,000, depending on the area.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>The rent for townhouses starts from AED 72,000. </div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>The swanky villas have also recorded a significant price dip. 3 to 5 bedroom properties are ranging between AED 114,000 to AED 182,000 in Damac Hills, AED 137,000 to AED 152,000 in Dubai Silicon Oasis and AED 135,000 to AED 195,000 in Arabian Ranches.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>These communities are much sought-after due to the posh locality, proximity to all civic amenities and general entertainment areas like indoor and outdoor sports complex and shopping malls.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Prices have gone down for renting commercial properties too. A furnished office for rent in Dubai is available from AED 290,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial shops in Dubai are available for rent from AED 10,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Warehouse rental in Dubai is available from AED 57,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial showrooms for rent in Dubai have a price range of AED 125,000 to AED 5.5M depending on the size of the property.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>The rent for commercial villas are generally between AED 180,000 and AED 2M. Commercial floors have a starting price tag of AED 85,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>To rent commercial buildings tenants are expected to shell out anything between AED 700,000 and AED 29M.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Commercial plots for rent in Dubai are available between AED 85,000 and AED 4.5M.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>When it comes to land, the annual rent for mixed-use commercial land is AED 765,000. For commercial industrial land, the annual budget has to be minimum AED 68,000.</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>Renting a factory in Dubai will cost the tenant anything in excess of AED 600,000 annually. Labor Camps rentals are available on both per person and full room basis, with prices from AED 33,000 to a staggering AED 30M.</div>
      <div className={seoTextStyles['property-list-seo-text__title']}>In conclusion:</div>
      <div className={seoTextStyles['property-list-seo-text__block-small']}>With residential and commercial rents going down, the market is now favorable to set up your dream home or set sail on an entrepreneurial voyage. It might seem to be a complicated task but fret not. We have got your back! Get in touch with us today and leave the worries with our experts to walk you through your property rental journey.</div>
    </div>
  );
};

export default (props) => {
  const {
    data,
    filters,
    initialFilters,
    page,
  } = props;
  const paginationLink = '/en/rent/properties-for-rent?page=';
  const NextLinksRenderer = () => {
    const paginationLinknext = paginationLink + (data.pagination.page + 1);
    if (data.pagination.page < data.pagination['page-count']) return (
      <link rel="next" href={paginationLinknext} />
    );
    else return null;
  };
  const PrevLinksRenderer = () => {
    const paginationLinkprev = paginationLink + (data.pagination.page - 1);
    if(data.pagination.page > 1) return (
      <link rel="prev" href={paginationLinkprev} />
    );
  };
  return (
    <>
      <Head>
        <title>Properties for rent in UAE | Zeekeez</title>
        <meta name="description" content="Properties to rent in UAE. Rent residential properties in UAE : Apartments, Villas, Studios, 1 Bedrooms, Flats, Duplexes, Penthouses… Best deals are here!"/>
        <meta name="keywords" content="Properties for rent in Dubai, properties for rent in UAE, villas for rent in Dubai, apartment to rent in Dubai, villas to rent in Sharjah"/>
        {PrevLinksRenderer()}
        {NextLinksRenderer()}
      </Head>
      <FiltersProvider overrideFilters={filters}>
        <PropertiesListPage
          initialFilters={initialFilters}
          mainTitle="Properties for rent in the UAE"
          data={data}
          seoText={renderSEOText(page)}
        />
      </FiltersProvider>
    </>
  );
};
