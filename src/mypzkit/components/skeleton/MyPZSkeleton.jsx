import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const defaultProps = {
  width: 350,
  height: 150,
};

const MyPZSkeleton = (props) => {
  const { width, height, shape } = { ...defaultProps, ...props };

  return (<Skeleton variant={shape} width={width} height={height} />);
};

export default MyPZSkeleton;
