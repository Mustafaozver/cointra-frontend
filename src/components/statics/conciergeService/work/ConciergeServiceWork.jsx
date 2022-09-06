import React from 'react';

import styles from './ConciergeServiceWork.module.scss';

const ConciergeServiceWork = () => (
  <div className={styles['concierge-service__work']}>
    <h1>How it works ?</h1>
    <p>
      A dedicated House Hunter will be assigned to you once
      you bought any zeekeez Concierge Service.
    </p>
    <div className={styles['concierge-service__work-items']}>
      <div className={styles['concierge-service__work-item']}>
        <div className={styles['concierge-service__work-item__image']}>
          <img src="/images/Concierge-Service-1.jpg" alt="Concierge-Service-1" />
        </div>
        <div className={styles['concierge-service__work-item__text']}>
          <h3>Analysis of your project</h3>
          <p>
            You discuss with your dedicated House Hunter,
            an Agent of zeekeez's broker network,
            who will find the property of your dream in the United Arab Emirates
            – UAE. He will consider all your expectations and
            validates the feasibility of your project.
          </p>
        </div>
      </div>
      <div className={styles['concierge-service__work-item']}>
        <div className={styles['concierge-service__work-item__image']}>
          <img src="/images/Concierge-Service-3.jpg" alt="Concierge-Service-3" />
        </div>
        <div className={styles['concierge-service__work-item__text']}>
          <h3>Personalized selection</h3>
          <p>
            Your dedicated House Hunter will select and
            send you in real-time the best properties that match your expectations,
            included properties Off-Market.
            You will never miss an opportunity.
          </p>
        </div>
      </div>
      <div className={styles['concierge-service__work-item']}>
        <div className={styles['concierge-service__work-item__image']}>
          <img src="/images/Concierge-Service-4.jpg" alt="Concierge-Service-4" />
        </div>
        <div className={styles['concierge-service__work-item__text']}>
          <h3>Efficient visits</h3>
          <p>
            A crush? Some questions? Want to schedule a visit?
            Your House Hunter checks all details for you with the brokers,
            the agency, the developer, or the landlord.
            He will manage to organize a visit for you.
          </p>
        </div>
      </div>
      <div className={styles['concierge-service__work-item']}>
        <div className={styles['concierge-service__work-item__image']}>
          <img src="/images/Concierge-Service-1.jpg" alt="Concierge-Service-1" />
        </div>
        <div className={styles['concierge-service__work-item__text']}>
          <h3>Negotiating and securing your deal</h3>
          <p>
            Your House Hunter negotiates at the best market conditions and
            accompanies you every step of the way,
            from drawing up the offer to signing it,
            according to your needs, until the keys are handed over.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ConciergeServiceWork;
