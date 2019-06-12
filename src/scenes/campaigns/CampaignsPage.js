import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import ListItem from '../../components/ListItem';
import UnorderedList from '../../components/UnorderedList';
import Button from '../../components/Button';
import useCampaigns from '../../hooks/campaigns';
import useLocalReducer from './local-reducer';
import CampaignLink from './CampaignLink';
import NewCampaignDialog from './NewCampaignDialog';

const CampaignsPage = () => {
  const { campaigns, createCampaign } = useCampaigns({ forceLoad: true });
  const { state, showNewCampaignDialog, hideNewCampaignDialog } = useLocalReducer();

  const handleNewCampaign = (campaign) => {
    hideNewCampaignDialog();
    createCampaign(campaign);
  };

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
      <Button onClick={showNewCampaignDialog}>New</Button>
      {state.showNewCampaignDialog &&
        <NewCampaignDialog
          onCancel={hideNewCampaignDialog}
          onCreate={handleNewCampaign}
        />
      }
    </DefaultLayout>
  )
};

export default CampaignsPage;
