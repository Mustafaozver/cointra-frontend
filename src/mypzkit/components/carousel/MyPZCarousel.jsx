import React, { useState, useEffect } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import styles from './MyPZCarousel.module.scss';

const MyPZCarousel = (props) => {
  const {
    items,
    displayDots,
    displayArrows,
    nbItemsToDisplay,
    selectedIndex,
    onChange,
    activeClass,
  } = props;

  const finalNbItemsToDisplay = nbItemsToDisplay || 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(selectedIndex || 0);
  }, [selectedIndex]);

  const changeIndex = (newIndex) => {
    setCurrentIndex(newIndex);
    if (onChange) {
      onChange(newIndex);
    }
  };

  const changeDotClick = (newIndex) => (e) => {
    e.preventDefault();
    changeIndex(newIndex);
  };

  const renderItems = () => items.map((item, i) => <div className={`${styles['mypz-carousel__item']} ${i === currentIndex ? activeClass : ''}`} key={item.index || i}>{item.render}</div>);
  const renderDots = () => items.map((item, i) => {
    if (!displayDots) {
      return false;
    }

    return (
      <div
        className={`${styles['mypz-carousel__dot']} ${styles[i === currentIndex ? 'mypz-carousel__dot-active' : '']}`}
        key={item.index || i}
        onClick={changeDotClick(i)}
        onKeyPress={changeDotClick(i)}
        role="button"
        tabIndex="0"
      >
        <FiberManualRecordIcon style={{ fontSize: '1rem' }} />
      </div>
    );
  });

  const onLeftArrowClick = (e) => {
    e.preventDefault();
    const newIndex = Math.max(currentIndex - 1, 0);
    changeIndex(newIndex);
  };

  const onRightArrowClick = (e) => {
    e.preventDefault();
    const newIndex = Math.min(currentIndex + 1, items.length - finalNbItemsToDisplay);
    changeIndex(newIndex);
  };

  const renderArrows = () => {
    if (!displayArrows) {
      return null;
    }

    return (
      <div className={styles['mypz-carousel__arrows']}>
        <div className={styles['mypz-carousel__left-arrow']} onClick={onLeftArrowClick} onKeyPress={onLeftArrowClick} role="button" tabIndex="0">
          <NavigateBeforeIcon style={{ fontSize: '3rem', marginLeft: '0.4rem' }} />
        </div>
        <div className={styles['mypz-carousel__right-arrow']} onClick={onRightArrowClick} onKeyPress={onRightArrowClick} role="button" tabIndex="0">
          <NavigateNextIcon style={{ fontSize: '3rem', marginRight: '0.4rem' }} />
        </div>
      </div>
    );
  };

  const getTranslation = () => {
    let res = Math.ceil(currentIndex - (finalNbItemsToDisplay / 2));
    res = Math.min(res, items.length - finalNbItemsToDisplay);
    res = Math.max(res, 0);
    return res;
  };

  return (
    <div className={styles['mypz-carousel']}>
      <div className={styles['mypz-carousel__items']} style={{ transform: `translate3d(-${getTranslation() * 100}%, 0, 0)`, width: `${100 / finalNbItemsToDisplay}%` }}>
        {renderItems()}
      </div>
      {renderArrows()}
      <div className={styles['mypz-carousel__dots']}>
        {renderDots()}
      </div>
    </div>
  );
};

export default MyPZCarousel;
