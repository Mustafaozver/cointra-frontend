
import React from 'react';
import styles from './NavigationBar.module.scss';
import { MyPZLink } from '../../mypzkit';



const NavigationBar = (props) => {
  const BuildPathUI = (path) => {
    const isFirst = 0;
    const isLast = path.length - 1;
    return (
      <ul className={styles['NavigationBar_OutSide']}>
        {path.map((item, index) => {
          return (
            <li className={styles['NavigationBar_Step']} key='NavigationBar'>
              {index == isFirst ?
                <span className={styles['NavigationBar_First_Step']}></span> // first step
                : 
                <span className={styles['NavigationBar_Continues_Step']}></span> // continues step
              }
              {index != isLast ?
                <span className={styles['NavigationBar_Continues_Link']}>
                  <MyPZLink
                    to={item.Url}
                    linkType="simple"
                  >
                    {item.Path}
                  </MyPZLink>
                </span>
                :
                <span className={styles['NavigationBar_End_Link']}>
                  {item.Path}
                </span>
              }
            </li>
          );
        })}
      </ul>
    );
  };
  const { Paths } = props;
  return (
    <div className={styles['NavigationBar']}>
      {BuildPathUI(Paths)}
    </div>
  );
};

export default NavigationBar;