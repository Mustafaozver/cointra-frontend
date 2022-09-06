import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './FavoriteBadge.module.scss';

import { MyPZBadge } from '../../mypzkit';

const FavoriteBadge = (props) => {
  const { value } = props;

  const icon = () => (
    <div className={styles['favorite-badge__icon']}>
      <FavoriteIcon size={40} />
    </div>
  );

  if (value < 1) {
    return icon();
  }

  return (
    <MyPZBadge value={value}>
      {icon()}
    </MyPZBadge>
  );
};

export default FavoriteBadge;
