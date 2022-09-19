import React from 'react';
import queryString from 'query-string';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import styles from './MyPZPagination.module.scss';
import MyPZLink from '../link/MyPZLink';

const MyPZPagination = (props) => {
  const {
    maxPage,
    currentPage,
    baseUrl,
    onChange,
  } = props;

  const handleOnChange = (newPage) => (e) => {
    if (onChange) {
      onChange(e, newPage);
    }
  };

  const getUrlFromPage = (page) => {
    const parsedUrl = queryString.parseUrl(baseUrl);
    return queryString.stringifyUrl({
      url: parsedUrl.url,
      query: { ...parsedUrl.query, page },
    });
  };

  const renderButton = (page, content, isDisabled, key) => {
    return (
      <button
        onClick={handleOnChange(page)}
        disabled={isDisabled}
        className={styles[`mypz-pagination__button${currentPage === page ? '-active' : ''}`]}
        key={key}
        type="button"
      >
        {content}
      </button>
    );
  };

  const renderLinkButton = (link, page, name, isDisabled, key) => {
    if(!isDisabled){
      return (
        <MyPZLink to={link} key={key}>
          {renderButton(page, name, isDisabled)}
        </MyPZLink>
      );
    }
    else if (key > 0) return renderButton(page, name, isDisabled);
    return null;
  };

  const renderFinalButton = (page, content, isDisabled, key) => {
    if (baseUrl) {
      const link = getUrlFromPage(page);
      return renderLinkButton(link, page, content, isDisabled, key);
    }

    return renderButton(page, content, isDisabled, key);
  };

  const renderPageButton = (page) => {
    const isDisabled = currentPage === page;
    return renderFinalButton(page, page, isDisabled, page);
  };

  const renderPrevButton = () => {
    const page = currentPage - 1;
    const content = (<>
      <span className={styles['mypz-pagination__button-icon']}><KeyboardArrowLeftIcon fontSize="inherit" /></span>
      <span className={styles['mypz-pagination__button-text']}>Previous</span>
    </>);
    const isDisabled = currentPage <= 1;
    return renderFinalButton(page, content, isDisabled, 'prev');
  };

  const renderNextButton = () => {
    const page = currentPage + 1;
    const content = (<>
      <span className={styles['mypz-pagination__button-text']}>Next</span>
      <span className={styles['mypz-pagination__button-icon']}><KeyboardArrowRightIcon fontSize="inherit" /></span>
    </>);
    const isDisabled = currentPage >= maxPage;
    return renderFinalButton(page, content, isDisabled, 'next');
  };

  const renderSeparator = (n) => (
    <div className={styles['mypz-pagination__separator']} key={`separator-${n}`}>
      <span>...</span>
    </div>
  );

  const renderPageButtons = () => {
    const previous = [];
    const middle = [];
    const after = [];
    let min;
    let max;

    if (maxPage <= 7) {
      min = 1;
      max = maxPage;
    } else {
      min = currentPage - 3;
      max = currentPage + 3;

      if (currentPage > 3) {
        min = Math.min(currentPage - 1, maxPage - 4);
        previous.push(renderPageButton(1));
        previous.push(renderSeparator(1));
      }

      if (currentPage < maxPage - 3) {
        max = Math.max(currentPage + 1, 5);
        after.push(renderSeparator(2));
        after.push(renderPageButton(maxPage));
      }

      min = Math.max(min, 1);
      max = Math.min(max, maxPage);
    }
    console.log(min, ' - ', max);
    for (let i = min; i <= max; i++) {
      middle.push(renderPageButton(i));
    }

    return [...previous, ...middle, ...after];
  };

  return (
    <div className={styles['mypz-pagination']}>
      {renderPrevButton()}
      {renderPageButtons()}
      {renderNextButton()}
    </div>
  );
};

export default MyPZPagination;
