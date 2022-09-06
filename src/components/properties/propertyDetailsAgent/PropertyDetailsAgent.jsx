import React, { useState } from 'react';

import styles from './PropertyDetailsAgent.module.scss';

import ButtonEmail from '../../button/buttonEmail/ButtonEmail';
import ButtonCall from '../../button/buttonCall/ButtonCall';
import Config from '../../../config/Config';
import { getPropertyPhone } from '../../../api/properties/propertiesApi';

const PropertyDetailsAgent = (props) => {
  const { agent, slug, onEmailClick } = props;
  const [isCallButtonActive, setIsCallButtonActive] = useState(false);
  const [agentMobile, setAgentMobile] = useState('');
  const [phoneProcessing, setPhoneProcessing] = useState(false);

  const handleErrorLoadImage = (e) => {
    e.target.style.display = 'none';
  };

  const agentImageFinal = () => (
    <img
      className={styles['property-detail-agent__header-image-source']}
      src={agent.imageUrl ? Config.getImageUrl(agent.imageUrl) : '/icons/profile-image.jpg'}
      alt={agent.slug}
      onError={handleErrorLoadImage}
    />
  );

  const handleCallClick = async () => {
    if (!isCallButtonActive) {
      setPhoneProcessing(true);
      const phoneResponse = await getPropertyPhone(slug);
      setAgentMobile(phoneResponse.phone);
      window.location.href = `tel:${phoneResponse.phone}`;
      setPhoneProcessing(false);
    }

    setIsCallButtonActive(!isCallButtonActive);
  };

  return (
    <div className={styles['property-detail-agent']}>
      <div className={styles['property-detail-agent__header']}>
        <div className={styles['property-detail-agent__header-image']}>
          {agentImageFinal()}
        </div>
        <span className={styles['property-detail-agent__header-name']}>{agent.firstName} {agent.lastName}</span>
      </div>
      <div className={styles['property-detail-agent__contact']}>
        <div className={styles['property-detail-agent__contact-button']}>
          <ButtonCall
            onClick={handleCallClick}
            active={isCallButtonActive}
            value={agentMobile}
            loading={phoneProcessing}
          >
            Call
          </ButtonCall>
        </div>
        <div className={styles['property-detail-agent__contact-button']}>
          <ButtonEmail onClick={onEmailClick}>
            Email
          </ButtonEmail>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsAgent;
