/* eslint-disable react/jsx-key */
import React from 'react';
import styles from './NavBar.module.scss';
import { MyPZLink } from '../../mypzkit';

const BuildPathUI = (path) => {
  const isFirst = 0;
  const isLast = path.length - 1;
  return (
    <ul className={styles['NavBar_OutSide']}>
      {path.map((item, index) => {
        return (
          <li className={styles['NavBar_Step']}>
            {index == isFirst ?
              <span className={styles['NavBar_First_Step']}></span> // first step
              : 
              <span className={styles['NavBar_Continues_Step']}></span> // continues step
            }
            {index != isLast ?
              <span className={styles['NavBar_Continues_Link']}>
                <MyPZLink
                  to={item.Url}
                  linkType="simple"
                >
                  {item.Path}
                </MyPZLink>
              </span>
              :
              <span className={styles['NavBar_End_Link']}>
                {item.Path}
              </span>
            }
          </li>
        );
      })}
    </ul>
  );
};

const NavBar = (props) => {
  const { Paths } = props;
  return (
    <div className={styles['NavBar']}>
      {BuildPathUI(Paths)}
    </div>
  );
};


export default NavBar;