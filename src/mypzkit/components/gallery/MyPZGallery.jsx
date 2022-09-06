import React, { useState } from 'react';

import styles from './MyPZGallery.module.scss';

import MyPZCarousel from '../carousel/MyPZCarousel';
import MyPZContainer from '../container/MyPZContainer';

const MyPZGallery = (props) => {
  const { images, getImageUrl } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onCarouselChange = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  const onNavClick = (newIndex) => () => {
    setSelectedIndex(newIndex);
  };

  const getImageIndex = (x) => (x + images.length) % images.length;

  return (
    <div className={styles['mypz-gallery']}>
      <div className={styles['mypz-gallery__main-preview-container']}>
        <MyPZContainer className={styles['mypz-gallery__main-container']}>
          <MyPZCarousel
            onChange={onCarouselChange}
            displayArrows
            selectedIndex={selectedIndex}
            items={
              images.map((imageLink) => ({
                index: imageLink.index,
                render: (<img
                  className={styles['mypz-gallery__img']}
                  src={getImageUrl(imageLink.path)}
                  alt={imageLink.name}
                />),
              }))
            }
          />
        </MyPZContainer>
        <MyPZContainer isSmall className={styles['mypz-gallery__preview-container']}>
          <div className={styles['mypz-gallery__preview-item']} onClick={onNavClick(getImageIndex(selectedIndex - 1))} onKeyPress={onNavClick(getImageIndex(selectedIndex - 1))} role="button" tabIndex="0">
            <img
              className={styles['mypz-gallery__img']}
              src={getImageUrl(images[getImageIndex(selectedIndex - 1)].path)}
              alt={images[getImageIndex(selectedIndex - 1)].name}
            />
          </div>
          <div className={styles['mypz-gallery__preview-item']} onClick={onNavClick(getImageIndex(selectedIndex + 1))} onKeyPress={onNavClick(getImageIndex(selectedIndex + 1))} role="button" tabIndex="0">
            <img
              className={styles['mypz-gallery__img']}
              src={getImageUrl(images[getImageIndex(selectedIndex + 1)].path)}
              alt={images[getImageIndex(selectedIndex + 1)].name}
            />
          </div>
          <div className={styles['mypz-gallery__preview-item']} onClick={onNavClick(getImageIndex(selectedIndex + 2))} onKeyPress={onNavClick(getImageIndex(selectedIndex + 2))} role="button" tabIndex="0">
            <img
              className={styles['mypz-gallery__img']}
              src={getImageUrl(images[getImageIndex(selectedIndex + 2)].path)}
              alt={images[getImageIndex(selectedIndex + 2)].name}
            />
          </div>
        </MyPZContainer>
      </div>
      <div className={styles['mypz-gallery__nav-container']}>
        <MyPZCarousel
          nbItemsToDisplay={8.5}
          selectedIndex={selectedIndex}
          onChange={onCarouselChange}
          items={
            images.map((imageLink, i) => ({
              index: imageLink.index,
              render: (
                <div className={styles['mypz-gallery__nav-img']} onClick={onNavClick(i)} onKeyPress={onNavClick(i)} role="button" tabIndex="0">
                  <img
                    className={styles[`${i === selectedIndex ? 'mypz-gallery__nav-img-active' : ''}`]}
                    src={getImageUrl(imageLink.path)}
                    alt={imageLink.name}
                  />
                </div>
              ),
            }))
          }
        />
      </div>
    </div>
  );
};

export default MyPZGallery;
