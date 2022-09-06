import React from 'react';
import { Slider as MaterialSlider } from '@material-ui/core';

import './MyPZSlider.module.scss';

const MyPZSlider = (props) => {
  const {
    value,
    onChange,
    min,
    max,
  } = props;

  return (
    <>
      <MaterialSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </>
  );
};

export default MyPZSlider;
