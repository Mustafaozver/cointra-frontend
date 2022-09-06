import React from 'react';
import styles from './PropertyAgentInfos.module.scss';
import Config from '../../../../config/Config';

const PropertyAgentInfos = (props) => {
  const { agent, agency } = props;

  const handleErrorLoadImage = (e) => {
    e.target.style.display = 'none';
  };

  const agentImageFinal = () => (
    <img
      className={styles['property-agent-infos-agent-avatar']}
      src={agent.imageUrl ? Config.getImageUrl(agent.imageUrl) : '/icons/profile-image.jpg'}
      alt={agent.slug}
      onError={handleErrorLoadImage}
    />
  );

  const agencyImageFinal = () => {
    if (!agency.imageUrl) {
      return null;
    }

    return (
      <img
        className={styles['property-agent-infos-agency-avatar']}
        src={Config.getImageUrl(agency.imageUrl)}
        alt={agency.slug}
        onError={handleErrorLoadImage}
      />
    );
  };

  const agentNameFinal = () => (
    <>{agent.firstName.toLowerCase()} {agent.lastName.toLowerCase()}</>
  );

  return (
    <>
      <div className={styles['property-agent-infos-agency']}>{agencyImageFinal()}</div>
      <span className={styles['property-agent-infos-agent-name']}>{agentNameFinal()}</span>
      <div className={styles['property-agent-infos-agent-image']}>{agentImageFinal()}</div>
    </>
  );
};

export default PropertyAgentInfos;
