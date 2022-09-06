import React, { useState } from 'react';
import {
  MyPZModal,
  MyPZTextField,
  MyPZButton,
  MyPZhelpers,
  MyPZAlert,
} from '../../../mypzkit';

import styles from './ForgotPasswordPopup.module.scss';

import { forgotPassword } from '../../../api/auth/authApi';

const initialFormData = {
  email: '',
};

const ForgotPasswordPopup = (props) => {
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
    && formData.email && formData.email.length > 0
    && MyPZhelpers.emailRegex.test(formData.email);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      return;
    }

    try {
      setIsProcessing(true);
      setIsSuccess(false);
      setErrorMessage(null);

      await forgotPassword(formData.email);

      setIsSuccess(true);
    } catch (err) {
      setErrorMessage('Could not send email');
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setIsProcessing(false);
    setIsSuccess(false);
    setErrorMessage(null);
    if (onClose) {
      onClose();
    }
  };

  const renderSignUpAlert = () => {
    if (errorMessage) {
      return (<MyPZAlert type="error">{errorMessage}</MyPZAlert>);
    }

    if (!isSuccess) {
      return null;
    }

    return (<MyPZAlert>Instructions to reset password has been sent to this email</MyPZAlert>);
  };

  return (
    <div>
      <MyPZModal isOpen={isOpen} onClose={handleClose}>
        <div className={styles['forgot-password-popup']}>
          <div className={styles['forgot-password-popup__title']}>
            Forgot password?
          </div>

          {renderSignUpAlert()}

          <form className={styles['forgot-password-popup__content']} onSubmit={handleSubmitForm}>
            <div className={styles['forgot-password-popup__field']}>
              <MyPZTextField
                label="Email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="john@doe.com"
                disabled={isProcessing}
              />
            </div>

            <div className={styles['forgot-password-popup__field']}>
              <MyPZButton disabled={!isValidForm()} type="submit">
                Reset password
              </MyPZButton>
            </div>

          </form>
        </div>
      </MyPZModal>
    </div>
  );
};

export default ForgotPasswordPopup;
