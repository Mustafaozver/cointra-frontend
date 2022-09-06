import React from 'react';

import styles from './AboutUsTitle.module.scss';

const AboutUsTitle = ({ mainTitle, subTitle }) => (
  <div className={styles['about-us-title']}>
    <div className={styles['about-us-title__text']}>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
      <h4 className={styles['about-us-title__text-description']}>
        Whoever you are, local or expat, buyer or seller,
        landlord or tenant,
        agent or developer,or simple curious,
        zeekeez is here to empower you by making all things home simple,
        efficient and stressless.
      </h4>
      <h4 className={styles['about-us-title__text-description']}>
        zeekeez is the new UAE property reference for people to explore,
        research and share their interests for the UAE property market.
      </h4>
      <p>
        As a PropTech company,
        we help both professionals and individuals to get
        the most complete and detailed information anytime,
        anywhere,
        with our range of innovative digital solutions – website, apps,
        to help you make better decisions.
        <br />
        We tailored an intuitive, smart and designed user
        experience in addition to new exclusive features.
      </p>
      <p>
        Today, more than ever,
        zeekeez is the unique game changer by providing
        unprecedented disruptive offers and solutions.
      </p>
      <p>
        Owned and operated by zeekeez limited,
        zeekeez and mybnbz have been launched in 2020 and is headquartered in London,
        United Kingdom with an regional office in Dubai, United Arab Emirates.
      </p>
      <p>
        No matter what you’re after, zeekeez has your property needs covered.
      </p>
    </div>
    <div className={styles['about-us-title__image']}>
      <img src="/images/zeekeez-3Dmap-400px.jpg" alt="zeekeez-3Dmap-400px" />
    </div>
  </div>
);

export default AboutUsTitle;
