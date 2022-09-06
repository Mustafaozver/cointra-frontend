import React, { useState } from 'react';
import {
  MyPZModal,
  MyPZTextField,
  MyPZButton,
  MyPZhelpers,
  MyPZAlert,
} from '../../../mypzkit';

import styles from './SignUpPopup.module.scss';
import { createEmailAccount } from '../../../api/auth/authApi';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignUpPopup = (props) => {
  const {
    isOpen,
    onClose,
  } = props;
  const [formData, setFormData] = useState(initialFormData);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const isValidForm = () => !isProcessing
    && formData.firstName && formData.firstName.length >= 1
    && formData.lastName && formData.lastName.length >= 1
    && formData.email && formData.email.length > 0
    && MyPZhelpers.emailRegex.test(formData.email)
    && formData.password && formData.password.length >= 6
    && formData.passwordConfirmation && formData.passwordConfirmation === formData.password;

  const handleClickOnSignUp = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      return;
    }

    try {
      setIsProcessing(true);
      setIsSuccess(false);
      setErrorMessage(null);

      await createEmailAccount(formData);

      setIsSuccess(true);
    } catch (err) {
      setErrorMessage('Email already exists. Please login');
    }
    setIsProcessing(false);
  };

  const renderSignUpAlert = () => {
    if (isProcessing) {
      return null;
    }

    if (errorMessage) {
      return (<MyPZAlert type="error">{errorMessage}</MyPZAlert>);
    }

    if (!isSuccess) {
      return null;
    }

    return (<MyPZAlert>Account created. Please verify your email</MyPZAlert>);
  };

  return (
    <div>
      <MyPZModal isOpen={isOpen} onClose={onClose}>
        <div className={styles['signup-popup']}>
          <div className={styles['signup-popup__title']}>
            Sign Up to zeekeez
          </div>

          <div className={styles['signup-popup__separator']} />

          {renderSignUpAlert()}

          <form className={styles['signup-popup__content']} onSubmit={handleClickOnSignUp}>
            <div className={styles['signup-popup__field-container']}>
              <div className={styles['signup-popup__field']}>
                <MyPZTextField
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  placeholder="John"
                  disabled={isProcessing}
                />
              </div>

              <div className={styles['signup-popup__field']}>
                <MyPZTextField
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  placeholder="Doe"
                  disabled={isProcessing}
                />
              </div>
            </div>

            <div className={styles['signup-popup__field']}>
              <MyPZTextField
                label="Email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="john@doe.com"
                disabled={isProcessing}
              />
            </div>

            <div className={styles['signup-popup__field']}>
              <MyPZTextField
                label="Password"
                value={formData.password}
                onChange={handleInputChange('password')}
                type="password"
                autocomplete="new-password"
                placeholder="********"
                disabled={isProcessing}
              />
            </div>

            <div className={styles['signup-popup__field']}>
              <MyPZTextField
                label="Confirm password"
                value={formData.passwordConfirmation}
                onChange={handleInputChange('passwordConfirmation')}
                type="password"
                autocomplete="new-password"
                placeholder="********"
                disabled={isProcessing}
              />
            </div>

            <div className={styles['signup-popup__field']}>
              <MyPZButton disabled={!isValidForm()} type="submit">
                Sign Up
              </MyPZButton>
            </div>

          </form>
        </div>
      </MyPZModal>
    </div>
  );
};

export default SignUpPopup;
