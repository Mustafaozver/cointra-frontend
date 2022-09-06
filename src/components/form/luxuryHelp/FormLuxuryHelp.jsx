import React, { useState } from 'react';

import styles from './FormLuxuryHelp.scss';

import {
  MyPZCheckbox,
  MyPZButton,
  MyPZAlert,
  MyPZhelpers,
  MyPZTextField,
} from '../../../mypzkit';
import InputCheckboxGroup from '../../inputs/inputCheckboxGroup/InputCheckboxGroup';
import InputTextArea from '../../inputs/inputTextArea/InputTextArea';

const initFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
  choice: {
    villas_rent: false,
    villas_sale: false,
    penthouses_rent: false,
    penthouses_sale: false,
    apartments_sale: false,
    apartments_rent: false,
  },
  type: {
    residential: false,
    investment: false,
  },
  availability: {
    immediately: false,
    months3: false,
    months6: false,
  },
  location: {
    uae: true,
    me: false,
    eu: false,
    asia: false,
    af: false,
    oce: false,
    na: false,
  },
  hire: false,
};

const choiceOptions = [
  {
    label: 'Luxury Villas for Rent',
    name: 'villas_rent',
  },
  {
    label: 'Luxury Villas for Sale',
    name: 'villas_sale',
  },
  {
    label: 'Luxury Penthouses for Rent',
    name: 'penthouses_rent',
  },
  {
    label: 'Luxury Penthouses for Sale',
    name: 'penthouses_sale',
  },
  {
    label: 'Luxury Apartments for Sale',
    name: 'apartments_sale',
  },
  {
    label: 'Luxury Apartments for Rent',
    name: 'apartments_rent',
  },
];

const typeOptions = [
  {
    label: 'Residential',
    name: 'residential',
  },
  {
    label: 'Investment',
    name: 'investment',
  },
];

const availabilityOptions = [
  {
    label: 'Immediately',
    name: 'immediately',
  },
  {
    label: 'Next 3 months',
    name: 'months3',
  },
  {
    label: 'Next 6 months',
    name: 'months6',
  },
];

const locationOptions = [
  {
    label: 'In the UAE',
    name: 'uae',
  },
  {
    label: 'Middle East',
    name: 'me',
  },
  {
    label: 'Europe',
    name: 'eu',
  },
  {
    label: 'Asia',
    name: 'asia',
  },
  {
    label: 'Africa',
    name: 'af',
  },
  {
    label: 'Oceania',
    name: 'oce',
  },
  {
    label: 'North America',
    name: 'na',
  },
];

const FormLuxuryHelp = () => {
  const [formData, setFormData] = useState(initFormData);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleChangeCheckbox = (e) => {
    setFormData({ ...formData, hire: e.target.checked });
  };

  const handleChangeCheckboxGroup = (key) => (e) => {
    setFormData({
      ...formData,
      [key]: {
        ...formData[key],
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleSubmit = () => {
    // TODO : Send message
    setIsMessageSent(true);

    setTimeout(() => {
      setIsMessageSent(false);
    }, 10000);

    setFormData(initFormData);
  };

  const isValidSampleInput = (v) => v.length > 0;

  const isValidEmail = () => MyPZhelpers.emailRegex.test(formData.email);

  const isValidPhone = () => MyPZhelpers.phoneNumberRegex.test(formData.phone);

  const isMessageValid = () => formData.message.length > 10;

  const isValidForm = () => isValidSampleInput(formData.firstName)
    && isValidSampleInput(formData.lastName)
    && isValidPhone()
    && isValidEmail()
    && isMessageValid();

  const renderAlert = () => {
    if (!isMessageSent) {
      return null;
    }

    return (
      <MyPZAlert className={styles['form-luxury-help__alert']}>
        Your message has been successfully sent !
      </MyPZAlert>
    );
  };

  return (
    <div className={styles['form-luxury-help']}>
      {renderAlert()}
      <div className={styles['form-luxury-help__input']}>
        <MyPZTextField
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange('firstName')}
          error={formData.firstName && !isValidSampleInput(formData.firstName) ? 'The First Name field can\'t be empty' : ''}
          placeholder="John"
        />
      </div>
      <div className={styles['form-luxury-help__input']}>
        <MyPZTextField
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange('lastName')}
          error={formData.lastName && !isValidSampleInput(formData.lastName) ? 'The Last Name field can\'t be empty' : ''}
          placeholder="Doe"
        />
      </div>
      <div className={styles['form-luxury-help__input']}>
        <MyPZTextField
          label="Phone"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          error={formData.phone && !isValidPhone() ? 'The Phone Number field can\'t be empty and must be in a valide format' : ''}
          placeholder="+971 xxx xxx xxx"
        />
      </div>
      <div className={styles['form-luxury-help__input']}>
        <MyPZTextField
          label="Email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={formData.email && !isValidEmail() ? 'The Email field can\'t be empty and must be in a valide format' : ''}
          placeholder="john@doe.com"
        />
      </div>
      <div className={styles['form-luxury-help__input-checkbox']}>
        <InputCheckboxGroup label="Select your choice" data={choiceOptions} onChange={handleChangeCheckboxGroup('choice')} values={formData.choice} />
      </div>
      <div className={styles['form-luxury-help__input-checkbox']}>
        <InputCheckboxGroup label="Type of search" data={typeOptions} onChange={handleChangeCheckboxGroup('type')} values={formData.type} />
      </div>
      <div className={styles['form-luxury-help__input-checkbox']}>
        <InputCheckboxGroup label="Availability" data={availabilityOptions} onChange={handleChangeCheckboxGroup('availability')} values={formData.availability} />
      </div>
      <div className={styles['form-luxury-help__input-checkbox']}>
        <InputCheckboxGroup label="Where are you ?" data={locationOptions} onChange={handleChangeCheckboxGroup('location')} values={formData.location} />
      </div>
      <div className={styles['form-luxury-help__input-area']}>
        <InputTextArea
          label="Additional comments"
          value={formData.message}
          onChange={handleInputChange('message')}
          error={formData.message && !isMessageValid() ? 'The Message field can\'t be empty' : ''}
        />
      </div>
      <div className={styles['form-luxury-help__input-checkbox']}>
        <MyPZCheckbox
          label={<span className={styles['input-checkbox__text']}>Yes I want to hire a Luxury House Hunter</span>}
          checked={formData.hire}
          onChange={handleChangeCheckbox}
          className={styles['form-register__checkbox']}
        />
      </div>
      <div className={styles['form-luxury-help__input-button']}>
        <MyPZButton disabled={!isValidForm()} onClick={handleSubmit}>Send</MyPZButton>
      </div>
    </div>
  );
};

export default FormLuxuryHelp;
