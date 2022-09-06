import React from 'react';

import styles from './MainLayout.module.scss';

import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';
import Feedback from '../../feedback/Feedback';
import UserProvider from '../../../context/users/UserContext';
import LoginProvider from '../../../context/login/LoginContext';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <UserProvider>
      <LoginProvider>
        <Feedback />
        <div className={styles['main-layout']}>
          <div className={styles['main-layout-menu-container']}>
            <Menu />
          </div>
          <div className={styles['main-layout-main-container']}>
            {children}
          </div>
          <div className={styles['main-layout-footer-container']}>
            <Footer />
          </div>
        </div>
      </LoginProvider>
    </UserProvider>
  );
};

export default MainLayout;
