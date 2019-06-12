import React from 'react';
import { Link } from 'react-router-dom';

const CampaignLink = ({
  campaign,
}) => (
  <Link to={`/campaigns/${campaign.id}`}>{campaign.name}</Link>
);

export default CampaignLink;
