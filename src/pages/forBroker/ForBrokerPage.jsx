/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';

import styles from './ForBrokerPage.module.scss';

import {
  MyPZButton,
  MyPZContainer,
  MyPZTextField,
  MyPZhelpers,
  MyPZAlert,
} from '../../mypzkit';
import InputTextArea from '../../components/inputs/inputTextArea/InputTextArea';
import { startNewAgency } from '../../api/agencies/agenciesApi';

const resetInputs = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  company: '',
  companyAddress: '',
  mobile: '+971',
  landline: '+971',
  email: '',
  message: '',
};

const ForBrokerPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formValue, setFormValue] = useState(resetInputs);

  const handleInputChange = (key) => (e) => {
    setFormValue({ ...formValue, [key]: e.target.value });
  };

  const isSampleTextValid = (v) => v.length > 0;
  const isEmailValid = () => MyPZhelpers.emailRegex.test(formValue.email);
  const isPhoneValid = (v) => MyPZhelpers.phoneNumberRegex.test(v);

  const isFormValid = () => {
    return isSampleTextValid(formValue.firstName)
      && isSampleTextValid(formValue.lastName)
      && isSampleTextValid(formValue.jobTitle)
      && isSampleTextValid(formValue.company)
      && isSampleTextValid(formValue.companyAddress)
      && isPhoneValid(formValue.mobile)
      && isPhoneValid(formValue.landline)
      && isEmailValid()
  };

  const handleClickSubmit = async () => {
    setIsProcessing(true);
    setIsSuccess(false);

    try {
      await startNewAgency({ ...formValue, type: 'broker' });
      setIsSuccess(true);
    } catch (e) {
      console.log('error on start new agency:', e);
      setIsProcessing(false);
    }
  };

  const renderAlert = () => {
    if (!isSuccess) {
      return null;
    }

    return (
      <MyPZAlert className={styles['form-register__alert']}>
        Your registration has been successfully started !
      </MyPZAlert>
    );
  };

  const renderTitle = () => {
    return (<div className={styles['for-broker-page__title']}>
      Generate leads for FREE
    </div>)
  };

  const renderHeader = () => {
    return (<div className={styles['for-broker-page__header']}>
      <img src="/images/zeekeez-for-broker.png" />
    </div>)
  };

  const renderReduceCost = () => {
    return (<p>
      Time to empower your business and reduce your costs! Promote your listings without any limit:
    </p>)
  };

  const renderBenefits = () => {
    return (<ul className={styles['for-broker-page__list']}>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>unlimited listings</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>unlimited medias</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>unlimited users</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>no credit card required</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>non-binding offer</li>
    </ul>
    );
  };

  const renderJoin = () => {
    return (<p className={styles['for-broker-page__join']}>
      Join zeekeez’s network and build the right relationship with buyers, sellers and renters in the UAE. Get notified with new matches.
    </p>);
  };

  const renderWhy = () => {
    return (<p>
      Why choose zeekeez? In tech we trust. As a proptech company, we are committed to offer:
    </p>);
  };

  const renderTechList = () => {
    return (<ul className={styles['for-broker-page__list']}>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>free unlimited access for early adopters (free for a limited time)</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>best technology for an unbeatable user experience (React, NextJS, Elasticsearch...)</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>GIS algorithms for the best precision (cities, communities, sub-communities...)</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>new UX/UI for an intuitive user journey</li>
      <li><span className={styles['for-broker-page__list-icon']}><CheckIcon /></span>best confidentiality for your data, we are not backed by agencies</li>
    </ul>);
  };

  const renderDoBest = () => {
    return (<p className={styles['for-broker-page__do-best']}>
      Do what you do best, even better, even faster with zeekeez.
    </p>);
  };

  const renderReshape = () => {
    return (<p className={styles['for-broker-page__reshape']}>
      Join us to reshape UAE’s Real Estate market!
    </p>);
  };

  const renderFormTitle = () => {
    return (<div className={styles['for-broker-page__form-title']}>
      Promote your listings now, complete the form
    </div>);
  };

  const renderForm = () => (
    <div className={styles['for-broker-page__form']}>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="First Name"
          onChange={handleInputChange('firstName')}
          error={formValue.firstName && !isSampleTextValid(formValue.firstName) ? 'The First Name field can\'t be empty' : ''}
          value={formValue.firstName}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Last Name"
          onChange={handleInputChange('lastName')}
          error={formValue.lastName && !isSampleTextValid(formValue.lastName) ? 'The Last Name field can\'t be empty' : ''}
          value={formValue.lastName}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Job Title"
          onChange={handleInputChange('jobTitle')}
          error={formValue.jobTitle && !isSampleTextValid(formValue.jobTitle) ? 'The Job Title field can\'t be empty' : ''}
          value={formValue.jobTitle}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Company"
          onChange={handleInputChange('company')}
          error={formValue.company && !isSampleTextValid(formValue.company) ? 'The Company field can\'t be empty' : ''}
          value={formValue.company}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Company Address"
          onChange={handleInputChange('companyAddress')}
          error={formValue.companyAddress && !isSampleTextValid(formValue.companyAddress) ? 'The Company Address field can\'t be empty' : ''}
          value={formValue.companyAddress}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Mobile"
          onChange={handleInputChange('mobile')}
          error={formValue.mobile && !isPhoneValid(formValue.mobile) ? 'The Mobile field can\'t be empty and must be in a valid format' : ''}
          value={formValue.mobile}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Landline"
          onChange={handleInputChange('landline')}
          error={formValue.landline && !isPhoneValid(formValue.landline) ? 'The Landline field can\'t be empty and must be in a valid format' : ''}
          value={formValue.landline}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-text']}>
        <MyPZTextField
          label="Email"
          onChange={handleInputChange('email')}
          error={formValue.email && !isEmailValid() ? 'The Email field can\'t be empty and must be in a valid format' : ''}
          value={formValue.email}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-area']}>
        <InputTextArea
          label="Message"
          value={formValue.message}
          onChange={handleInputChange('message')}
        />
      </div>
      <div className={styles['for-broker-page__form__inputs-button']}>
        {renderAlert()}
        <MyPZButton disabled={!isFormValid() || isProcessing} onClick={handleClickSubmit}>
          Send
        </MyPZButton>
      </div>
    </div>
  );
  return (
    <div className={styles['for-broker-page']}>
      <MyPZContainer>
        <div className={styles['for-broker-page__head-container']}>
          <div className={styles['for-broker-page__head-container-item']}>
            {renderTitle()}
            <div>
              {renderReduceCost()}
              {renderBenefits()}
            </div>
          </div>
          <div className={styles['for-broker-page__head-container-item']}>
            {renderHeader()}
          </div>
        </div>
        {renderJoin()}
        {renderWhy()}
        {renderTechList()}
        {renderDoBest()}
        {renderReshape()}
        {renderFormTitle()}
        {renderForm()}
      </MyPZContainer>
    </div>
  );
};

export default ForBrokerPage;
