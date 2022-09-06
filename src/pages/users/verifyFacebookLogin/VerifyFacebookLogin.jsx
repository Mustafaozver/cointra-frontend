import React, { useEffect, useContext, useState } from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';

import styles from './VerifyFacebookLogin.module.scss';

import {
  MyPZCircleLoader,
  MyPZContainer,
  MyPZAlert,
} from '../../../mypzkit';
import storageManager from '../../../storage/storageManager';
import { authFacebook } from '../../../api/auth/authApi';
import { UserContext } from '../../../context/users/UserContext';

const VerifyFacebookLogin = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfos, setUserInfos] = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    const queryParams = queryString.parse(hash);

    const callApi = async () => {
      if (storageManager.getToken()) {
        router.push('/');
        return;
      }

      if (!queryParams.access_token) {
        setErrorMessage('Token is missing, please login to Facebook again');
        setIsSuccess(false);
        setIsProcessing(false);
        return;
      }

      try {
        const response = await authFacebook(queryParams.access_token);
        storageManager.login(response.token);
        setUserInfos({
          ...userInfos,
          favoriteCount: response.favorites,
          userInfos: response.user,
        });

        setIsSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } catch (e) {
        setErrorMessage(e.message);
        setIsSuccess(false);
      }
      setIsProcessing(false);
    };

    callApi();
  }, []);

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

    return (<MyPZAlert>Facebook account verified. You will be redirected</MyPZAlert>);
  };

  const renderLoader = () => {
    if (!isProcessing) {
      return null;
    }

    return (
      <div>
        <h1>Verifying your Facebook account...</h1>
        <MyPZCircleLoader />
      </div>
    );
  };

  return (
    <div className={styles['verify-facebook-login-page']}>
      <MyPZContainer>
        {renderAlert()}
        {renderLoader()}
      </MyPZContainer>
    </div>
  );
};

export default VerifyFacebookLogin;
