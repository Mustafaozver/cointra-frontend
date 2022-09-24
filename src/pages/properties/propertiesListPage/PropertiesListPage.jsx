import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import styles from './PropertiesListPage.module.scss';

import { MyPZContainer, MyPZPagination, MyPZCircleLoader, MyPZShowMore } from '../../../mypzkit';
import { contactAgent, getProperties, getPropertyEmail } from '../../../api/properties/propertiesApi';
import {
  filtersToParams,
  getDiffParams,
  stringifyParams,
} from '../../../helpers/propertyFilterHelper';
import { FiltersContext } from '../../../context/filters/FiltersContext';
import PropertyItem from '../../../components/properties/propertyItem/PropertyItem';
// import PropertyViewSelector from '../../../components/properties/propertyViewSelector/PropertyViewSelector';
import PropertySorter from '../../../components/properties/propertySorter/PropertySorter';
import ContactPopup from '../../../components/popup/contactPopup/ContactPopup';
import PropertiesFilters from '../../../components/propertiesFilters/PropertiesFilters';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';

const PropertiesListPage = (props) => {
  const {
    initialFilters,
    data,
    mainTitle,
    seoText,
  } = props;
  const router = useRouter();

  const [propertiesFilters, setPropertiesFilters, , , , isFetched, setIsFetched] = useContext(FiltersContext);
  const [properties, setProperties] = useState(data ? data.properties : []);
  const [paginationData, setPaginationData] = useState(data ? data.pagination : null);
  // TODO: put back views when we can load images dynamically
  // const [view, setView] = useState('grid');
  const view = 'grid';
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [isContactSuccess, setIsContactSuccess] = useState(false);
  const [isContactDisabled, setIsContactDisabled] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (processing || isFetched) {
      return;
    }

    fetchData(propertiesFilters);
  }, [propertiesFilters, router.query]);

  const fetchData = async (filters) => {
    const params = filtersToParams(filters);
    const diffParams = getDiffParams(initialFilters, filters);
    const pathname = `/en/${propertiesFilters.businessType}/properties-for-${propertiesFilters.businessType}`;

    setProcessing(true);
    const propertiesResponse = await getProperties(params);
    setProperties(propertiesResponse.data);
    setPaginationData(propertiesResponse.stats);
    router.push({
      pathname,
      query: filtersToParams(diffParams),
    });

    setProcessing(false);
    setIsFetched(true);
  };

  const getPropertiesRender = () => {
    if (!properties || properties.length <= 0 || processing) {
      return null;
    }

    return properties.map((p) => (
      <PropertyItem data={p} key={p.id} view={view} onEmailClick={onContactOpen(p)} />
    ));
  };

  const getPaginationRender = () => {
    if (!paginationData || processing) {
      return null;
    }

    return (
      <MyPZPagination
        maxPage={Math.min(paginationData['page-count'], Math.floor(10000 / paginationData['count-per-page']))}
        currentPage={paginationData.page}
        onChange={handlePageChange}
        baseUrl={router.asPath}
      />
    );
  };

  const handlePageChange = (e, pageNum) => {
    setPaginationData({ ...paginationData, page: pageNum });

    const newPropertiesFilters = { ...propertiesFilters, page: pageNum };

    if (pageNum <= 1) {
      delete newPropertiesFilters.page;
    }

    setPropertiesFilters(newPropertiesFilters);
  };

  const handleListOrderChange = (selected) => {
    setPropertiesFilters({ ...propertiesFilters, order: selected });
  };

  const onContactOpen = (property) => () => {
    setIsContactOpen(true);
    setContactData(property);
    // TODO: use the fetched email
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

  const renderLoader = () => {
    if (!processing) {
      return null;
    }

    return (
      <div className={styles['properties-list-page__loader']}>
        <MyPZCircleLoader size="10rem" />
      </div>
    );
  };

  return (
    <div className={styles['properties-list-page']}>
      <MyPZContainer>
        <ContactPopup
          isOpen={isContactOpen}
          onClose={onCloseContactPopup}
          onSubmit={submitContactPopup}
          data={contactData}
          isSuccess={isContactSuccess}
          isDisabled={isContactDisabled}
        />
        <div className={styles['properties-list-page-filters']}>
          <PropertiesFilters />
        </div>
        <NavigationBar
          Paths={[
            { Path: 'Home', Url: '/' },
            { Path: mainTitle, Url: router.asPath },
          ]}
        ></NavigationBar>
        <div className={styles['properties-list-page-summary']}>
          <h1 className={styles['properties-list-page-title']}>
            {`${paginationData ? paginationData.total : 0} ${mainTitle}`}
          </h1>
          <div className={styles['properties-list-page-summary-right']}>
            <PropertySorter value={propertiesFilters.order} onChange={handleListOrderChange} />
            {/* TODO: put back views when we can load images dynamically
            <PropertyViewSelector onChange={(value) => setView(value)} view={view} />
            */}
          </div>
        </div>
        <div className={`${styles['properties-list-page-container']} ${styles[`view-${view}`]}`}>
          {renderLoader()}
          {getPropertiesRender()}
          {/* Empty div to fill the last column if we have 2 items on 3 columns */}
          <div className={styles['property-list-ghost-item']} />
        </div>
        <div className={styles['properties-list-page__pagination']}>
          {getPaginationRender()}
        </div>
        {seoText}
      </MyPZContainer>
    </div>
  );
};

export default PropertiesListPage;
