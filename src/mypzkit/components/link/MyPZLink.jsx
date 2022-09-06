import React, { useContext } from 'react';

import styles from './MyPZLink.module.scss';

import MyPZLinkContext from '../linkContext/MyPZLinkContext';

const MyPZLink = (props) => {
  const {
    children,
    to,
    linkType,
    onClick,
  } = props;
  const finalLinkType = linkType || 'regular';
  const finalTo = to || '/';
  const Link = useContext(MyPZLinkContext);

  const renderLink = () => {
    if (onClick) {
      return (
        <a onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link to={finalTo} href={finalTo} passHref>
        {children}
      </Link>
    );
  };

  return (
    <div className={`${styles['mypz-link']} ${styles[finalLinkType]}`}>
      {renderLink()}
    </div>
  );
};

export default MyPZLink;
