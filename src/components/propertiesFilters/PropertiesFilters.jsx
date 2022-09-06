import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import TuneIcon from '@material-ui/icons/Tune';

import styles from './PropertiesFilters.module.scss';

import {
  MyPZButton,
  MyPZModal,
  MyPZContainer,
} from '../../mypzkit';
import PropertyTypeFilter from './propertyTypeFilter/PropertyTypeFilter';
import PropertyBedroomFilter from './propertyBedroomFilter/PropertyBedroomFilter';
import PropertyBathroomFilter from './propertyBathroomFilter/PropertyBathroomFilter';
import PropertyPriceFilter from './propertyPriceFilter/PropertyPriceFilter';
import PropertyAreaFilter from './propertyAreaFilter/PropertyAreaFilter';
import PropertyLocationsFilter from './propertyLocationsFilter/PropertyLocationsFilter';
import PropertyFeaturesFilter from './propertyFeaturesFilter/PropertyFeaturesFilter';
import PropertyCompletionFilter from './propertyCompletionFilter/PropertyCompletionFilter';
import PropertyFurnishFilter from './propertyFurnishFilter/PropertyFurnishFilter';
import ButtonSwitch from '../button/buttonSwitch/ButtonSwitch';
import { FiltersContext, defaultFilters } from '../../context/filters/FiltersContext';

const PropertiesFilters = () => {
  const [allFilters, setAllFilters] = useContext(FiltersContext);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const filtersGroupRef = useRef(null);
  const router = useRouter();

  const handleScroll = () => {
    if (!filtersGroupRef || !filtersGroupRef.current) {
      return;
    }

    const offSet = filtersGroupRef.current.offsetTop + filtersGroupRef.current.offsetHeight - 68;
    if (!offSet) {
      return;
    }
    setIsSticky(window.scrollY > offSet);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCloseModal = () => {
    setIsFilterModalOpen(false);
  };

  const onBusinessTypeChange = (newBusinessType) => {
    if (newBusinessType === allFilters.businessType) {
      return;
    }

    // TODO: keep sharable filters
    router.push(`/en/${newBusinessType}/properties-for-${newBusinessType}`);
  };

  const onAllFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const renderFiltersModal = () => (
    <MyPZModal
      isOpen={isFilterModalOpen}
      onClose={onCloseModal}
    >
      <div className={styles['properties-filters__modal']}>
        {renderLocationFilter(true, true)}
        {renderFilterItem('for', 'Type', (<PropertyTypeFilter />))}
        {renderFilterItem('price', 'Price', (<PropertyPriceFilter />))}
        {renderFilterItem('area', 'Area Sqft', (<PropertyAreaFilter />))}
        {renderFilterItem('bedrooms', 'Bedrooms', (<PropertyBedroomFilter />))}
        {renderFilterItem('bathrooms', 'Bathrooms', (<PropertyBathroomFilter />))}
        {renderFilterItem('furnish', 'Furnishing', (<PropertyFurnishFilter />))}
        {renderFilterItem('completion', 'Completion', (<PropertyCompletionFilter />))}
        {renderFilterItem('features', 'Features', (<PropertyFeaturesFilter />))}
      </div>
    </MyPZModal>
  );

  const renderLocationFilter = (withLabel, withResetFilter = false) => (
    <div className={`${styles['properties-filters__item']} ${styles['properties-filters__item-location']}`}>
      {
        withLabel
        && (
          <div className={styles['properties-filters__label']}>
            <span>Locations</span>
            {withResetFilter && renderResetAll()}
          </div>
        )
      }
      <PropertyLocationsFilter/>
    </div>
  );

  const onResetAll = () => {
    setAllFilters({ ...defaultFilters, businessType: allFilters.businessType });
  };

  const renderResetAll = () => (
    <span className={styles['properties-filters__reset-all']} onClick={onResetAll} onKeyPress={onResetAll} role="button" tabIndex="0">Reset all</span>
  );

  const renderAllFiltersButton = (withResetAll) => (
    <div className={`${styles['properties-filters__item']} ${styles['properties-filters__all-filters']}`}>
      {withResetAll && <div className={styles['properties-filters__label']}>{renderResetAll()}</div>}
      <MyPZButton onClick={onAllFilterClick} buttonstyle="white"><TuneIcon style={{ fontSize: '1.2rem' }} />Filters</MyPZButton>
    </div>
  );

  const renderFilterItem = (className, label, inputRender) => (
    <div className={`${styles['properties-filters__item']} ${styles[`properties-filters__item-${className}`]}`}>
      {label && <div className={styles['properties-filters__label']}>{label}</div>}
      {inputRender}
    </div>
  );

  const renderFiltersGroup = () => (
    <div className={styles['properties-filters__group']} ref={filtersGroupRef}>
      {renderLocationFilter(true)}
      {renderFilterItem('for', 'Type', (<PropertyTypeFilter />))}
      <div className={styles['properties-filters__price-area-group']}>
        {renderFilterItem('price', 'Price', (<PropertyPriceFilter />))}
        {renderFilterItem('area', 'Area Sqft', (<PropertyAreaFilter />))}
      </div>
      <div className={styles['properties-filters__bed-bath-filter-group']}>
        {renderFilterItem('bedrooms', 'Bedrooms', (<PropertyBedroomFilter />))}
        {renderFilterItem('bathrooms', 'Bathrooms', (<PropertyBathroomFilter />))}
        {renderAllFiltersButton(true)}
      </div>
    </div>
  );

  const renderStickyFiltersGroup = () => {
    if (!isSticky) {
      return null;
    }

    return (
      <div className={styles['properties-filters__sticky']}>
        <MyPZContainer>
          <div className={styles['properties-filters__group']}>
            {renderLocationFilter(false)}
            {renderAllFiltersButton(false)}
          </div>
        </MyPZContainer>
      </div>
    );
  };

  return (
    <div className={styles['properties-filters']}>
      <ButtonSwitch
        options={[
          { value: 'rent', text: 'Rent' },
          { value: 'sale', text: 'Sale' },
        ]}
        value={allFilters.businessType}
        onChange={onBusinessTypeChange}
      />
      {renderFiltersGroup()}
      {renderStickyFiltersGroup()}
      {renderFiltersModal()}
    </div>
  );
};

export default PropertiesFilters;
