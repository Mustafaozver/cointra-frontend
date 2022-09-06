import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import {
  MyPZContainer,
  MyPZLink,
  MyPZDrawer,
  MyPZPopover,
} from '../../mypzkit';
import UserAuthIcon from '../icons/userAuth/UserAuthIcon';
import FavoriteBadge from '../favoriteBadge/FavoriteBadge';
import Logo from '../logo/Logo';
import LoginPopup from '../popup/loginPopup/LoginPopup';
import SignUpPopup from '../popup/signUpPopup/SignUpPopup';
import storageManager from '../../storage/storageManager';
import { UserContext } from '../../context/users/UserContext';
import { LoginContext } from '../../context/login/LoginContext';
import { getUserInfos } from '../../api/user/userApi';
import ForgotPasswordPopup from '../popup/forgotPasswordPopup/ForgotPasswordPopup';
import { getUserPropertyPreferences } from '../../api/user/userPropertyPreferencesApi';

import styles from './Menu.module.scss';

const links = [
  {
    title: 'Buy',
    link: '/en/sale/properties-for-sale',
  },
  {
    title: 'Rent',
    link: '/en/rent/properties-for-rent',
  },
  {
    title: 'Luxury Properties',
    children: [
      {
        title: 'Rent Luxury Properties',
        link: '/en/rent/luxury-properties-for-rent-in-uae',
      },
      {
        title: 'Buy Luxury Properties',
        link: '/en/sale/luxury-properties-for-sale-in-uae',
      },
    ],
  },
  {
    title: 'Commercial',
    children: [
      {
        title: 'Buy',
        link: '/en/sale/commercial-for-sale-in-uae',
      },
      {
        title: 'Rent',
        link: '/en/rent/commercial-for-rent-in-uae',
      },
    ],
  },
  {
    title: 'Guides',
    link: '/en/guides',
  },
  {
    title: 'Blog',
    link: '/en/blog',
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
  const [userInfos, setUserInfos] = useContext(UserContext);
  const [loginInfos, setLoginInfos] = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    const fetchUserInfos = async () => {
      try {
        const [infosUser, propertyPreferences] = await Promise.all([
          getUserInfos(),
          getUserPropertyPreferences(),
        ]);

        setUserInfos({
          ...userInfos,
          userInfos: infosUser.user,
          favoriteCount: infosUser.favorites,
          propertyPreferences: propertyPreferences.userPropertyPreferences,
        });
      } catch (error) {
        console.log('error while fetching user infos:', error);
      }
    };

    if (!storageManager.isLogged()) {
      return;
    }

    if (!userInfos || !userInfos.userInfos || userInfos.favoriteCount === undefined || userInfos.propertyPreferences === undefined) {
      fetchUserInfos();
    }
  }, []);

  const onOpenMenu = () => {
    setIsOpen(true);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  const renderChildLink = (link) => {
    return (
      <Link
        href={link.link}
        key={link.title}
        passHref
      >
        <a>
          <div className={styles['link-item__child']} key={link.link}>{link.title}</div>
        </a>
      </Link>
    );
  };

  const renderMainLink = (link) => {
    let children = null;
    if (link.children) {
      children = (
        <div className={`${styles['link-item__child-group']} ${router.asPath.startsWith(link.link) ? styles.active : ''}`}>
          {link.children.map(renderChildLink)}
        </div>
      );
    }

    let linkContent = (
      <div
        className={`${styles['link-item']} ${router.asPath.startsWith(link.link) ? styles.active : ''}`}
        onClick={onCloseMenu}
        onKeyPress={onCloseMenu}
        role="button"
        tabIndex="0"
        key={link.title}
      >
        <span className={styles['link-title']}>{link.title}</span>
        {children}
      </div>
    );

    if (!link.link) {
      return linkContent;
    }

    return (<Link
      href={link.link}
      key={link.title}
      passHref
    >
      <a>
        {linkContent}
      </a>
    </Link>);
  };

  const renderLinks = () => links.map(renderMainLink);

  const getAppBar = () => {
    const icon = isOpen ? <CloseIcon onClick={onCloseMenu} /> : <MenuIcon onClick={onOpenMenu} className={styles['menu-icon']} />;
    const logoStyle = isOpen ? 'white' : 'black';
    return (
      <div className={styles['app-bar']}>
        <MyPZContainer>
          <div className={styles['app-bar-container']}>
            <div className={styles['app-bar-menu-icon']}>
              {icon}
            </div>
            <div className={styles['app-bar-logo']}>
              <MyPZLink to="/">
                <div>
                  <Logo logoStyle={logoStyle} />
                </div>
              </MyPZLink>
            </div>
            {renderLoginContainer()}
          </div>
        </MyPZContainer>
      </div>
    );
  };

  const getDrawer = () => {
    return (
      <MyPZDrawer
        anchor="top"
        open={isOpen}
        onClose={onCloseMenu}
        className={styles['mobile-menu-drawer']}
      >
        <div className={styles['menu-drawer']}>
          {getAppBar()}
          <div className={styles['menu-links-container']}>
            {renderLinks()}
          </div>
        </div>
      </MyPZDrawer>
    );
  };

  const clickOnLogin = (e) => {
    e.preventDefault();
    setIsOpenLogin(!isOpenLogin);
  };

  const clickOnLogoutButton = (e) => {
    e.preventDefault();
    storageManager.logout();
    router.push('/');
  };

  const closeContextualLoginPopup = () => {
    if (!loginInfos || !loginInfos.isPopupOpen) {
      return;
    }
    setLoginInfos({
      ...loginInfos,
      isPopupOpen: false,
      reasonText: null,
    });
  };

  const onSignUp = () => {
    setIsOpenLogin(false);
    setIsOpenSignUp(true);
    closeContextualLoginPopup();
  };

  const onForgotPassword = () => {
    setIsOpenLogin(false);
    setIsOpenForgotPassword(true);
    closeContextualLoginPopup();
  };

  const onCloseLoginPopup = () => {
    setIsOpenLogin(false);
    closeContextualLoginPopup();
  };

  const renderLoginContainer = () => {
    if (isOpen) {
      return <div />;
    }

    const renderPopoverHeader = () => {
      if (!userInfos || !userInfos.userInfos) {
        return null;
      }

      return (
        <div className={styles['menu-profile-popover__header']}>
          <div>{[userInfos.userInfos.firstName, userInfos.userInfos.lastName].join(' ')}</div>
        </div>
      );
    };

    const renderProfileOpener = () => (
      <div className={styles['menu-login__button']}>
        <UserAuthIcon />
      </div>
    );

    const renderProfile = () => (
      <MyPZPopover opener={renderProfileOpener()} anchorPosition="left" className={styles['menu-login__block-auth-user-dropdown']}>
        <div className={styles['menu-profile-popover']}>
          {renderPopoverHeader()}
          <Link href="/en/favorites" passHref>
            <div className={styles['menu-profile-popover__link']}>Favorites</div>
          </Link>
          <Link href="/users/profile" passHref>
            <div className={styles['menu-profile-popover__link']}>Profile</div>
          </Link>
          <Link href="/users/property-preferences" passHref>
            <div className={styles['menu-profile-popover__link']}>Property Preferences</div>
          </Link>
          <div className={styles['menu-profile-popover__logout']}>
            <MyPZLink onClick={clickOnLogoutButton} linkType="simple">Logout</MyPZLink>
          </div>
        </div>
      </MyPZPopover>
    );

    const renderFavoriteHeart = () => (
      <div className={styles['menu-login__button']}>
        <Link href="/en/favorites" passHref>
          <a>
            <FavoriteBadge value={userInfos.favoriteCount} />
          </a>
        </Link>
      </div>
    );

    const renderUnloggedSection = () => {
      if (storageManager.isLogged()) {
        return null;
      }

      return (
        <div
          className={styles['menu-login__button']}
          onClick={clickOnLogin}
          onKeyPress={clickOnLogin}
          role="button"
          tabIndex="0"
          aria-label="Login button"
        >
          <UserAuthIcon />
        </div>
      );
    };

    const renderLoggedSection = () => {
      if (!storageManager.isLogged()) {
        return null;
      }

      return (
        <>
          {renderFavoriteHeart()}
          {renderProfile()}
        </>
      );
    };

    return (
      <div className={styles['menu-login-container']}>
        {renderUnloggedSection()}
        {renderLoggedSection()}
      </div>
    );
  };

  return (
    <div className={styles['zeekeez-menu']}>
      <div className={styles['zeekeez-menu__mobile']}>
        {getAppBar()}
        {getDrawer()}
      </div>

      <div className={`${styles['zeekeez-menu__web']}`}>
        <MyPZContainer>
          <div className={styles['zeekeez-menu__web-container']}>
            <div className={styles['web-menu-logo']}>
              <MyPZLink to="/">
                <div>
                  <Logo />
                </div>
              </MyPZLink>
            </div>
            <div className={styles['menu-links-container']}>
              {renderLinks()}
            </div>
            {renderLoginContainer()}
          </div>
        </MyPZContainer>
      </div>

      <LoginPopup
        isOpen={isOpenLogin || loginInfos.isPopupOpen}
        onClose={onCloseLoginPopup}
        onSignUp={onSignUp}
        onForgotPassword={onForgotPassword}
      />
      <SignUpPopup isOpen={isOpenSignUp} onClose={() => setIsOpenSignUp(false)} />
      <ForgotPasswordPopup
        isOpen={isOpenForgotPassword}
        onClose={() => setIsOpenForgotPassword(false)}
      />
    </div>
  );
};

export default Menu;
