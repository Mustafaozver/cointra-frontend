import React from 'react';

import styles from './HomeLayout.scss';

import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

const HomeLayout = (props) => {
  const { children, filterChildren } = props;

  return (
    <div className={styles['home-layout']}>
      <div className={styles['home-layout__menu-filter']}>
        <Menu />
        {filterChildren}
      </div>
      <div className={styles['home-layout__content']}>
        {children}
      </div>
      <div className={styles['home-layout__footer']}>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
