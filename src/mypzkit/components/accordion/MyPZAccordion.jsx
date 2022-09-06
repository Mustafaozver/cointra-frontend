import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './MyPZAccordion.module.scss';

const MyPZAccordion = (props) => {
  const {
    title,
    children,
  } = props;

  return (
    <div className={styles['mypz-accordion']}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div className={styles['mypz-accordion__title']}>
            {title}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles['mypz-accordion__details']}>
            {children}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyPZAccordion;
