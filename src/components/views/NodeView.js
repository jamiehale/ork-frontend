import React, { useReducer } from 'react';
import NodeForm from '../NodeForm';
import Button from '../Button';
import NodeList from '../NodeList';
import Node from '../Node';
import { initialState, reducer } from './NodeView/reducer';
import * as actions from './NodeView/actions';

const defaultNode = {
  type: 'creature',
  subtype: 'npc',
  name: 'Joe',
  aliases: [],
  description: '',
};

const NodeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (node) => {
    if (state.operation === 'editing') {
      dispatch(actions.update(node));
    } else {
      dispatch(actions.add(node));
    }
  };

  const handleCancel = () => {
    dispatch(actions.browse());
  };

  const handleSelect = (i) => {
    dispatch(actions.view(i));
  };

  const handleEdit = (i) => {
    dispatch(actions.edit(i));
  };

  const handleAdd = () => {
    dispatch(actions.create());
  };

  const showNewButton = (state.operation === 'browsing' || state.operation === 'viewing');
  const showEditForm = (state.operation === 'editing');
  const showCreateForm = (state.operation === 'creating');
  const showView = (state.operation === 'viewing');

  return (
    <>
      <h4>{state.operation}</h4>
      <NodeList
        nodes={state.nodes}
        onSelect={handleSelect}
        onEdit={handleEdit}
      />
      {showNewButton && (
        <Button onClick={handleAdd}>New</Button>
      )}
      {showView && (
        <Node
          node={state.nodes[state.selectedNode]}
        />
      )}
      {showEditForm && (
        <NodeForm
          node={state.nodes[state.selectedNode]}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
      {showCreateForm && (
        <NodeForm
          buttonLabel="Create"
          node={defaultNode}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default NodeView;
