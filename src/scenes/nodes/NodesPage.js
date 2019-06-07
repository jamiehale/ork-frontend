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
    dispatch(actions.newNode());
  };
  
  const handleNewNode = (newNode) => {
    dispatch(actions.create(newNode));
  };

  const handleNewNodeDialogCancel = () => {
    dispatch(actions.browse());
  };

  const handleCreateNode = (newNode) => {
    addNode(newNode);
    dispatch(actions.browse());
  };

  const handleCancelCreateNode = () => {
    dispatch(actions.browse());
  };

  const handleSelectNode = (nodeId) => {
    dispatch(actions.select(nodeId));
  };

  const handleEditNode = (nodeId) => {
    dispatch(actions.edit(nodeId));
  };

  const handleUpdate = (updatedNode) => {
    updateNode(updatedNode);
    dispatch(actions.browse());
  };

  const handleCancelUpdate = () => {
    dispatch(actions.browse());
  };

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
          {state.mode === 'create' && (
            <NodeForm
              buttonLabel="Create"
              node={state.newNode}
              onSubmit={handleCreateNode}
              onCancel={handleCancelCreateNode}
            />
          )}
          {state.mode === 'edit' && (
            <NodeForm
              buttonLabel="Update"
              node={nodesById[state.selectedId]}
              onSubmit={handleUpdate}
              onCancel={handleCancelUpdate}
            />
          )}
          {state.mode === 'view' && (
            <Node
              node={nodesById[state.selectedId]}
              onEdit={handleEditNode}
            />
          )}
        </RightColumn>
      </FlexRow>
      {state.mode === 'new' && (
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
