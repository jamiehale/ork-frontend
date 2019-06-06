import React, { useState } from 'react';
import { allEntityTypes, defaultEntitySubtypeIdFor, entityTypeMap } from './entity-types';
import Option from './Option';
import Select from './Select';
import Label from './Label';
import Fieldset from './Fieldset';
import Form from './Form';
import TextInput from './TextInput';
import Textarea from './Textarea';
import AliasList from './AliasList';
import SubmitButton from './SubmitButton';
import ButtonRow from './ButtonRow';

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


const App = () => {
  const [entityType, setEntityType] = useState('creature');
  const [entitySubtype, setEntitySubtype] = useState('npc');
  const [name, setName] = useState('');
  const [aliases, setAliases] = useState([]);
  const [description, setDescription] = useState('');

  const handleChangeEntityType = (e) => {
    const newEntityType = e.target.value;
    setEntityType(newEntityType);
    setEntitySubtype(defaultEntitySubtypeIdFor(newEntityType));
  };

  const handleChangeEntitySubtype = (e) => {
    setEntitySubtype(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAliases = (newAliases) => {
    setAliases(newAliases);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(entityType, entitySubtype, name, description, aliases);
  };

  const types = allEntityTypes.map(entityType => (
    <Option key={entityType.id} value={entityType.id}>{entityType.name}</Option>
  ));

  const selectedEntityType = entityTypeMap[entityType];
  const subtypes = selectedEntityType.subtypes.map(entitySubtype => (
    <Option key={entitySubtype.id} value={entitySubtype.id}>{entitySubtype.name}</Option>
  ));

  return (
    <header>
      <h1>ORK</h1>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="type">Type</Label>
          <Select id="type" value={entityType} onChange={handleChangeEntityType}>
            {types}
          </Select>
          <Label htmlFor="subtype">Subtype</Label>
          {subtypes.length > 0 && (
            <Select id="subtype" value={entitySubtype} onChange={handleChangeEntitySubtype}>
              {subtypes}
            </Select>
          )}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <TextInput id="name" value={name} onChange={handleChangeName} />
          <Label htmlFor="aliases">Aliases</Label>
          <AliasList id="aliases" value={aliases} onChange={handleChangeAliases} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" value={description} onChange={handleChangeDescription} />
        </Fieldset>
        <ButtonRow>
          <SubmitButton>Create</SubmitButton>
        </ButtonRow>
      </Form>
    </header>
  );
};

export default App;
