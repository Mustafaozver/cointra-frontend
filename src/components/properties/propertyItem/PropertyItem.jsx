import React, { useState, useContext } from 'react';
import Link from 'next/link';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './PropertyItem.module.scss';

import { MyPZCarousel } from '../../../mypzkit';
import Config from '../../../config/Config';
import PropertyAgentInfos from '../components/propertyAgentInfos/PropertyAgentInfos';
import PropertyLocation from '../components/propertyLocation/PropertyLocation';
import PropertyFeatures from '../components/propertyFeatures/PropertyFeatures';
import PropertyPrice from '../components/propertyPrice/PropertyPrice';
import ButtonCall from '../../button/buttonCall/ButtonCall';
import ButtonEmail from '../../button/buttonEmail/ButtonEmail';
import { getPropertyPhone } from '../../../api/properties/propertiesApi';
import { addPropertyToFavorites, removePropertyToFavorites } from '../../../api/favorites/favoritesApi';
import storageManager from '../../../storage/storageManager';
import { UserContext } from '../../../context/users/UserContext';
import { LoginContext } from '../../../context/login/LoginContext';

const viewFormatMap = {
  list: 'big',
  grid: 'grid',
  card: 'block',
};

const PropertyItem = (props) => {
  const { data, view, onEmailClick } = props;
  const {
    agent,
    agency,
  } = data;

  const [userInfos, setUserInfos] = useContext(UserContext);
  const [loginInfos, setLoginInfos] = useContext(LoginContext);

  const [isCallButtonActive, setIsCallButtonActive] = useState(false);
  const [agentMobile, setAgentMobile] = useState('');
  const [phoneProcessing, setPhoneProcessing] = useState(false);
  const [isFavorite, setIsFavorite] = useState(data.isFavorite || false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    onEmailClick();
  };

  const handleCallClick = async (e) => {
    e.preventDefault();

    if (!isCallButtonActive) {
      setPhoneProcessing(true);
      const phoneResponse = await getPropertyPhone(data.slug);
      setAgentMobile(phoneResponse.phone);

      window.location.href = `tel:${phoneResponse.phone}`;
      setPhoneProcessing(false);
    }

    setIsCallButtonActive(!isCallButtonActive);
  };

  const handleFavoriteClick = async (e) => {
    e.preventDefault();

    if (!storageManager.isLogged()) {
      setLoginInfos({
        ...loginInfos,
        isPopupOpen: true,
        reasonText: 'To use Favorite feature, please Sign In',
      });
      return;
    }

    if (!isFavorite) {
      setIsFavorite(true);
      const { total } = await addPropertyToFavorites(data.id);
      setUserInfos({ ...userInfos, favoriteCount: total });
      return;
    }

    setIsFavorite(false);
    const { total } = await removePropertyToFavorites(data.id);
    setUserInfos({ ...userInfos, favoriteCount: total });
  };

  const renderImageCarousel = () => {
    if (imageValid()) {
      return [{
        index: 0,
        render: (
          <>
            <span>Sorry, photos are not available <br /> Please contact the agent</span>
          </>
        ),
      }];
    }

    const imagesFiltered = data.images.filter((image) => image.format === viewFormatMap[view]);

    return imagesFiltered.map((img, index) => ({
      index,
      render: (<img
        className={styles['property-item-image-main-element']}
        src={Config.getImageUrl(img.path)}
        alt={data.slug}
      />),
    }));
  };

  const imageValid = () => !data.images || data.images.length < 1;

  const renderFavorite = () => {
    let icon = <FavoriteIcon />;
    if (!isFavorite) {
      icon = <FavoriteBorderIcon />;
    }

    return (
      <div className={`${styles['property-item__favorite']} ${styles[isFavorite ? 'active' : '']}`} onClick={handleFavoriteClick} onKeyPress={handleFavoriteClick} role="button" tabIndex="0">
        {icon}
      </div>
    );
  };
  const isnew = ((new Date()).getTime() - (new Date(data.listedAt)).getTime()) < (1000 * 60 * 60 * 48);
  return (
    <div className={styles[`property-item-${view}`]}>
      <Link href={`/en/properties/${data.slug}`} passHref>
        <a>
          <div>
            <div className={styles['property-item-section-image']}>
              <div className={styles['property-item-profile']}>
                <PropertyAgentInfos agent={agent} agency={agency} />
              </div>
              <div className={styles['property-item-image']}>
                <div className={styles['property-item-image-headband']} />
                <div className={styles['property-item-image-main']}>
                  {/* TODO: put back views when we can load images dynamically
                    displayDots={!imageValid()}
                    displayArrows={!imageValid()}
                  */}
                  <MyPZCarousel
                    items={renderImageCarousel()}
                  />
                </div>
                {renderFavorite()}
              </div>
              {isnew ? <div className={styles['property-item-section-newlabel']}>NEW</div> : null}
            </div>
            <div className={styles['property-item-info']}>
              <div className={styles['property-item-info-price']}>
                <PropertyPrice value={data.price} type={data.businessType} />
              </div>
              <div className={styles['property-item-info-title']} title={data.title}>{data.title}</div>
              <div className={styles['property-item-info-location']}>
                <PropertyLocation value={data.locationName} />
              </div>
              <div className={styles['property-item-info-details']}>
                <PropertyFeatures
                  category={data.category}
                  type={data.type}
                  bedroom={data.bedrooms}
                  bathroom={data.bathrooms}
                  size={data.size}
                />
              </div>
              <div className={styles['property-item-info-action']}>
                <div className={styles['property-item-info-action-content']}>
                  <ButtonCall
                    onClick={handleCallClick}
                    active={isCallButtonActive}
                    value={agentMobile}
                    loading={phoneProcessing}
                  >
                    Call
                  </ButtonCall>
                </div>
                <div className={styles['property-item-info-action-content']}>
                  <ButtonEmail onClick={handleEmailClick}>Email</ButtonEmail>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PropertyItem;
