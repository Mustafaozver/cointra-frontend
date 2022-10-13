import React from 'react';
import Link from 'next/link';

import { MyPZButton, MyPZContainer } from '../../mypzkit';

const NotFoundPage = () => (
  <div>
    <MyPZContainer>
      <center>
        <h1>404</h1>
        Not found this page
      </center>
      <div>
        <Link href="/" passHref>
          <MyPZButton>Home</MyPZButton>
        </Link>
      </div>
    </MyPZContainer>
  </div>
);

export default NotFoundPage;
