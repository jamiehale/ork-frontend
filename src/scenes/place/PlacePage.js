import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import DefaultLayout from '../../layouts/DefaultLayout';
import usePlace from '../../hooks/place';
import CampaignLink from '../../components/CampaignLink';
import useCampaign from '../../hooks/campaign';

const PlacePage = ({
  placeId,
}) => {
  const { place } = usePlace(placeId);
  const { campaign } = useCampaign(place ? place.campaignId : undefined);

  return (
    <DefaultLayout>
      {place && (
        <>
          <h1>Place: {place.name}</h1>
          {place.campaignId && (
            <h2>Campaign: <CampaignLink campaign={campaign} /></h2>
          )}
        </>
      )}
    </DefaultLayout>
  );
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'placeId'),
)(PlacePage);
