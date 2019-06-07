import React, { useState } from 'react';
import { allNodeTypes, defaultNodeSubtypeIdFor, nodeTypeMap } from '../node-types';
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

const NodeForm = ({
  buttonLabel,
  node,
  onSubmit,
  onCancel,
}) => {
  const [type, setType] = useState(node.type);
  const [subtype, setSubtype] = useState(node.subtype);
  const [name, setName] = useState(node.name);
  const [aliases, setAliases] = useState(node.aliases || []);
  const [description, setDescription] = useState(node.description || '');

  const handleChangeNodeType = (newType) => {
    setType(newType);
    setSubtype(defaultNodeSubtypeIdFor(newType));
  };

  const handleChangeNodeSubtype = (newSubtype) => {
    setSubtype(newSubtype);
  };

  const handleChangeName = (newName) => {
    setName(newName);
  };

  const handleChangeAliases = (newAliases) => {
    setAliases(newAliases);
  };

  const handleChangeDescription = (newDescription) => {
    setDescription(newDescription);
  };

  const handleSubmit = () => {
    onSubmit({
      ...node,
      type,
      subtype,
      name,
      aliases,
      description,
    });
  };

  const types = allNodeTypes.map(nodeType => (
    <Option key={nodeType.id} value={nodeType.id}>{nodeType.name}</Option>
  ));

  const selectedNodeType = nodeTypeMap[type];
  const subtypes = selectedNodeType.subtypes.map(nodeSubtype => (
    <Option key={nodeSubtype.id} value={nodeSubtype.id}>{nodeSubtype.name}</Option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Label htmlFor="type">Type</Label>
        <Select id="type" value={type} onChange={handleChangeNodeType}>
          {types}
        </Select>
        <Label htmlFor="subtype">Subtype</Label>
        {subtypes.length > 0 && (
          <Select id="subtype" value={subtype} onChange={handleChangeNodeSubtype}>
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

NodeForm.defaultProps = {
  buttonLabel: 'Update',
};

export default NodeForm;
