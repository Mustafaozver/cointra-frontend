import React, { useEffect, useState } from 'react';
import { MyPZAlert, MyPZContainer } from '../../../mypzkit';

import styles from './PropertyPreferencesPage.module.scss';

import FiltersProvider from '../../../context/filters/FiltersContext';
import UserPropertyPreferencesForm from '../../../components/form/userPropertyPreferences/UserPropertyPreferencesForm';
import {
  getUserPropertyPreferences,
  updateUserPropertyPreferences,
} from '../../../api/user/userPropertyPreferencesApi';
import { filtersToParams, paramsToFilters, stringifyParams } from '../../../helpers/propertyFilterHelper';

const defaultFormData = {
  businessType: 'sale',
  price: { min: '0', max: 'Any' },
};

const defaultData = {
  isDataShared: false,
  moveDate: null,
  preApproval: null,
};

const PropertyPreferencesPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [finalFormData, setFinalFormData] = useState(defaultFormData);
  const [data, setData] = useState(defaultData);

  useEffect(async () => {
    try {
      const userPropertyPreferences = await getUserPropertyPreferences();
      if (userPropertyPreferences.userPropertyPreferences) {
        const finalParams = paramsToFilters(userPropertyPreferences.userPropertyPreferences);
        setFinalFormData(finalParams);
        setData({
          isDataShared: userPropertyPreferences.userPropertyPreferences.isDataShared || false,
          moveDate: userPropertyPreferences.userPropertyPreferences.moveDate || null,
          preApproval: userPropertyPreferences.userPropertyPreferences.preApproval || null,
        });
      }
    } catch (e) {
      console.log('error while getUserPropertyPreferences:', e);
    }
  }, []);

  const handleSubmitForm = async (formData) => {
    if (isProcessing) {
      return;
    }

    setIsProcessing(true);
    setIsSuccess(false);
    setAlertMessage(null);
    try {
      let params = filtersToParams(formData);
      params = stringifyParams(params);
      params.isDataShared = formData.isDataShared;
      params.moveDate = formData.moveDate;
      params.preApproval = formData.preApproval;

      await updateUserPropertyPreferences(params);
      setIsSuccess(true);
      setAlertMessage('Property Preferences Updated');
    } catch (err) {
      setAlertMessage(err.message);
      setIsSuccess(false);
    }
    setIsProcessing(false);
  };

  const renderAlert = () => {
    if (isProcessing || !alertMessage) {
      return null;
    }

    if (!isSuccess) {
      return (<MyPZAlert type="error">{alertMessage}</MyPZAlert>);
    }

    return (<MyPZAlert>{alertMessage}</MyPZAlert>);
  };

  return (
    <FiltersProvider overrideFilters={finalFormData}>
      <div className={styles['user-property-preferences-page']}>
        <MyPZContainer>
          <h1>Property Preferences</h1>

          {renderAlert()}
          <UserPropertyPreferencesForm
            onSubmit={handleSubmitForm}
            disabled={isProcessing}
            data={data}
          />

        </MyPZContainer>
      </div>
    </FiltersProvider>
  );
};

export default PropertyPreferencesPage;
