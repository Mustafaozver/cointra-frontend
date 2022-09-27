import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';

import {
  MyPZContainer,
  MyPZAlert,
  MyPZTextField,
  MyPZButton,
} from '../../../mypzkit';

import styles from './ProfilePage.module.scss';

import { UserContext } from '../../../context/users/UserContext';
import { updateProfile, updatePassword } from '../../../api/user/userApi';
import ImageCrop from '../../../components/imageCrop/ImageCrop';

const defaultPasswordData = {
  newPassword: '',
  confirmPassword: '',
};

const ProfilePage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfos, setUserInfos] = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const [updatePasswordData, setUpdatePasswordData] = useState(defaultPasswordData);

  useEffect(() => {
    let profileData = {};
    if (userInfos && userInfos.userInfos) {
      profileData = {
        email: userInfos.userInfos.email || '',
        firstName: userInfos.userInfos.firstName || '',
        lastName: userInfos.userInfos.lastName || '',
        phone: userInfos.userInfos.phone || '',
        imageUrl: userInfos.userInfos.imageUrl,
      };
    }
    setFormData(profileData);
  }, [userInfos]);

  const handleInputChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleInputPasswordChange = (key) => (e) => {
    setUpdatePasswordData({ ...updatePasswordData, [key]: e.target.value });
  };

  const isValidForm = () => !isProcessing
    && formData.firstName && formData.firstName.length >= 1
    && formData.lastName && formData.lastName.length >= 1;

  const isValidFormPassword = () => !isProcessing
    && updatePasswordData.newPassword && updatePasswordData.newPassword.length >= 6
    && updatePasswordData.confirmPassword
    && updatePasswordData.confirmPassword === updatePasswordData.newPassword;

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      return;
    }

    setIsProcessing(true);
    setIsSuccess(false);
    setAlertMessage(null);
    try {
      const requestData = { ...formData };
      delete requestData.email;
      delete requestData.imageUrl;
      const response = await updateProfile(requestData);
      setIsSuccess(true);

      setUserInfos({
        ...userInfos,
        userInfos: response.user,
      });
      setAlertMessage('Profile updated');
    } catch (err) {
      setAlertMessage(err.message);
      setIsSuccess(false);
    }
    setIsProcessing(false);
  };

  const handleSubmitFormPassword = async (e) => {
    e.preventDefault();

    if (!isValidFormPassword()) {
      return;
    }

    setIsProcessing(true);
    setIsSuccess(false);
    setAlertMessage(null);

    try {
      const requestData = { password: updatePasswordData.newPassword };
      await updatePassword(requestData);

      setIsSuccess(true);

      setUpdatePasswordData(defaultPasswordData);
      setAlertMessage('Your password has been updated');
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

  const onUploadImage = (imageId, imageUrl) => {
    setFormData({ ...formData, imageId, imageUrl });
  };

  return (
    <>
      <Head>
        <title>Your Profile | Zeekeez</title>
        <meta name="description" content="Look at your profile"/>
      </Head>
      <div className={styles['user-profile-page']}>
        <MyPZContainer>
          <h1>Edit Profile</h1>
          {renderAlert()}
          <form onSubmit={handleSubmitForm}>
            <div className={styles['user-profile-page__field']}>
              <ImageCrop
                onImageUploaded={onUploadImage}
                imageWidth={100}
                imageHeight={100}
                uploadButtonLabel="Profile picture"
                imageUrl={formData.imageUrl}
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                placeholder="John"
                disabled={isProcessing}
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="Last Name"
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                placeholder="Doe"
                disabled={isProcessing}
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="Phone"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="+971 123 456 789"
                disabled={isProcessing}
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="Email"
                value={formData.email}
                placeholder="john@doe.com"
                disabled
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZButton disabled={!isValidForm()} type="submit">
                Save
              </MyPZButton>
            </div>
          </form>
          <h1>Change password</h1>
          <form onSubmit={handleSubmitFormPassword}>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="New password"
                value={updatePasswordData.newPassword}
                onChange={handleInputPasswordChange('newPassword')}
                type="password"
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZTextField
                label="Confirm password"
                value={updatePasswordData.confirmPassword}
                onChange={handleInputPasswordChange('confirmPassword')}
                type="password"
              />
            </div>
            <div className={styles['user-profile-page__field']}>
              <MyPZButton disabled={!isValidFormPassword()} type="submit">
                Update
              </MyPZButton>
            </div>
          </form>
        </MyPZContainer>
      </div>
    </>
  );
};

export default ProfilePage;
