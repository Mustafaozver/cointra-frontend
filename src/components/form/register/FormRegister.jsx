import React, { useState } from 'react';
import Link from 'next/link';

import styles from './FormRegister.scss';

import {
  MyPZSelect,
  MyPZButton,
  MyPZCheckbox,
  MyPZAlert,
  MyPZhelpers,
  MyPZTextField,
} from '../../../mypzkit';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  type: 'individual',
};

const optionsType = [
  {
    value: 'individual',
    text: 'Individual (Single user non-professional)',
  },
  {
    value: 'agent',
    text: 'Agent (Single user)',
  },
  {
    value: 'agency',
    text: 'Agency or Developer (Unlimited Users)',
  },
];

const FormRegister = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setIsCheckedAgreement(e.target.checked);
  };

  const isValidSampleInput = (v) => v.length > 0;

  const isValidEmail = () => MyPZhelpers.emailRegex.test(formData.email);

  const isValidPassword = () => MyPZhelpers.passwordRegex.test(formData.password);

  const isPasswordConfirmed = () => formData.password === formData.confirmPassword;

  const isButtonActive = () => isValidSampleInput(formData.firstName)
    && isValidSampleInput(formData.lastName)
    && isValidEmail()
    && isValidPassword()
    && isPasswordConfirmed()
    && isCheckedAgreement;

  const handleClickRegister = () => {
    setIsMessageSent(true);

    setTimeout(() => {
      setIsMessageSent(false);
    }, 10000);

    setFormData(initialFormData);
    setIsCheckedAgreement(false);
  };

  const renderAlert = () => {
    if (!isMessageSent) {
      return null;
    }

    return (
      <MyPZAlert className={styles['form-register__alert']}>
        Your account has been successfully created !
      </MyPZAlert>
    );
  };

  const renderLabel = () => (
    <span className={styles['form-register__checkbox-label']}>
      I agree with your&nbsp;
      <Link href="/en/terms-and-conditions" className={styles['form-register__checkbox-label__link']}>Terms & Conditions</Link>
    </span>
  );

  return (
    <div className={styles['form-register']}>
      {renderAlert()}
      <div className={styles['form-register__input']}>
        <MyPZTextField
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange('firstName')}
          error={formData.firstName && !isValidSampleInput(formData.firstName) ? 'The First Name field can\'t be empty' : ''}
          placeholder="John"
        />
      </div>
      <div className={styles['form-register__input']}>
        <MyPZTextField
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange('lastName')}
          error={formData.lastName && !isValidSampleInput(formData.lastName) ? 'The Last Name field can\'t be empty' : ''}
          placeholder="Doe"
        />
      </div>
      <div className={styles['form-register__input']}>
        <MyPZTextField
          label="Email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={formData.email && !isValidEmail() ? 'The Email field can\'t be empty and must be in a valide format' : ''}
          placeholder="john@doe.com"
        />
      </div>
      <div className={styles['form-register__input']}>
        <MyPZTextField
          label="Password"
          value={formData.password}
          onChange={handleInputChange('password')}
          error={formData.password && !isValidPassword() ? 'The Password field must have minimum 8 characters, at least one letter and one number' : ''}
          type="password"
          placeholder="********"
        />
      </div>
      <div className={styles['form-register__input']}>
        <MyPZTextField
          label="Retype password"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={formData.confirmPassword && !isPasswordConfirmed() ? 'Your password and confirmation password do not match' : ''}
          type="password"
          placeholder="********"
        />
      </div>
      <div className={styles['form-register__input']}>
        <MyPZSelect
          label="Account type"
          value={formData.type}
          onChange={handleInputChange('type')}
          options={optionsType}
        />
      </div>
      <div className={styles['form-register__input-checkbox']}>
        <MyPZCheckbox
          label={renderLabel()}
          checked={isCheckedAgreement}
          onChange={handleCheckbox}
          className={styles['form-register__checkbox']}
        />
      </div>
      <div className={styles['form-register__input-button']}>
        <MyPZButton disabled={!isButtonActive()} onClick={handleClickRegister}>
          Register
        </MyPZButton>
      </div>
    </div>
  );
};

export default FormRegister;
