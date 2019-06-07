import React, { useState } from 'react';
import styled from 'styled-components';
import FlexRow from '../FlexRow';
import FlexColumn from '../FlexColumn';
import NodeList from '../NodeList';
import Node from '../Node';
import Button from '../Button';
import NewNodeDialog from '../NewNodeDialog';

const allNodes = [];
const selectedNode = null;

const LeftColumn = styled(FlexColumn)`
  min-width: 20vw;
`;

const MainView = () => {
  const [showNewNodeDialog, setShowNewNodeDialog] = useState(false);

  const handleNewNodeButtonClick = () => {
    setShowNewNodeDialog(true);
  };

  const handleNewNodeDialogCancel = () => {
    setShowNewNodeDialog(false);
  };

  return (
    <>
      <FlexRow debug>
        <LeftColumn debug>
          <Button onClick={handleNewNodeButtonClick}>New Node</Button>
          <NodeList
            nodes={allNodes}
          />
        </LeftColumn>
        <Node
          node={selectedNode}
        />
      </FlexRow>
      {showNewNodeDialog && (
        <NewNodeDialog
          onCancel={handleNewNodeDialogCancel}
        />
      )}
    </>
  );
};

export default MainView;
