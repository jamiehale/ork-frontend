import React, { useState } from 'react';
import styled from 'styled-components';
import useCampaignThings from '../../hooks/campaign-things';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import ThingLink from '../../components/ThingLink';
import NewThingForm from './NewThingForm';

const Container = styled.section`
  position: relative;
`;

const CampaignThings = ({
  campaign,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const { things, createThing } = useCampaignThings(campaign.id);

  const handleNewThing = (thing) => {
    setShowDialog(false);
    createThing(thing);
  };

  const thingsItems = things.map(thing => (
    <ListItem key={thing.id}>
      <ThingLink thing={thing} />
    </ListItem>
  ));

  return (
    <Container>
      <h2>Things</h2>
      <UnorderedList>
        {thingsItems}
      </UnorderedList>
      <Button onClick={() => setShowDialog(true)}>New Thing</Button>
      {showDialog && (
        <NewThingForm
          onCancel={() => setShowDialog(false)}
          onCreate={handleNewThing}
        />
      )}
    </Container>
  );
};

export default CampaignThings;
