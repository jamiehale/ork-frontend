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
import Button from './Button';

const EntityForm = ({
  buttonLabel,
  entity,
  onSubmit,
  onCancel,
}) => {
  const [type, setType] = useState(entity.type);
  const [subtype, setSubtype] = useState(entity.subtype);
  const [name, setName] = useState(entity.name);
  const [aliases, setAliases] = useState(entity.aliases);
  const [description, setDescription] = useState(entity.description);

  const handleChangeEntityType = (e) => {
    const newEntityType = e.target.value;
    setType(newEntityType);
    setSubtype(defaultEntitySubtypeIdFor(newEntityType));
  };

  const handleChangeEntitySubtype = (e) => {
    setSubtype(e.target.value);
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
    onSubmit({
      type,
      subtype,
      name,
      aliases,
      description,
    });
  };

  const types = allEntityTypes.map(entityType => (
    <Option key={entityType.id} value={entityType.id}>{entityType.name}</Option>
  ));

  const selectedEntityType = entityTypeMap[type];
  const subtypes = selectedEntityType.subtypes.map(entitySubtype => (
    <Option key={entitySubtype.id} value={entitySubtype.id}>{entitySubtype.name}</Option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Label htmlFor="type">Type</Label>
        <Select id="type" value={type} onChange={handleChangeEntityType}>
          {types}
        </Select>
        <Label htmlFor="subtype">Subtype</Label>
        {subtypes.length > 0 && (
          <Select id="subtype" value={subtype} onChange={handleChangeEntitySubtype}>
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
        <SubmitButton>{buttonLabel}</SubmitButton>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

EntityForm.defaultProps = {
  buttonLabel: 'Update',
};

export default EntityForm;
