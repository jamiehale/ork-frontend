import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import DefaultLayout from '../../layouts/DefaultLayout';
import useCampaign from '../../hooks/campaign';
import useCampaignPlaces from '../../hooks/campaign-places';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import CampaignPeople from './CampaignPeople';
import CampaignPlaces from './CampaignPlaces';

const CampaignPage = ({
  campaignId,
}) => {
  const { campaign } = useCampaign(campaignId);
  const { places, createPlace } = useCampaignPlaces(campaignId);

  return (
    <DefaultLayout>
      {campaign && (
        <h2>{campaign.name}</h2>
      )}
      {campaign && (
        <>
          <CampaignPeople campaign={campaign} />
          <CampaignPlaces campaign={campaign} />
        </>
      )}
    </DefaultLayout>
  )
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'campaignId'),
)(CampaignPage);
