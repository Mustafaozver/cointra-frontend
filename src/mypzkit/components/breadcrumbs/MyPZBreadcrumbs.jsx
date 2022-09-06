import React from 'react';
import { Breadcrumbs as MaterialBreadcrumbs } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import styles from './MyPZBreadcrumbs.module.scss';

import MyPZLink from '../link/MyPZLink';

const MyPZBreadcrumbs = (props) => {
  const { links, icon } = props;
  const finalLinks = links || [];

  const linksRender = finalLinks.map((link) => (
    <MyPZLink to={link.link} key={link.link} linkType="tertiary">{link.name}</MyPZLink>
  ));

  return (
    <div className={styles['mypz-breadcrumbs']}>
      <MaterialBreadcrumbs separator={<KeyboardArrowRightIcon fontSize="small" />} aria-label="breadcrumb">
        <MyPZLink to="/" linkType="tertiary">{icon} &bull; Home</MyPZLink>
        {linksRender}
      </MaterialBreadcrumbs>
    </div>
  );
};

export default MyPZBreadcrumbs;
