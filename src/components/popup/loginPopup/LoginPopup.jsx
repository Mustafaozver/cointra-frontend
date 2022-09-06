import React, { useState, useContext } from 'react';
import queryString from 'query-string';
import {
  MyPZModal,
  MyPZTextField,
  MyPZButton,
  MyPZhelpers,
  MyPZLink,
  MyPZAlert,
} from '../../../mypzkit';

import styles from './LoginPopup.module.scss';

import ButtonFacebook from '../../button/buttonFacebook/ButtonFacebook';
import ButtonGoogle from '../../button/buttonGoogle/ButtonGoogle';
// import ButtonApple from '../../button/buttonApple/ButtonApple';
import Config from '../../../config/Config';
import { emailLogin /*, getAppleLoginUri */ } from '../../../api/auth/authApi';
import storageManager from '../../../storage/storageManager';
import { UserContext } from '../../../context/users/UserContext';
import { LoginContext } from '../../../context/login/LoginContext';

const initialFormData = {
  email: '',
  password: '',
};

const LoginPopup = (props) => {
  const {
    isOpen,
    onClose,
    onSignUp,
    onForgotPassword,
  } = props;
  const [formData, setFormData] = useState(initialFormData);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userInfos, setUserInfos] = useContext(UserContext);
  const [loginInfos] = useContext(LoginContext);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const isValidForm = () => formData.email && formData.email.length > 0
    && MyPZhelpers.emailRegex.test(formData.email)
    && formData.password && formData.password.length > 0;

  const responseFacebook = () => {
    const redirectUri = queryString.stringifyUrl({
      url: Config.facebookUrl,
      query: Config.facebookParams,
    });

    window.location.href = redirectUri;
  };

  const handleClickOnLogin = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      return;
    }

    try {
      setIsProcessing(true);
      setErrorMessage(null);
      const emailLoginResponse = await emailLogin(formData.email, formData.password);

      storageManager.login(emailLoginResponse.token);
      setUserInfos({
        ...userInfos,
        favoriteCount: emailLoginResponse.favorites,
        userInfos: emailLoginResponse.user,
      });

      window.location.reload();
    } catch (err) {
      setErrorMessage('Invalid email or password');
    }
    setIsProcessing(false);
  };

  const handleClickOnSignUp = () => {
    if (!onSignUp) {
      return;
    }

    onSignUp();
  };

  const handleClickOnForgotPassword = (e) => {
    e.preventDefault();
    if (!onForgotPassword) {
      return;
    }

    onForgotPassword();
  };

  const renderAlert = () => {
    if (isProcessing || !errorMessage) {
      return null;
    }

    return (<MyPZAlert type="error">{errorMessage}</MyPZAlert>);
  };

  const handleGoogleAuth = async () => {
    const redirectUri = queryString.stringifyUrl({
      url: Config.googleUrl,
      query: Config.googleParams,
    }, { encode: false });

    window.location.href = redirectUri;
  };

  /*
  const handleAppleAuth = async () => {
    setIsProcessing(true);
    setErrorMessage(null);
    try {
      const res = await getAppleLoginUri();
      window.location.href = res.redirectUri;
    } catch (e) {
      setErrorMessage(`Error happened during Apple login: ${e.message}`);
    }
    setIsProcessing(false);
  };
  */

  const renderTitleText = () => {
    if (loginInfos && loginInfos.reasonText) {
      return loginInfos.reasonText;
    }
    return 'Sign In to zeekeez';
  };

  return (
    <div>
      <MyPZModal isOpen={isOpen} onClose={onClose}>
        <div className={styles['login-popup']}>
          <div className={styles['login-popup__title']}>
            {renderTitleText()}
          </div>
          <div className={styles['login-popup__content']}>
            <ButtonFacebook onClick={responseFacebook} />
            <ButtonGoogle onClick={handleGoogleAuth} />
            {/*
            <ButtonApple onClick={handleAppleAuth} disabled={isProcessing} />
            */}
          </div>

          <div className={styles['login-popup__separator']} />

          <div className={styles['login-popup__content']}>
            <form onSubmit={handleClickOnLogin}>
              {renderAlert()}
              <div className={styles['login-popup__field']}>
                <MyPZTextField
                  label="Email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="john@doe.com"
                  disabled={isProcessing}
                />
              </div>

              <div className={styles['login-popup__field']}>
                <MyPZTextField
                  label="Password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  type="password"
                  placeholder="********"
                  disabled={isProcessing}
                />
                <div className={styles['login-popup__forgot-password']}>
                  <MyPZLink linkType="simple" onClick={handleClickOnForgotPassword}>Forgot password?</MyPZLink>
                </div>
              </div>

              <div className={styles['login-popup__field']}>
                <MyPZButton type="submit" disabled={isProcessing}>Login</MyPZButton>
              </div>
            </form>

            <div className={styles['login-popup__separator']}>
              <span>OR</span>
            </div>

            <div className={styles['login-popup__field']}>
              <MyPZButton buttonstyle="black" onClick={handleClickOnSignUp}>Create new account</MyPZButton>
            </div>

          </div>
        </div>
      </MyPZModal>
    </div>
  );
};

export default LoginPopup;
