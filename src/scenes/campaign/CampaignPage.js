import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import DefaultLayout from '../../layouts/DefaultLayout';
import useCampaign from '../../hooks/campaign';
import useCampaignPeople from '../../hooks/campaign-people';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import PersonLink from '../../components/PersonLink';
import useLocalReducer from './local-reducer';
import NewPersonDialog from './NewPersonDialog';

const CampaignPage = ({
  campaignId,
}) => {
  const { campaign } = useCampaign(campaignId);
  const { people, createPerson } = useCampaignPeople(campaignId);
  const { state, showNewPersonDialog, hideNewPersonDialog } = useLocalReducer();

  const handleNewPerson = (person) => {
    hideNewPersonDialog();
    createPerson(person);
  };

  const peopleItems = people.map(person => (
    <ListItem key={person.id}>
      <PersonLink person={person} />
    </ListItem>
  ));

  return (
    <DefaultLayout>
      {campaign && (
        <h2>{campaign.name}</h2>
      )}
      <UnorderedList>
        {peopleItems}
      </UnorderedList>
      <Button onClick={showNewPersonDialog}>New Person</Button>
      {state.showNewPersonDialog && (
        <NewPersonDialog
          onCancel={hideNewPersonDialog}
          onCreate={handleNewPerson}
        />
      )}
    </DefaultLayout>
  )
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'campaignId'),
)(CampaignPage);
