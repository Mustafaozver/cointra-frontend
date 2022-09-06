import React from 'react';
import Link from 'next/link';

import { MyPZButton, MyPZContainer } from '../../mypzkit';

const NotFoundPage = () => (
  <div>
    <MyPZContainer>
      <div>Sorry, that page doesn't exist!</div>
      <div>
        <Link href="/" passHref>
          <MyPZButton>Home</MyPZButton>
        </Link>
      </div>
    </MyPZContainer>
  </div>
);

export default NotFoundPage;
