import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

import styles from './VerifyEmailPage.module.scss';

import {
  MyPZCircleLoader,
  MyPZContainer,
  MyPZAlert,
} from '../../../mypzkit';
import storageManager from '../../../storage/storageManager';
import { verifyEmail } from '../../../api/auth/authApi';
import { UserContext } from '../../../context/users/UserContext';

const VerifyEmailPage = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfos, setUserInfos] = useContext(UserContext);
  const router = useRouter();
  const queryParams = router.query;

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const callApi = async () => {
      if (storageManager.getToken()) {
        router.push('/');
        return;
      }

      if (!queryParams.userId || !queryParams.token) {
        setErrorMessage('Token is missing, please copy paste link received to your email address');
        setIsSuccess(false);
        setIsProcessing(false);
        return;
      }

      try {
        const response = await verifyEmail(queryParams.userId, queryParams.token);

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
  }, [router.isReady]);

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

    return (<MyPZAlert>Email verified. You will be redirected</MyPZAlert>);
  };

  const renderLoader = () => {
    if (!isProcessing) {
      return null;
    }

    return (
      <div>
        <h1>Verifying your email...</h1>
        <MyPZCircleLoader />
      </div>
    );
  };

  return (
    <div className={styles['verify-email-page']}>
      <MyPZContainer>
        {renderAlert()}
        {renderLoader()}
      </MyPZContainer>
    </div>
  );
};

export default VerifyEmailPage;
