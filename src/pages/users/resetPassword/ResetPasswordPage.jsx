import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import styles from './ResetPasswordPage.module.scss';

import {
  MyPZContainer,
  MyPZAlert,
  MyPZTextField,
  MyPZButton,
} from '../../../mypzkit';
import storageManager from '../../../storage/storageManager';
import { UserContext } from '../../../context/users/UserContext';
import { resetPassword } from '../../../api/auth/authApi';

const initialFormData = {
  password: '',
  passwordConfirmation: '',
};

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfos, setUserInfos] = useContext(UserContext);
  const router = useRouter();
  const queryParams = router.query;

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const isValidForm = () => !isProcessing
    && formData.password && formData.password.length >= 6
    && formData.passwordConfirmation && formData.passwordConfirmation === formData.password;

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!isValidForm() || !queryParams.userId || !queryParams.token) {
      return;
    }

    setIsProcessing(true);
    try {
      const response = await resetPassword(
        formData.password,
        queryParams.userId,
        queryParams.token,
      );
      setIsSuccess(true);

      storageManager.login(response.token);
      setUserInfos({
        ...userInfos,
        favoriteCount: response.favorites,
        userInfos: response.user,
      });

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      setErrorMessage(err.message);
      setIsSuccess(false);
    }
    setIsProcessing(false);
  };

  const renderAlert = () => {
    if (isProcessing) {
      return null;
    }

    if (errorMessage) {
      return (<MyPZAlert type="error">{errorMessage}</MyPZAlert>);
    }

    if (!isSuccess) {
      return null;
    }

    return (<MyPZAlert>Password reset. You will be redirected</MyPZAlert>);
  };

  return (
    <div className={styles['reset-password-page']}>
      <MyPZContainer>
        <h1>Reset Password</h1>

        {renderAlert()}

        <form onSubmit={handleSubmitForm}>
          <div className={styles['reset-password-page__field']}>
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

          <div className={styles['reset-password-page__field']}>
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

          <div className={styles['reset-password-page__field']}>
            <MyPZButton disabled={!isValidForm()} type="submit">
              Sign Up
            </MyPZButton>
          </div>
        </form>
      </MyPZContainer>
    </div>
  );
};

export default ResetPasswordPage;
