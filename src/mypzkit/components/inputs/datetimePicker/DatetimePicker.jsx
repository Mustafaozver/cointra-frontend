import React from 'react';
import moment from 'moment';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

import styles from './DatetimePicker.module.scss';

const DatetimePicker = (props) => {
  const { label, value } = props;
  return (
    <KeyboardDateTimePicker
      {...props}
      className={styles['datetime-picker']}
      label={label}
      value={value || moment()}
      variant="inline"
      ampm={false}
      format="yyyy/MM/DD HH:mm"
    />
  );
};

export default DatetimePicker;
