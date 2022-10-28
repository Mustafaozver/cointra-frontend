import React from 'react';
import Link from 'next/link';
import styles from './NotFoundPage.module.scss';

import { MyPZButton, MyPZContainer } from '../../mypzkit';

const NotFoundPage = () => (
  <div>
    <MyPZContainer>
      <div  className={styles['page-404__body']}>
        <center>
          <h1>404</h1>
          Not found this page
        </center>
      </div>
      <div>
        <Link href="/" passHref>
          <MyPZButton>Home</MyPZButton>
        </Link>
      </div>
    </MyPZContainer>
  </div>
);

export default NotFoundPage;
