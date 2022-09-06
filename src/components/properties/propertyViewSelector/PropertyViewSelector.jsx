import React from 'react';
import CalendarViewDayRoundedIcon from '@material-ui/icons/CalendarViewDayRounded';
import ViewModuleRoundedIcon from '@material-ui/icons/ViewModuleRounded';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';

import styles from './PropertyViewSelector.module.scss';

const PropertyViewSelector = (props) => {
  const { onChange, view } = props;

  return (
    <div className={styles['property-view-selector']}>
      <ViewModuleRoundedIcon
        className={`${styles['property-view-selector-icon']} ${styles[view === 'grid' ? 'active' : '']}`}
        onClick={() => onChange('grid')}
      />
      <ViewListRoundedIcon
        className={`${styles['property-view-selector-icon']} ${styles[view === 'list' ? 'active' : '']}`}
        onClick={() => onChange('list')}
      />
      <CalendarViewDayRoundedIcon
        className={`${styles['property-view-selector-icon']} ${styles[view === 'card' ? 'active' : '']}`}
        onClick={() => onChange('card')}
      />
    </div>
  );
};

export default PropertyViewSelector;
