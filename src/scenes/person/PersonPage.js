import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import DefaultLayout from '../../layouts/DefaultLayout';
import usePerson from '../../hooks/person';
import CampaignLink from '../../components/CampaignLink';
import useCampaign from '../../hooks/campaign';

const PersonPage = ({
  personId,
}) => {
  const { person } = usePerson(personId);
  const { campaign } = useCampaign(person ? person.campaignId : undefined);

  return (
    <DefaultLayout>
      {person && (
        <>
          <h1>Person: {person.name}</h1>
          {person.campaignId && (
            <h2>Campaign: <CampaignLink campaign={campaign} /></h2>
          )}
        </>
      )}
    </DefaultLayout>
  );
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'personId'),
)(PersonPage);
