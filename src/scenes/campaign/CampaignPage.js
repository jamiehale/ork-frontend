import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import DefaultLayout from '../../layouts/DefaultLayout';
import useCampaign from '../../hooks/campaign';
import withRemappedRouterParam from '../../components/RemappedRouterParam';

const CampaignPage = ({
  campaignId,
}) => {
  const { campaign } = useCampaign(campaignId);

  return (
    <DefaultLayout>
      {campaign && (
        <h2>{campaign.name}</h2>
      )}
    </DefaultLayout>
  )
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'campaignId'),
)(CampaignPage);
