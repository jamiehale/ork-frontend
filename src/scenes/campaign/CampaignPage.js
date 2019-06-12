import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import DefaultLayout from '../../layouts/DefaultLayout';
import useCampaign from '../../hooks/campaign';
import useCampaignPeople from '../../hooks/campaign-people';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';

const CampaignPage = ({
  campaignId,
}) => {
  const { campaign } = useCampaign(campaignId);
  const { people } = useCampaignPeople(campaignId);

  const peopleItems = people.map(person => (
    <ListItem key={person.id}>{person.name}</ListItem>
  ));

  return (
    <DefaultLayout>
      {campaign && (
        <h2>{campaign.name}</h2>
      )}
      <UnorderedList>
        {peopleItems}
      </UnorderedList>
    </DefaultLayout>
  )
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'campaignId'),
)(CampaignPage);
