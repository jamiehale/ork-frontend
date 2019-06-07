import React, { useCallback, useReducer } from 'react';
import styled from 'styled-components';
import FlexRow from '../FlexRow';
import FlexColumn from '../FlexColumn';
import NodeList from '../NodeList';
import Node from '../Node';
import Button from '../Button';
import NewNodeDialog from '../NewNodeDialog';
import { reducer, initialState } from './MainView/reducer';
import * as actions from './MainView/actions';
import NodeForm from '../NodeForm';

const LeftColumn = styled(FlexColumn)`
  min-width: 20vw;
`;

const RightColumn = styled(FlexColumn)`
  flex-grow: 1;
`;

const loggingMiddleware = next => (state, action) => {
  console.log('Before', state);
  console.log('Action', action);
  const result = next(state, action);
  console.log('After', result);
  return result;
};

const MainView = () => {
  const loggingReducer = useCallback(loggingMiddleware(reducer));
  const [state, dispatch] = useReducer(loggingReducer, initialState);

  const handleNewNodeButtonClick = () => {
    dispatch(actions.showNewNodeDialog());
  };
  
  const handleNewNode = (newNode) => {
    dispatch(actions.create(newNode));
  };

  const handleNewNodeDialogCancel = () => {
    dispatch(actions.hideNewNodeDialog());
  };

  const handleCreateNode = (newNode) => {
    dispatch(actions.add(newNode));
  };

  const handleCancelCreateNode = () => {
    dispatch(actions.cancelCreate());
  };

  const handleSelectNode = (nodeId) => {
    dispatch(actions.select(nodeId));
  };

  const handleEditNode = (nodeId) => {
    dispatch(actions.edit(nodeId));
  };

  const handleUpdate = (updatedNode) => {
    dispatch(actions.update(updatedNode));
  };

  const handleCancelUpdate = () => {
    dispatch(actions.cancelUpdate());
  };

  const isEditing = state.selectedId && state.editing;
  const isViewing = state.selectedId && !state.editing;

  return (
    <>
      <FlexRow debug>
        <LeftColumn debug="green">
          <Button onClick={handleNewNodeButtonClick}>New Node</Button>
          <NodeList
            nodes={state.nodeIds.map(id => state.nodes[id])}
            onSelect={handleSelectNode}
            onEdit={handleEditNode}
          />
        </LeftColumn>
        <RightColumn debug="green">
          {state.newNode && (
            <NodeForm
              buttonLabel="Create"
              node={state.newNode}
              onSubmit={handleCreateNode}
              onCancel={handleCancelCreateNode}
            />
          )}
          {isEditing && (
            <NodeForm
              buttonLabel="Update"
              node={state.nodes[state.selectedId]}
              onSubmit={handleUpdate}
              onCancel={handleCancelUpdate}
            />
          )}
          {isViewing && (
            <Node
              node={state.nodes[state.selectedId]}
              onEdit={handleEditNode}
            />
          )}
        </RightColumn>
      </FlexRow>
      {state.showNewNodeDialog && (
        <NewNodeDialog
          onNewNode={handleNewNode}
          onCancel={handleNewNodeDialogCancel}
        />
      )}
    </>
  );
};

export default MainView;
