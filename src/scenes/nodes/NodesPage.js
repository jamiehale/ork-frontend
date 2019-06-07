import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';
import NodeList from '../../components/NodeList';
import Node from '../../components/Node';
import Button from '../../components/Button';
import NewNodeDialog from '../../components/NewNodeDialog';
import NodeForm from '../../components/NodeForm';
import DefaultLayout from '../../layouts/DefaultLayout';
import { getNodes, getNodesById } from '../../state/nodes/selectors';
import * as nodeActions from '../../state/nodes/actions';
import useLoggingReducer from '../../hooks/logging-reducer';
import { reducer, initialState } from './reducer';
import * as actions from './actions';

const LeftColumn = styled(FlexColumn)`
  min-width: 20vw;
`;

const RightColumn = styled(FlexColumn)`
  flex-grow: 1;
`;

const NodesPage = ({
  nodes,
  nodesById,
  addNode,
  updateNode,
}) => {
  const [state, dispatch] = useLoggingReducer(reducer, initialState);

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
    addNode(newNode);
    dispatch(actions.cancelCreate());
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
    updateNode(updatedNode);
    dispatch(actions.cancelCreate());
  };

  const handleCancelUpdate = () => {
    dispatch(actions.cancelUpdate());
  };

  const isEditing = state.selectedId && state.editing;
  const isViewing = state.selectedId && !state.editing;

  return (
    <DefaultLayout>
      <FlexRow debug>
        <LeftColumn debug="green">
          <Button onClick={handleNewNodeButtonClick}>New Node</Button>
          <NodeList
            nodes={nodes}
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
              node={nodesById[state.selectedId]}
              onSubmit={handleUpdate}
              onCancel={handleCancelUpdate}
            />
          )}
          {isViewing && (
            <Node
              node={nodesById[state.selectedId]}
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
    </DefaultLayout>
  );
};

const mapStateToProps = state => ({
  nodes: getNodes(state),
  nodesById: getNodesById(state),
});

const mapDispatchToProps = dispatch => ({
  addNode: (node) => { dispatch(nodeActions.addNode(node)); },
  updateNode: (node) => { dispatch(nodeActions.updateNode(node)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NodesPage);
