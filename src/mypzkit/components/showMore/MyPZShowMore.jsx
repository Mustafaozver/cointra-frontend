import React, { useState } from 'react';

import styles from './MyPZShowMore.module.scss';

import MyPZLink from '../link/MyPZLink';

const MyPZShowMore = (props) => {
  const {
    children,
    showMoreText,
    showLessText,
    expandedHeight,
    collapsedHeight,
    expanded,
    onChange,
  } = props;

  const [isExpanded, setIsExpanded] = useState(expanded || false);
  const finalShowMoreText = showMoreText || 'Show more';
  const finalShowLessText = showLessText || 'Show less';
  const finalExpandedHeight = expandedHeight || '200rem';
  const finalCollapsedHeight = collapsedHeight || '10rem';

  const handleToggleButton = (e) => {
    e.preventDefault();
    if (onChange) {
      onChange(!isExpanded);
    }
    setIsExpanded(!isExpanded);
  };

  const renderToggleText = () => {
    if (isExpanded) {
      return finalShowLessText;
    }

    return finalShowMoreText;
  };

  return (
    <div className={styles['mypz-show-more']}>
      <div
        className={`${styles['mypz-show-more__content']} ${styles[isExpanded ? 'mypz-show-more__content-expanded' : '']}`}
        style={{ maxHeight: isExpanded ? finalExpandedHeight : finalCollapsedHeight }}
      >
        {children}
      </div>
      <div className={styles['mypz-show-more__button']} onClick={handleToggleButton} onKeyPress={handleToggleButton} role="button" tabIndex="0">
        <MyPZLink linkType="simple" onClick={(e) => e.preventDefault()}>
          {renderToggleText()}
        </MyPZLink>
      </div>
    </div>
  );
};

export default MyPZShowMore;
