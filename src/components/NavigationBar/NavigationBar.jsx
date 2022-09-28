
import React from 'react';
import styles from './NavigationBar.module.scss';
import { MyPZLink } from '../../mypzkit';



const NavigationBar = (props) => {
  //return null;
  const BuildPathUI = (path) => {
    const isFirst = 0;
    const isLast = path.length - 1;
    return (
      <nav>
        <ol className={styles['NavigationBar_OutSide']}>
          {path.map((item, index) => {
            schemaJson_BreadcrumbList.itemListElement.push({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@id': 'https://www.zeekeez.com' + item.Url,
                name: item.Path
              }
            });
            return (
              <li className={styles['NavigationBar_Step']} key={'NavigationBar_'+index}>
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
        </ol>
      </nav>
    );
  };
  const { Paths } = props;
  const schemaJson_BreadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };
  return (
    <div className={styles['NavigationBar']}>
      {BuildPathUI(Paths)}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson_BreadcrumbList) }} />
    </div>
  );
};

export default NavigationBar;