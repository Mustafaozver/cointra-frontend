import React from 'react';

import styles from './PropertiesLuxuryPage.module.scss';

import { MyPZContainer, MyPZButton } from '../../../mypzkit';
import FormLuxuryHelp from '../../../components/form/luxuryHelp/FormLuxuryHelp';

const dataImages = [
  {
    src: '/images/zeekeez-luxury-villas-sale.png',
    alt: 'zeekeez-luxury-villas-sale',
    text: 'Villas for sale',
  },
  {
    src: '/images/zeekeez-luxury-villas-rent.png',
    alt: 'zeekeez-luxury-villas-rent',
    text: 'Villas for rent',
  },
  {
    src: '/images/zeekeez-luxury-penthouse-sale.png',
    alt: 'zeekeez-luxury-penthouse-sale',
    text: 'Penthouses for sale',
  },
  {
    src: '/images/zeekeez-luxury-penthouse-rent.png',
    alt: 'zeekeez-luxury-penthouse-rent',
    text: 'Penthouses for rent',
  },
  {
    src: '/images/zeekeez-luxury-apartments-sale.png',
    alt: 'zeekeez-luxury-apartments-sale',
    text: 'Apartments for sale',
  },
  {
    src: '/images/zeekeez-luxury-apartments-rent.png',
    alt: 'zeekeez-luxury-apartments-rent',
    text: 'Apartments for rent',
  },
];

