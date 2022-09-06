import React, { useContext, useEffect } from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';

import styles from './HomePage.module.scss';

import { MyPZContainer, MyPZButton, MyPZShowMore, MyPZLink } from '../../mypzkit';
import PropertiesFilter from '../../components/propertiesFilters/PropertiesFilters';
import SeoLinks from '../../components/seo/links/SeoLinks';
import { filtersToParams } from '../../helpers/propertyFilterHelper';
import { FiltersContext } from '../../context/filters/FiltersContext';
import { usePrevious } from '../../hooks/customHooks';
import storageManager from '../../storage/storageManager';
import { LoginContext } from '../../context/login/LoginContext';
import PropertySuggestedItem from '../../components/properties/propertySuggestedItem/PropertySuggestedItem';

const HomePage = (props) => {
  const { suggestedProperties } = props;

  const [propertiesFilters, _, isReset, resetFilters] = useContext(FiltersContext);
  const [loginInfos, setLoginInfos] = useContext(LoginContext);
  const previousPropertiesFilters = usePrevious(propertiesFilters);

  const router = useRouter();

  useEffect(() => {
    resetFilters();
  }, []);

  useEffect(() => {
    if (
      !previousPropertiesFilters
      || JSON.stringify(previousPropertiesFilters) === JSON.stringify(propertiesFilters)
    ) {
      return null;
    }

    if (isReset()) {
      return null;
    }

    const filterDiff = getFilterDiff();
    const url = `/en/${propertiesFilters.businessType}/properties-for-${propertiesFilters.businessType}`;
    const newUrl = queryString.stringifyUrl({
      url,
      query: filtersToParams(filterDiff),
    });

    return router.push(newUrl);
  }, [propertiesFilters]);

  const onCreateAccountButtonClick = (e) => {
    e.preventDefault();

    if (storageManager.isLogged()) {
      return;
    }

    setLoginInfos({
      ...loginInfos,
      isPopupOpen: true,
    });
  }

  const getFilterDiff = () => {
    let filterDiff = { ...propertiesFilters };

    if (!previousPropertiesFilters) {
      return filterDiff;
    }

    filterDiff = Object.keys(filterDiff).reduce((acc, key) => {
      const current = typeof filterDiff[key] === 'object' ? JSON.stringify(filterDiff[key]) : filterDiff[key];
      const other = typeof previousPropertiesFilters[key] === 'object' ? JSON.stringify(previousPropertiesFilters[key]) : previousPropertiesFilters[key];
      if (current === other) {
        delete filterDiff[key];
      }
      return filterDiff;
    }, filterDiff);

    return filterDiff;
  };

  const renderFilterProps = () => {
    return (
      <MyPZContainer>
        <div className={styles['home-page__header']}>
          <span className={styles['home-page__baseline']}>Find, Book, Move.</span>
          <h2 className={styles['home-page__baseline-2']}>Find your next home
            in Dubai and in the UAE</h2>
          <div className={styles['home-page__header-filter']}>
            <PropertiesFilter/>
          </div>
        </div>
      </MyPZContainer>
    );
  };

  const renderSuggestionItem = (property) => {
    return (
      <PropertySuggestedItem
        view="grid"
        data={property}
        key={property.slug}
      />
    );
  };

  const renderDescription = () => {
    return (<MyPZContainer>
      <div className={styles['home-page__description']}>
        <div>“Home is where the heart is”. Our mission is to help everyone find their nest.</div>
        <br/>
        <div>Whether you’re just beginning your <strong>property journey</strong> or have had years of experience, zeekeez is the number one place for people to explore, research and share their passion for the <strong>UAE property market</strong>.</div>
        <br/>
        <div>Whoever you are, local or expat, <strong>buyer</strong> or <strong>seller</strong>, <strong>landlord</strong> or <strong>tenant</strong>, <strong>agent</strong> or <strong>developer</strong>, or simple curious, zeekeez is here to empower you by making all things home simple, efficient and stressless.</div>
      </div>
    </MyPZContainer>);
  };

  const renderSuggestions = () => {
    return null;
    // TODO: put back suggestions once performance is better
    return (<div>
      <MyPZContainer>
        <h2 className={styles['home-page__section-title']}>Suggested properties in Dubai for you</h2>
        <div className={styles['home-page__suggested-properties']}>
          {suggestedProperties.map(renderSuggestionItem)}
          <div className={styles['home-page__suggested-ghost-item']} />
        </div>
      </MyPZContainer>
    </div>);
  };

  const renderHowItWorks = () => {
    return (<div className={`${styles['home-page__section']} ${styles['home-page__section-odd']}`}>
      <MyPZContainer>
        <h2 className={styles['home-page__section-title-center']}>Zeekeez – 1<sup>st</sup> All-In-One Property Platform</h2>
        <div className={styles['home-page__section-sub-title']}>How it works?</div>
        <div className={styles['home-page__how-it-work-group']}>
          <div className={styles['home-page__how-it-work-item']}>
            <div className={styles['home-page__how-it-work-item-icon']}>
              <img src="/images/homepage/free-account.png" alt="free-account" />
            </div>
            <div>
              <div className={styles['home-page__how-it-work-item-title']}>Create your Free account</div>
              <div className={styles['home-page__how-it-work-item-description']}>Register on Zeekeez and set up your profile in a few minutes</div>
            </div>
          </div>
          <div className={styles['home-page__how-it-work-item']}>
            <div className={styles['home-page__how-it-work-item-icon']}>
              <img src="/images/homepage/account-settings.png" alt="account-setting" />
            </div>
            <div>
              <div className={styles['home-page__how-it-work-item-title']}>Select your property settings</div>
              <div className={styles['home-page__how-it-work-item-description']}>Enter your infos</div>
            </div>
          </div>
          <div className={styles['home-page__how-it-work-item']}>
            <div className={styles['home-page__how-it-work-item-icon']}>
              <img src="/images/homepage/portal-share.png" alt="portal-share" />
            </div>
            <div>
              <div className={styles['home-page__how-it-work-item-title']}>Share your requirements</div>
              <div className={styles['home-page__how-it-work-item-description']}>Communicate your needs during each search</div>
            </div>
          </div>
        </div>
        <div className={styles['home-page__how-it-work-button-container']}>
          <div className={styles['home-page__how-it-work-button']}>
            <MyPZButton onClick={onCreateAccountButtonClick}>Create your FREE account in minutes</MyPZButton>
          </div>
        </div>
      </MyPZContainer>
    </div>);
  };

  const renderWhyZeekeez = () => {
    return (<div className={styles['home-page__section']}>
      <MyPZContainer>
        <div className={styles['home-page__why-zeekeez']}>
          <div className={styles['home-page__why-zeekeez-img']}>
            <img src="images/homepage/screen.jpg" alt="screen" />
          </div>
          <div>
            <div className={styles['home-page__why-zeekeez-text']}>
              <MyPZShowMore collapsedHeight="15rem" >
                <h2 className={styles['home-page__section-title']}>Why zeekeez – the new UAE’s home finder?</h2>
                <div>Zeekeez is the 1<sup>st</sup> <strong>UAE’s Property Portal</strong> for people to <strong>explore</strong>, <strong>research</strong> and <strong>share</strong> their interests for the UAE property market :</div>
                <div>
                  <ul className={styles['home-page__why-zeekeez-links']}>
                    <li>
                      <strong className={styles['home-page__why-zeekeez-link-item']}><MyPZLink to="/en/sale/properties-for-sale-in-dubai" linkType="simple">Properties for sale in Dubai</MyPZLink></strong>
                      <span>and in the UAE : Apartments, Villas, Duplexes, Studios, 1 Bedroom, and more in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain...</span>
                    </li>
                    <li>
                      <strong className={styles['home-page__why-zeekeez-link-item']}><MyPZLink to="/en/rent/properties-for-rent-in-dubai" linkType="simple">Properties for rent in Dubai</MyPZLink></strong>
                      <span>and in the UAE : Flats, Lofts, Apartments, Houses, Townhouses, Villas, 1 Bedroom, 3 Bedrooms, and more in Downtown Dubai, Palm Jumeirah, Dubai Marina, Mirdiff, Arabian Ranches, Burj Khalifa, Dubai Land, Dubai Creek, Sports City, International City...</span>
                    </li>
                    <li>
                      <strong className={styles['home-page__why-zeekeez-link-item']}><MyPZLink to="/en/rent/luxury-properties-for-rent-in-uae" linkType="simple">Luxury Properties in Dubai</MyPZLink></strong>
                      <span>and in the UAE : Luxury Villas with private beach, Huge Penthouses, Prestigious Houses with sea-view, Luxurious Apartments with sea-view, Exclusive Villas with private pool, Top Panoramic Flats with terrace, Luxury residences, Beach residences, Apartments with private pool, Luxurious Homes, Beachfront villas and more in Palm Jumeirah, Emirates Hills, Jumeirah Golf Estates, Downtown Dubai, City Walk, Sheikh Zayed, Burj Khalifa, Jumeirah Lake Towers, Blue Waters, and all UAE communities.</span>
                    </li>
                    <li>
                      <strong className={styles['home-page__why-zeekeez-link-item']}><MyPZLink to="/en/sale/commercial-for-sale-in-uae" linkType="simple">Commercial in Dubai</MyPZLink></strong>
                      <span>and in the UAE : Offices, Stores, Warehouses, Full Floors, Corporate buildings, Plots, Commercial Real Estate, Commercial Property, Commercial for lease, and more in Dubai Downtown, Dubai Media City, Dubai Internet City, Silicon Oasis, Business Bay, Al Qoz, Bur Dubai, Deira, Dubai Design District, Sharjah, Jumeirah Lake Towers, Jebel Ali and all emirates.</span>
                    </li>
                  </ul>
                </div>

                <h2 className={styles['home-page__section-title']}>A proptech company for individuals and professionals</h2>
                <div>Zeekeez is a UAE <strong>Proptech company</strong>. We help both <strong>individuals</strong> and <strong>professionals</strong> to get the most complete and detailed information anytime, anywhere, with our range of innovative digital solutions – website, apps, to help you make better decisions. We tailored an intuitive, smart and designed property search experience in addition to new exclusive features.</div>
                <div>
                  <ul className={styles['home-page__why-zeekeez-links']}>
                    <li><span>Free individual account</span></li>
                    <li><span>Best technology for an unbeatable user experience (fast, stable, high performance...)</span></li>
                    <li><span>New UX/UI for an intuitive user journey</span></li>
                    <li><span>Best confidentiality for your data, we are not backed by agencies</span></li>
                  </ul>
                </div>

                <h2 className={styles['home-page__section-title']}>A property website in the UAE connecting buyers, sellers, tenants, agents and developers</h2>
                <div>zeekeez is a <strong>property website</strong> in the UAE connecting buyers, sellers, tenants, agents and developers built by expats who are tired by basic portals, lack of transparency and hidden properties. We are not just another portal, we decided to help millions of <strong>residents</strong> who live in Dubai, Abu Dhabi and in the UAE by providing unprecedented user experience, innovative features and the strongest technology. As an outsider, we rise to the challenge to develop during few years zeekeez platform, and we are proud to reveal it today.</div>
                <br/>
                <div>Not only! We decided to help thousands of agents by enabling a disruptive access in order to promote all their listings without breaking the bank.</div>
                <br/>
                <div>Share zeekeez with your family, your friends, your colleagues and neighbors whatever you are looking to buy a property, rent a property or search your next headquarter. Feel free to share with us your feedback.</div>
                <br/>

                <div><strong>Can I find exclusives properties on Zeekeez?</strong></div>
                <div>Yes! Zeekeez enables Real Estate Brokers to promote all their property listings on Real Estate market. From Property management to leasing, buying and renting property, Brokerage companies are here to assist you. They own multiple-listings from Emaar, Damac, Meeras, Sobha, Nakheel, whatever full furnished or Off-Plan. Real Estate Agencies helps you for the valuation of your residential property. Property prices are following by Dubai Land Department. Single-Family, Multifamily or recently relocated in the UAE, your family-home is here. Search your home in few clicks!</div>
                <br/>
                <div><strong>Is Zeekeez offering all type of properties in Dubai?</strong></div>
                <div>Our Property Portal is promoting thousands of different properties: Apartments, Villas, Houses, Penthouses, Duplexes, Lofts, Towhouses, Offices, Full floors, Warehouses, Plots and more. A large choice of amenities: private garden, private pool, private terrace, sea-view, beachfront, waterfront, private beach access, private parking, large square-foot… Select your choice through our property finder search engine.</div>
                <br/>
                <div><strong>Where can I buy or rent properties in Dubai?</strong></div>
                <div>It depends of your long-term investment and your budget. If you plan to stay a long time in Dubai, we recommend you to buy a property. If you stay just few years, you should look to rent a property in Dubai. Mortgage loan is possible based on your own professional situation.</div>
              </MyPZShowMore>
            </div>
          </div>
        </div>
      </MyPZContainer>
    </div>);
  };

  const renderLastNews = () => {
    return null;
    // TODO: replace with correct design
    return <div>Last news..</div>;
  };

  const renderSeoLinks = () => {
    return (<MyPZContainer>
      <SeoLinks />
    </MyPZContainer>);
  };

  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page_section-header']}>
        {renderFilterProps()}
      </div>
      <MyPZContainer>
        <h1 className={styles['home-page__title']}>Find properties for rent and for sale in Dubai and in the UAE</h1>
      </MyPZContainer>
      {renderDescription()}
      {renderSuggestions()}
      {renderHowItWorks()}
      {renderWhyZeekeez()}
      {renderLastNews()}
      {renderSeoLinks()}
    </div>
  );
};

export default HomePage;
