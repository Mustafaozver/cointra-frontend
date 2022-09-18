import React, { useState, useEffect } from 'react';

import styles from './FavoritesListPage.module.scss';

import { MyPZContainer, MyPZPagination } from '../../../mypzkit';
import { contactAgent, getPropertyEmail } from '../../../api/properties/propertiesApi';
import { getFavorites } from '../../../api/favorites/favoritesApi';
import PropertyItem from '../../../components/properties/propertyItem/PropertyItem';
//import PropertyViewSelector from '../../../components/properties/propertyViewSelector/PropertyViewSelector';
import ContactPopup from '../../../components/popup/contactPopup/ContactPopup';
import {
  filtersToParams,
  stringifyParams,
} from '../../../helpers/propertyFilterHelper';
import NavBar from '../../../components/navbar/navbar';

const FavoritesListPage = () => {
  const [properties, setProperties] = useState([]);
  const [paginationData, setPaginationData] = useState(null);
  const [view, setView] = useState('grid');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [isContactSuccess, setIsContactSuccess] = useState(false);
  const [isContactDisabled, setIsContactDisabled] = useState(false);

  useEffect(async () => {
    const propertiesResponse = await getFavorites();
    setProperties(propertiesResponse.data);
    setPaginationData(propertiesResponse.stats);
  }, []);

  const getPropertiesRender = () => {
    if (!properties || properties.length <= 0) {
      return null;
    }

    return properties.map((p) => (
      <PropertyItem
        data={{ ...p, isFavorite: true }}
        key={p.id}
        view={view}
        onEmailClick={onContactOpen(p)}
      />
    ));
  };

  const getPaginationRender = () => {
    if (!paginationData || !paginationData.total || paginationData.total <= 0) {
      return null;
    }

    return (
      <MyPZPagination maxPage={Math.min(paginationData['page-count'], Math.floor(10000 / paginationData['count-per-page']))} currentPage={paginationData.page} onChange={handlePageChange} />
    );
  };

  const handlePageChange = (event, pageNum) => {
    setPaginationData({ ...paginationData, page: pageNum });
    // TODO: change page
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

  const renderSummary = () => {
    if (!paginationData) {
      return null;
    }

    if (!paginationData.total || paginationData.total <= 0) {
      return <span className={styles['properties-list-page-title__none']}>No properties in favorite</span>;
    }

    return (
      <>
        <div className={styles['properties-list-page-title']}>
          {paginationData.total} Properties in favorites
        </div>
        {/* TODO: put back views when we can load images dynamically
        <div className={styles['properties-list-page-summary-right']}>
          <PropertyViewSelector onChange={(value) => setView(value)} view={view} />
        </div>
        */}
      </>
    );
  };

  return (
    <div className={styles['properties-list-page']}>
      <MyPZContainer>
        <NavBar
          Paths={[
            { Path: 'Home', Url: '/' },
            { Path: 'Favorites', Url: '/en/favorites' },
          ]}
        ></NavBar>
        <ContactPopup
          isOpen={isContactOpen}
          onClose={onCloseContactPopup}
          onSubmit={submitContactPopup}
          data={contactData}
          isSuccess={isContactSuccess}
          isDisabled={isContactDisabled}
        />
        <div className={styles['properties-list-page-summary']}>
          {renderSummary()}
        </div>
        <div className={`${styles['properties-list-page-container']} ${styles[`view-${view}`]}`}>
          {getPropertiesRender()}
          {/* Empty div to fill the last column if we have 2 items on 3 columns */}
          <div className={styles['property-list-ghost-item']} />
        </div>
        <div className={styles['properties-list-page-pagination']}>
          {getPaginationRender()}
        </div>
      </MyPZContainer>
    </div>
  );
};

export default FavoritesListPage;
