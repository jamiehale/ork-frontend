import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import DefaultLayout from '../../layouts/DefaultLayout';
import useThing from '../../hooks/thing';
import CampaignLink from '../../components/CampaignLink';
import useCampaign from '../../hooks/campaign';

const ThingPage = ({
  thingId,
}) => {
  const { thing } = useThing(thingId);
  const { campaign } = useCampaign(thing ? thing.campaignId : undefined);

  return (
    <DefaultLayout>
      {thing && (
        <>
          <h1>Thing: {thing.name}</h1>
          {thing.campaignId && (
            <h2>Campaign: <CampaignLink campaign={campaign} /></h2>
          )}
        </>
      )}
    </DefaultLayout>
  );
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'thingId'),
)(ThingPage);
