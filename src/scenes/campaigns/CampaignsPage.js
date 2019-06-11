import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../../layouts/DefaultLayout';
import ListItem from '../../components/ListItem';
import UnorderedList from '../../components/UnorderedList';
import * as campaignActions from '../../state/campaigns/actions';
import * as campaignSelectors from '../../state/campaigns/selectors';

const useCampaigns = () => {
  const dispatch = useDispatch();

  const loadCampaigns = useCallback(() => {
    dispatch(campaignActions.loadAllRequest());
  }, [dispatch]);

  const campaigns = useSelector(campaignSelectors.getAllCampaigns);

  return {
    campaigns,
    loadCampaigns,
  };
};

const CampaignsPage = () => {
  const { campaigns, loadCampaigns } = useCampaigns();

  useEffect(() => {
    loadCampaigns();
  }, [loadCampaigns]);

  const campaignItems = campaigns.map(campaign => (
    <ListItem key={campaign.id}>{campaign.name}</ListItem>
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
