import React, { useReducer } from 'react';
import EntityForm from '../EntityForm';
import Button from '../Button';
import EntityList from '../EntityList';
import Entity from '../Entity';
import { initialState, reducer } from './EntityView/reducer';
import * as actions from './EntityView/actions';

const defaultEntity = {
  type: 'creature',
  subtype: 'npc',
  name: 'Joe',
  aliases: [],
  description: '',
};

const EntityView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (entity) => {
    if (state.operation === 'editing') {
      dispatch(actions.update(entity));
    } else {
      dispatch(actions.add(entity));
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
      <EntityList
        entities={state.entities}
        onSelect={handleSelect}
        onEdit={handleEdit}
      />
      {showNewButton && (
        <Button onClick={handleAdd}>New</Button>
      )}
      {showView && (
        <Entity
          entity={state.entities[state.selectedEntity]}
        />
      )}
      {showEditForm && (
        <EntityForm
          entity={state.entities[state.selectedEntity]}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
      {showCreateForm && (
        <EntityForm
          buttonLabel="Create"
          entity={defaultEntity}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default EntityView;
