import React, { useState } from 'react';
import styled from 'styled-components';
import useCampaignElements from '../../hooks/campaign-elements';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import ElementLink from '../../components/ElementLink';
import NewElementDialog from './NewElementDialog';

const Container = styled.section`
  position: relative;
`;

const CampaignElements = ({
  campaign,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const { elements, createElement } = useCampaignElements(campaign.id);

  const handleNewElement = (element) => {
    setShowDialog(false);
    createElement(element);
  };

  const elementsItems = elements.map(element => (
    <ListItem key={element.id}>
      <ElementLink element={element} />
    </ListItem>
  ));

  return (
    <Container>
      <h2>Elements</h2>
      <UnorderedList>
        {elementsItems}
      </UnorderedList>
      <Button onClick={() => setShowDialog(true)}>New Element</Button>
      {showDialog && (
        <NewElementDialog
          onCancel={() => setShowDialog(false)}
          onCreate={handleNewElement}
        />
      )}
    </Container>
  );
};

export default CampaignElements;
