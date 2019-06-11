import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import ListItem from '../../components/ListItem';
import UnorderedList from '../../components/UnorderedList';
import useCampaigns from '../../hooks/campaigns';

const CampaignLink = ({
  campaign,
}) => (
  <Link to={`/campaigns/${campaign.id}`}>{campaign.name}</Link>
);

const CampaignsPage = () => {
  const { campaigns } = useCampaigns({ forceLoad: true });

  const campaignItems = campaigns.map(campaign => (
    <ListItem key={campaign.id}>
      <CampaignLink campaign={campaign} />
    </ListItem>
  ));

  return (
    <DefaultLayout>
      <h2>Howdy</h2>
      <UnorderedList>
        {campaignItems}
      </UnorderedList>
    </DefaultLayout>
  )
};

export default CampaignsPage;
