import React from 'react';

import styles from './AboutUsInterest.module.scss';

const AboutUsInterest = () => (
  <div className={styles['about-us-interest']}>
    <div className={styles['about-us-interest__item']}>
      <div className={styles['about-us-interest__item-title']}>
        <h3>Our roots</h3>
      </div>
      <div className={styles['about-us-interest__item-text']}>
        <p>
          “Stop buying 4 walls”.
          People aren’t just looking for a house,
          they want to know what’s around the neighborhood and who is living in the area.<br />
          We started zeekeez because
          we believed data-driven decision-making required better tools.<br />
          Today, cards are reshuffled.
          Individuals and real estate professionals looking for a new home needed better data.
        </p>
      </div>
    </div>
    <div className={styles['about-us-interest__item']}>
      <div className={styles['about-us-interest__item-title']}>
        <h3>Our family</h3>
      </div>
      <div className={styles['about-us-interest__item-text']}>
        <p>
          We’re a team of dedicated techs,
          engineers, designers, business minds,
          and strategists building the new Real Estate Property Portal
          to change the way people search,
          buy, sell, rent their home sweet home.
        </p>
      </div>
    </div>
    <div className={styles['about-us-interest__item']}>
      <div className={styles['about-us-interest__item-title']}>
        <h3>Our mission</h3>
      </div>
      <div className={styles['about-us-interest__item-text']}>
        <p>
          “Home is where the heart is”.
          Our mission is to help everyone find their nest.<br />
          We empower people by making property simple,
          efficient and stress free.<br />
          Whether you’re just beginning your property journey or have had years of experience,
          zeekeez is the number one place for people to come together to explore,
          research and share their passion for the property market.
        </p>
      </div>
    </div>
    <div className={styles['about-us-interest__item']}>
      <div className={styles['about-us-interest__item-title']}>
        <h3>Our values</h3>
      </div>
      <div className={styles['about-us-interest__item-text']}>
        <p>
          Transparency<br />
          Equality<br />
          Fun<br />
          Data driven<br />
          Opportunities matter<br />
          Teamwork<br />
          Meritocracy<br />
          Aestheticis<br />
          Humility (that’s why there is no capital letter in our company name)<br />
        </p>
      </div>
    </div>
  </div>
);

export default AboutUsInterest;