const PropertiesLuxuryPage = () => {
  const renderImage = () => dataImages.map((di) => (
    <div className={styles['page-properties-luxury__section-image__luxury']} key={di.alt}>
      <div className={styles['section-image__luxury__button']}>
        <MyPZButton>{di.text}</MyPZButton>
      </div>
      <img src={di.src} alt={di.alt} />
    </div>
  ));

  return (
    <div className={styles['page-properties-luxury']}>
      <MyPZContainer>
        <h1>Luxury Properties in the UAE</h1>
        <span className={styles['page-properties-luxury__description']}>
          Search For Uae’s Finest Luxury Homes For Sale And For Rent :
          Villas, Apartments, Flats, Penthouses, Duplexes, Lofts,
          Downtown Homes, Island Homes, Golf Homes, Beach Homes, Lake Homes,
          Desert Homes, Hotel Apartments, Residences, Resorts And More
        </span>
        <p>
          Our Luxury Brokers select the best luxury properties for sale and for rent in Dubai,
          Abu Dhabi, Sharjah, Ajman and more across the United Arab Emirates.
          The Luxury Homes listings offers a range of luxury lifestyle options.
          Your premier portfolio for UAE’s Luxury Homes Properties.
        </p>
        <h1>Explore the extraordinary Luxury Properties</h1>
        <div className={styles['page-properties-luxury__section-image']}>
          {renderImage()}
        </div>
        <div className={styles['page-properties-luxury__help']}>
          <h1>Need help?</h1>
          <p>You have specific expectations? Challenge us and send us your request.</p>
          <div className={styles['page-properties-luxury__help-form']}>
            <FormLuxuryHelp />
          </div>
        </div>
        <div className={styles['page-properties-luxury__content']}>
          <h1>The Most Luxuries Properties in Dubai</h1>
          <h4>
            The Discovery Of Oil In Dubai Was A Major Turnaround
            In Its Transformation Making It The Most Popular Emirate In The UAE.
            A Lot Of Residents And Tourists Who Can Afford To Spend Lavishly
            Don’t Withhold The Desire To Do So.
            Investment, However, Became The Norm When Luxurious Properties And Unimaginable
            Architectural Designs Were Brought To Life.
            Various Communities Were Developed Within
            A Span Of 20 Years For Wealthy Individuals Willing To Invest.
          </h4>
          <p>
            This article, therefore, highlights the most expensive
            properties in various communities in Dubai as at the year 2020
          </p>
          <div className={styles['page-properties-luxury__content__separator']} />
          <div className={styles['page-properties-luxury__content-location']}>
            <h1>Palm Jumeirah</h1>
            <p>
              A lot can be said about this well-structured man-made
              island with a spectacular palm tree shape when viewed from the sky.
              Palm Jumeirah is one of the most sensational destinations for investors
              and renters for several reasons such as – the skyline,
              amenities, the captivating view of the city, classic hotels,
              spacious properties, a family-friendly environment,
              and a variety of attractions to visit.
              Since it was established in 2007,
              it has been the most visited and invested island in the city
              by A-list celebrities.
            </p>
            <h4>The most expensive, deluxe properties within this area include:</h4>
            <div className={styles['page-properties-luxury__content-location__header']}>
              <h1 className={styles['page-properties-luxury__content-location__header-main']}>
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
                VILLAS
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
              </h1>
              <p>
                The iconic designs of some villas in this community will leave you in awe.
                The villas are built to exceptional standards and styles for your convenience.
                Most of these villas come with luxurious
                amenities such as floor-to-ceiling glass windows
                for a charming view, more parking spaces than a regular villa, Jacuzzi,
                sauna, gymnasium,
                infinity pool, and a separate guest house for your special guests.
                Some examples of these villas include:
              </p>
            </div>
            <div className={styles['page-properties-luxury__content-location__items']}>
              <div className={styles['page-properties-luxury__content-location__item-3']}>
                <h2>Signature Villa</h2>
                <p>
                  The iconic designs of some villas in this community will leave you in awe.
                  The villas are built to exceptional standards and styles for your convenience.
                  Most of these villas come with luxurious amenities such as
                  floor-to-ceiling glass windows for a charming view,
                  more parking spaces than a regular villa, Jacuzzi, sauna, gymnasium,
                  infinity pool, and a separate guest house for your special guests.
                  Some examples of these villas include:
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__item-3']}>
                <h2>Serviced Villa</h2>
                <p>
                  The iconic designs of some villas in this community will leave you in awe.
                  The villas are built to exceptional standards and styles for your convenience.
                  Most of these villas come with luxurious amenities such as
                  floor-to-ceiling glass windows for a charming view,
                  more parking spaces than a regular villa,
                  Jacuzzi, sauna, gymnasium, infinity pool,
                  and a separate guest house for your special guests.
                  Some examples of these villas include:
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__item-3']}>
                <h2>XXII Carat Club Villa</h2>
                <p>
                  The iconic designs of some villas in this community will leave you in awe.
                  The villas are built to exceptional standards and styles for your convenience.
                  Most of these villas come with luxurious amenities such as
                  floor-to-ceiling glass windows for a charming view,
                  more parking spaces than a regular villa, Jacuzzi, sauna,
                  gymnasium, infinity pool, and a separate guest house for your special guests.
                  Some examples of these villas include:
                </p>
              </div>
            </div>
            <div className={styles['page-properties-luxury__content-location__header']}>
              <h1 className={styles['page-properties-luxury__content-location__header-main']}>
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
                APARTMENT
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
              </h1>
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>5-bedroom apartments in Palm Jumeirah</h2>
                <p>
                  Affiliated with the FIVE Palm Jumeirah Hotel,
                  formerly known as Viceroy Hotel and Resort, Dubai,
                  is this spacious and dazzling apartment.
                  This luxurious property boasts of an enthralling interior
                  with a jaw-dropping view of Palm Jumeirah.
                  These spaciously designed apartments have amenities like a private garden,
                  outdoor Jacuzzi, and ultra-modern kitchens.
                  The property is suitable for families to live in
                  and have a memorable experience.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>City Walk</h2>
                <p>
                  Home to exorbitant restaurants, high-end brands,
                  and famous places of attraction is this open community.
                  This area is well known due to its European-themed design making it a
                  “western city” within the emirate.
                  It is a hot spot due to its remarkable amenities,
                  and its proximity to the transportation system and other vibrant communities.
                  Apartments in City Walk have usually between 1 and 4 bedrooms with
                  an additional maid’s room.
                  The most luxurious property in City Walk is Building 6b,
                  a fully furnished serviced duplex in the neighborhood suitable for families.
                  Basic features of this property include house-keeping, contemporary design,
                  an elegant and fully furnished kitchen, floor-to-ceiling windows, a maid’s room,
                  a pool, a sauna, and a steaming room, a gym, reception service,
                  play areas for kids, and close proximity to malls.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Dubai Marina</h2>
                <p>
                  A stylish community within the vibrant city is the Dubai Marina.
                  This community is well known for its man-made canal,
                  vivid skyline, skyscrapers, and residents with a luxurious lifestyle.
                  Its nearness to Palm Jumeirah makes it a great place of interest.
                  Properties in this community are generally exquisite, highly-priced,
                  mostly fully furnished, and have an array of contemporary architectural
                  designs making it a trendy community to invest and live in.
                  Some of the most exotic properties include
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__items']}>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Cayan Tower</h2>
                  <p>
                    A family-friendly fully furnished apartment built to the taste of residents.
                    This 3-bedroom penthouse provides its residents with a unique 180-degree
                    view of the entire Palm Jumeirah, Bluewaters Island, and Dubai Marina.
                    From the hallway to the penthouse,
                    you will be taken through a world of glamour.
                    Elegant amenities in this property include a semi-open
                    kitchen leading to the main room, a maid’s room, a private pool,
                    a well-situated dressing room, and a balcony that
                    shows the awesome design of the city
                  </p>
                </div>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Emirate Crown</h2>
                  <p>
                    Having a befitting 3 bedroom spacious enough to give the extra
                    comfort of a study and room for a maid is what most elite renters
                    and investors opt for. With an entirely furnished gourmet kitchen,
                    living and dining room, families won’t want to miss this offer.
                    The view from this apartment shows the Dubai Eye and sea view.
                    The 3881 sq. ft. apartment offers enchanting amenities such as a gym,
                    reception services, a swimming pool, a sauna, and barbecue space.
                    All bedrooms are en suite. Residents have the luxury of shopping,
                    schooling, and access to great medical facilities within the community.
                  </p>
                </div>
              </div>
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Downtown Dubai</h2>
                <p>
                  Downtown Dubai is home to the tallest building in the world –
                  The Burj Khalifa, the largest mall – The Dubai Mall,
                  and is one of the most visited communities by tourists.
                  Residents and investors choose this location because it is a
                  central point to other communities. One of the most expensive properties is
                  the 118 Duplex penthouse. According to most real estate websites,
                  this is the most expensive and valuable property in Dubai.
                  The property is limited in apartments and penthouses but offers
                  mind-blowing interior design – floor-to-ceiling windows with a panoramic
                  view of the vibrant city, a stylish kitchen, ornamented balcony,
                  and terraces with spectacular architectural design. With its 11,598 sq. ft.
                  area and internal lift, residents of
                  the 6-bedroom penthouse can live extravagantly.
                  Its proximity to the Dubai mall makes it of great interest.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Dubai Silicon Oasis</h2>
                <p>
                  Downtown Dubai is home to the tallest building in the world –
                  The Burj Khalifa, the largest mall –
                  The Dubai Mall, and is one of the most visited communities by tourists.
                  Residents and investors choose this location because
                  it is a central point to other communities.
                  One of the most expensive properties is the 118 Duplex penthouse.
                  According to most real estate websites,
                  this is the most expensive and valuable property in Dubai.
                  The property is limited in apartments and penthouses
                  but offers mind-blowing interior design – floor-to-ceiling windows
                  with a panoramic view of the vibrant city, a stylish kitchen,
                  ornamented balcony, and terraces with spectacular architectural
                  design. With its 11,598 sq. ft. area and internal lift, residents of
                  the 6-bedroom penthouse can live extravagantly.
                  Its proximity to the Dubai mall makes it of great interest.
                </p>
              </div>
            </div>
            <div className={styles['page-properties-luxury__content-location__header']}>
              <h1 className={styles['page-properties-luxury__content-location__header-main']}>
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
                VILLAS
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
              </h1>
              <div className={styles['page-properties-luxury__content-location__items']}>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Semmer Villas</h2>
                  <p>
                    In a tranquil and serene environment away from the bustling part
                    of the city are these standalone villas.
                    It is an ideal home for conservative families and has all
                    the facilities needed to make the living experience peaceful –
                    schools, hospitals, and malls. The villas here have usually either
                    3 or 4 bedrooms and are equipped with a garage, kids play area,
                    a swimming pool, a garden, free maintenance, and lots more.
                    These spacious 3,100 sq. ft.
                    villas have a top-notch security system.
                  </p>
                </div>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Cedre Villa</h2>
                  <p>
                    Just like Semmer Villas, Cedre Villas consist of three types of
                    contemporary houses which are called the Twin,
                    Town, and Executive villas. These villas of 3900 Sq. ft.
                    have either 3, 4, or 5 bedrooms.
                    The private nature of this neighborhood gives residents
                    the luxury of a tranquil environment with access to
                    a variety of facilities. The buildings are quite simple in design
                    with spacious gardens, a maid’s room, a study, a balcony, and a garage.
                    Residents have access to various restaurants and cafés and a mini-mall.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['page-properties-luxury__content-location__header']}>
              <h1 className={styles['page-properties-luxury__content-location__header-main']}>
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
                APARTMENT
                <div className={styles['page-properties-luxury__content-location__header-main__trait']} />
              </h1>
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Bingatti</h2>
                <p>
                  Prestigious new property in Dubai Silicon Oasis is the Bingatti building.
                  It is known for its spectacular architectural design, unique white,
                  and orange color, and western interior. Although Bingatti is a
                  family-friendly residence, highly paid working professionals and wealthy
                  students are not excluded from renting this property. The amenities in this
                  building include – an ultra-modern closed kitchen, a maid’s room, a study,
                  a gym, a swimming pool, and proximity to schools, supermarkets, restaurants,
                  hospitals and offices with a 2200 sq. ft. area.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Emirate Hills</h2>
                <p>
                  For nature lovers, Emirate Hills is one beautiful community
                  you would want to call home. Being an expensive and well-designed
                  community with the finest of materials, Emirate Hills is undoubtedly
                  for the prim and proper. This lush villa boasts of very modern technology
                  which is, the ability to control devices in the home from anywhere within
                  the vicinity, how smart is that? In awe of the property yet? Wait till you
                  see the view of the golf course and
                  peaceful greenery oozing mother nature at its peak.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Business Bay</h2>
                <p>
                  One of the most sought after commercial and residential
                  areas is this vibrant community.
                  This stylishly designed neighborhood a small distance away
                  from downtown Dubai has fantastic architectural structures
                  that wow its residents. One of the most expensive apartments
                  in this location is the Volante Tower. The elegance of this
                  apartment begins from its proximity to the Dubai Canal to a
                  spacious balcony and contemporary interior which makes it an
                  ideal location to live in. Some other reasons to live in this
                  property are its unique interior design like the master’s suite
                  having its own living area, floor-to-ceiling windows with a great
                  view of the skyline which is certainly suitable for a variety of lifestyles.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>District One</h2>
                <p>
                  District One Residences is a world-class exclusive community
                  which consists of one, two, and three-bedroom apartments, villas of up to 7
                  bedrooms, and mansions of up to 7 bedrooms as well. Its design exhibits luxury
                  with a ceiling-to-floor window showing a view of the vicinity.
                  You can watch the sunrise and set from this location. The basic amenities in
                  this community include an infinity pool, reception and concierge service,
                  Jacuzzi, gymnasium, swimming pool, sauna, and game rooms.
                  This community has villas of three models – Contemporary,
                  Modern Arabic, and Mediterranean styles.
                </p>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
              <div className={styles['page-properties-luxury__content-location__header']}>
                <h2>Jumeirah Golf Estate</h2>
                <p>
                  Looking for a suitable home to retire to? Jumeirah Golf Estates has all
                  you need. The features of this area with lush greenery make it of elite
                  standard. This family-friendly estate provides extra comfort and safety
                  to its residents. Some facilities well suited for this haven include a
                  variety of restaurants, golf academy, and recreational facilities with a
                  deluxe feel. Some distance away are schools, hospitals, and malls which
                  residents of the estate can access. Two major outstanding properties of
                  the class include:
                </p>
              </div>
              <div className={styles['page-properties-luxury__content-location__items']}>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Redwood Avenue</h2>
                  <p>
                    which includes unfurnished yet ready to move in 8286 sq. ft. villas.
                    These exclusive 5-bedroom properties are designed to give a western
                    feel and contemporary luxury. They have the latest interior designs,
                    gigantic basements for entertainment, garages, and pools.
                  </p>
                </div>
                <div className={styles['page-properties-luxury__content-location__item-2']}>
                  <h2>Wildflower Mansion</h2>
                  <p>
                    another alluring property, is a professionally designed 23,000 sq. ft. mansion.
                    With its must-see interior and detailed 6 bedrooms, residents are treated to
                    a comfortable home. The view overlooking the golf course is breathtaking.
                    Most of the amenities in this property are contemporary such as a Jacuzzi,
                    home theatre, a guest house, gym, courtyard pool for relaxation, and so on.
                    The features of this mansion show that it was modeled with a
                    potential resident in mind.
                  </p>
                </div>
              </div>
              <div className={styles['page-properties-luxury__content__separator']} />
            </div>
            <h5>
              In Conclusion, You Can Get Started On Investing Or Renting One Of These Luxurious
              Properties By Searching zeekeez.com.
              <br />
              This Real Estate Property Website Features Several Of The Most Prestigious Homes.
            </h5>
          </div>
        </div>
      </MyPZContainer>
    </div>
  );
};

export default PropertiesLuxuryPage;
