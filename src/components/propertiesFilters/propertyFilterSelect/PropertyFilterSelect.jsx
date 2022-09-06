import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import styles from './PropertyFilterSelect.module.scss';

import { MyPZPopover } from '../../../mypzkit';

const PropertyFilterSelect = (props) => {
  const {
    onClose,
    openerContent,
    content,
    anchorPosition,
  } = props;

  const getOpenerRender = () => (
    <div className={styles['property-filter-select-opener']}>
      <div className={styles['property-filter-select-opener-name']}>
        {openerContent}
      </div>
      <div>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );

  return (
    <div className={styles['property-filter-select']}>
      <MyPZPopover
        opener={getOpenerRender()}
        onClose={onClose}
        anchorPosition={anchorPosition}
      >
        <div className={styles['property-filter-select-content']}>
          {content}
        </div>
      </MyPZPopover>
    </div>
  );
};

export default PropertyFilterSelect;
