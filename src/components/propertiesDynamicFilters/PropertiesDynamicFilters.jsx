import React from 'react';

import styles from './PropertiesDynamicFilters.module.scss';

import { MyPZSlider, MyPZButton } from '../../mypzkit';

const PropertiesDynamicFilters = (props) => {
  const { slidersConfig, onClick } = props;

  const renderSlider = () => slidersConfig.map((e) => (
    <div className={styles['property-dynamic-filter-item']} key={e.label}>
      <span>{e.label}</span>
      <MyPZSlider
        min={e.min}
        max={e.max}
        onChange={e.onChange}
        value={e.values}
      />
    </div>
  ));

  return (
    <div className={styles['property-dynamic-filter']}>
      <span className={styles['property-dynamic-filter-title']}>Dynamic Filters</span>
      <div className={styles['property-dynamic-filter-items']}>
        {renderSlider()}
      </div>
      <div className={styles['property-dynamic-filter-button']}>
        <MyPZButton onClick={onClick}>Apply</MyPZButton>
      </div>
    </div>
  );
};

export default PropertiesDynamicFilters;
