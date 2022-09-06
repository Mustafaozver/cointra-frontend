import React from 'react';
import Link from 'next/link';

import { MyPZButton, MyPZContainer } from '../../mypzkit';

const NotFoundPage = () => (
  <div>
    <MyPZContainer>
      <div>Sorry, something wrong happened. Please contact us</div>
      <div>
        <Link href="/" passHref>
          <MyPZButton>Home</MyPZButton>
        </Link>
      </div>
    </MyPZContainer>
  </div>
);

export default NotFoundPage;
