import React, { useState } from 'react';
import styled from 'styled-components';
import useCampaignPlaces from '../../hooks/campaign-places';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import PlaceLink from '../../components/PlaceLink';
import NewPlaceForm from './NewPlaceForm';

const Container = styled.section`
  position: relative;
`;

const CampaignPlaces = ({
  campaign,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const { places, createPlace } = useCampaignPlaces(campaign.id);

  const handleNewPlace = (place) => {
    setShowDialog(false);
    createPlace(place);
  };

  const placesItems = places.map(place => (
    <ListItem key={place.id}>
      <PlaceLink place={place} />
    </ListItem>
  ));

  return (
    <Container>
      <h2>Places</h2>
      <UnorderedList>
        {placesItems}
      </UnorderedList>
      <Button onClick={() => setShowDialog(true)}>New Place</Button>
      {showDialog && (
        <NewPlaceForm
          onCancel={() => setShowDialog(false)}
          onCreate={handleNewPlace}
        />
      )}
    </Container>
  );
};

export default CampaignPlaces;
