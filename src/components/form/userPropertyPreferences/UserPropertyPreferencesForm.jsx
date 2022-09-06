import React, { useContext, useEffect, useState } from 'react';

import styles from './UserPropertyPreferencesForm.module.scss';

import { MyPZButton, MyPZCheckbox, MyPZRadio } from '../../../mypzkit';
import ButtonSwitch from '../../button/buttonSwitch/ButtonSwitch';
import PropertyPriceFilter from '../../propertiesFilters/propertyPriceFilter/PropertyPriceFilter';
import PropertyTypeFilter from '../../propertiesFilters/propertyTypeFilter/PropertyTypeFilter';
import { FiltersContext } from '../../../context/filters/FiltersContext';
import PropertyBedroomFilter from '../../propertiesFilters/propertyBedroomFilter/PropertyBedroomFilter';
import PropertyAreaFilter from '../../propertiesFilters/propertyAreaFilter/PropertyAreaFilter';
import PropertyLocationsFilter from '../../propertiesFilters/propertyLocationsFilter/PropertyLocationsFilter';

const dataConfig = {
  moveDate: [
    { label: 'Urgent', value: 'urgent' },
    { label: '1 month', value: '1 month' },
    { label: '3 months', value: '3 months' },
    { label: 'More', value: 'more' },
  ],
  preApproval: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Rather not say', value: 'rather not say' },
  ],
};

const UserPropertyPreferencesForm = (props) => {
  const {
    disabled,
    onSubmit,
    onChange,
    data,
  } = props;
  const [propertiesFilters, setPropertiesFilters] = useContext(FiltersContext);
  const [finalData, setFinalData] = useState(data || {});

  useEffect(() => {
    if (onChange) {
      onChange({ ...propertiesFilters, ...finalData });
    }
  }, [propertiesFilters]);

  useEffect(() => {
    setFinalData(data);
  }, [data]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!onSubmit) {
      return;
    }
    onSubmit({ ...propertiesFilters, ...finalData });
  };

  const handleBusinessTypeChange = (value) => {
    setPropertiesFilters({ ...propertiesFilters, businessType: value });
  };

  const handleIsDataSharedChange = (e) => {
    const newFinalData = { ...finalData, isDataShared: e.target.checked };
    setFinalData(newFinalData);
    if (onChange) {
      onChange({ ...propertiesFilters, ...newFinalData });
    }
  };

  const handleRadioGroupChange = (groupName) => (v) => {
    const newFinalData = { ...finalData, [groupName]: v };
    setFinalData(newFinalData);
    if (onChange) {
      onChange({ ...propertiesFilters, ...newFinalData });
    }
  };

  const isFormValid = () => {
    return !!propertiesFilters.propertyTypes &&
      !!propertiesFilters.price && (propertiesFilters.price.min > 0 || propertiesFilters.price.max !== 'Any') &&
      finalData.isDataShared === true;
  };

  const renderOnSubmit = () => {
    if (!onSubmit) {
      return null;
    }

    return (
      <div className={styles['user-property-preferences-form__field']}>
        <MyPZButton disabled={disabled || !isFormValid()} type="submit">Save</MyPZButton>
      </div>
    );
  };

  const renderCategoryForm = () => {
    if (!propertiesFilters.propertyTypes) {
      return;
    }

    if (propertiesFilters.category === 0) {
      return (
        <div className={`${styles['user-property-preferences-form__field']} ${styles['user-property-preferences-form__bedrooms']}`}>
          <div className={styles['user-property-preferences-form__label']}>Bedrooms</div>
          <PropertyBedroomFilter/>
        </div>
      );
    }

    return (
      <div className={`${styles['user-property-preferences-form__field']} ${styles['user-property-preferences-form__area-sqft']}`}>
        <div className={styles['user-property-preferences-form__label']}>Area Sqft</div>
        <PropertyAreaFilter/>
      </div>
    );
  };

  const renderLocationForm = () => {
    if (!propertiesFilters.propertyTypes) {
      return;
    }

    return (
      <div className={`${styles['user-property-preferences-form__field']} ${styles['user-property-preferences-form__locations']}`}>
        <div className={styles['user-property-preferences-form__label']}>Locations</div>
        <PropertyLocationsFilter/>
      </div>
    );
  };

  const renderRadioGroup = (group, groupName) => {
    const radios = group.map((item) => {
      return (
        <div key={item.value} className={styles['user-property-preferences-form__radio']}>
          <MyPZRadio
            value={item.value}
            label={item.label}
            onChange={handleRadioGroupChange(groupName)}
            checked={finalData[groupName] && finalData[groupName] === item.value ? 'checked' : ''}
          />
        </div>
      );
    });

    return (<div>{radios}</div>)
  };

  const renderForm = () => {
    if (!propertiesFilters) {
      return;
    }

    return (
      <form onSubmit={handleSubmitForm}>
        <div className={styles['user-property-preferences-form__switch']}>
          <ButtonSwitch
            options={[{ value: 'rent', text: 'Rent' }, { value: 'sale', text: 'Sale' }]}
            value={propertiesFilters.businessType}
            onChange={handleBusinessTypeChange}
          />
        </div>

        <div className={styles['user-property-preferences-form__field-container']}>
          <div className={styles['user-property-preferences-form__field-group']}>
            <div
              className={`${styles['user-property-preferences-form__field']} ${styles['user-property-preferences-form__type']}`}>
              <div className={styles['user-property-preferences-form__label']}>*Type</div>
              <PropertyTypeFilter/>
            </div>

            <div
              className={`${styles['user-property-preferences-form__field']} ${styles['user-property-preferences-form__price']}`}>
              <div className={styles['user-property-preferences-form__label']}>*Price</div>
              <PropertyPriceFilter/>
            </div>
          </div>

          <div className={styles['user-property-preferences-form__field-group']}>
            {renderCategoryForm()}
            {renderLocationForm()}
          </div>
        </div>

        <div className={styles['user-property-preferences-form__is-data-shared']}>
          <div className={styles['user-property-preferences-form__tagline']}>When will you move? (optional)</div>
          {renderRadioGroup(dataConfig.moveDate, 'moveDate')}
          <div className={styles['user-property-preferences-form__tagline']}>Do you have finance pre-approval? (optional)</div>
          {renderRadioGroup(dataConfig.preApproval, 'preApproval')}

          <div className={styles['user-property-preferences-form__agree']}>
            <MyPZCheckbox
              label={<span>I agree to share those data to agents (mandatory)</span>}
              checked={finalData.isDataShared}
              onChange={handleIsDataSharedChange}
            />
          </div>
        </div>

        {renderOnSubmit()}
      </form>
    );
  };

  return (
    <div className={styles['user-property-preferences-form']}>
      {renderForm()}
    </div>
  );
};

export default UserPropertyPreferencesForm;
