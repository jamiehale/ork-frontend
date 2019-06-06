import React, { useState } from 'react';
import * as R from 'ramda';
import EntityForm from './EntityForm';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import Button from './Button';

const zhentarim = {
  type: 'group',
  subtype: 'faction',
  name: 'Zhentarim',
  aliases: [
    'The Black Network',
    'Zhents',
  ],
  description: 'Lorem ipsum...',
  relationships: [
    {}
  ]
}
const kella = {
  type: 'npc',
  subtype: '?',
  name: 'Kella',
  aliases: [],
  description: 'She\'s a spy!',
  relationships: [
    {
      type: 'membership'
    }
  ]
};

const defaultEntity = {
  type: 'creature',
  subtype: 'npc',
  name: 'Joe',
  aliases: [],
  description: '',
};

const App = () => {
  const [entities, setEntities] = useState([defaultEntity]);
  const [selectedEntity, setSelectedEntity] = useState(undefined);
  const [operation, setOperation] = useState('viewing');

  const handleSubmit = (entity) => {
    console.log(entity);
    if (operation === 'editing') {
      setEntities(R.update(selectedEntity, entity, entities));
      setSelectedEntity(undefined);
    } else {
      setEntities(R.append(entity, entities));
    }
    setOperation('viewing');
  };

  const handleCancel = () => {
    setSelectedEntity(undefined);
    setOperation('viewing');
  };

  const handleSelect = (i) => (e) => {
    setSelectedEntity(i);
    setOperation('editing');
  };

  const handleAdd = (e) => {
    setOperation('adding');
  };

  const entityItems = entities.map((entity, i) => (
    <ListItem key={i} onClick={handleSelect(i)}>
      {entity.name} ({entity.type})
    </ListItem>
  ));

  return (
    <header>
      <h1>ORK</h1>
      <UnorderedList>
        {entityItems}
      </UnorderedList>
      {operation === 'viewing' && (
        <Button onClick={handleAdd}>New</Button>
      )}
      {operation === 'editing' && (
        <EntityForm
          entity={entities[selectedEntity]}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
      {operation === 'adding' && (
        <EntityForm
          buttonLabel="Create"
          entity={defaultEntity}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </header>
  );
};

export default App;
