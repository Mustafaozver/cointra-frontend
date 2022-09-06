import React, { useContext } from 'react';
import PersonIcon from '@material-ui/icons/Person';

import styles from './UserAuthIcon.module.scss';

import { UserContext } from '../../../context/users/UserContext';
import storageManager from '../../../storage/storageManager';

const UserAuthIcon = () => {
  const [userInfos, setUserInfos] = useContext(UserContext);

  const handleImageError = () => {
    let newUserInfos = { ...userInfos };
    newUserInfos.userInfos.imageUrl = null;
    setUserInfos(newUserInfos);
  };

  const renderIcon = () => {
    if (storageManager.isLogged() && userInfos.userInfos && userInfos.userInfos.imageUrl) {
      return(<img onError={handleImageError} src={userInfos.userInfos.imageUrl} alt="user auth icon" />);
    }

    return (<PersonIcon />);
  };

  return (
    <div className={styles['user-auth-icon']}>
      {renderIcon()}
    </div>
  );
};

export default UserAuthIcon;
