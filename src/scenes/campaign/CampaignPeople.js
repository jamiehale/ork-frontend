import React, { useState } from 'react';
import styled from 'styled-components';
import useCampaignPeople from '../../hooks/campaign-people';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import PersonLink from '../../components/PersonLink';
import NewPersonDialog from './NewPersonDialog';

const Container = styled.section`
  position: relative;
`;

const CampaignPeople = ({
  campaign,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const { people, createPerson } = useCampaignPeople(campaign.id);

  const handleNewPerson = (person) => {
    setShowDialog(false);
    createPerson(person);
  };

  const peopleItems = people.map(person => (
    <ListItem key={person.id}>
      <PersonLink person={person} />
    </ListItem>
  ));

  return (
    <Container>
      <h2>People</h2>
      <UnorderedList>
        {peopleItems}
      </UnorderedList>
      <Button onClick={() => setShowDialog(true)}>New Person</Button>
      {showDialog && (
        <NewPersonDialog
          onCancel={() => setShowDialog(false)}
          onCreate={handleNewPerson}
        />
      )}
    </Container>
  );
};

export default CampaignPeople;
