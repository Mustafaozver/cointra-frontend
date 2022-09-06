import React from 'react';

import styles from './ConciergeServiceHire.module.scss';

const ConciergeServiceHire = () => (
  <div className={styles['concierge-service__hire']}>
    <h1>
      Hire your own dedicated House Hunter with zeekeez Concierge Service!
    </h1>
    <div className={styles['concierge-service__hire-items']}>
      <div className={styles['concierge-service__hire-item']}>
        <h2>✔ Smart</h2>
        <p>
          Your House Hunter will help you determine
          which property can deliver the greatest return on your investment.
        </p>
      </div>
      <div className={styles['concierge-service__hire-item']}>
        <h2>✔ Fast</h2>
        <p>
          Your House Hunter will start immediatly
          to work on your search once we receive your request.
        </p>
      </div>
      <div className={styles['concierge-service__hire-item']}>
        <h2>✔ Transparent</h2>
        <p>
          You'll never have to worry about extra costs or any additional fees.
          One contract, one goal.
        </p>
      </div>
      <div className={styles['concierge-service__hire-item']}>
        <h2>✔ Easy</h2>
        <p>
          Your House Hunter will be by your side throughout the process,
          advising you along the way.
        </p>
      </div>
    </div>
  </div>
);

export default ConciergeServiceHire;
