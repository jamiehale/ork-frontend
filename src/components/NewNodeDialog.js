import React, { useState, useRef, useEffect } from 'react';
import * as R from 'ramda';
import useStateWithSubstate from '../hooks/state-with-substate';
import { allNodeTypes, nodeTypeMap } from '../node-types';
import Dialog from './Dialog';
import Form from './Form';
import Fieldset from './Fieldset';
import Label from './Label';
import Select from './Select';
import Option from './Option';
import TextInput from './TextInput';
import ButtonRow from './ButtonRow';
import SubmitButton from './SubmitButton';
import Button from './Button';
import useAutoFocus from '../hooks/auto-focus';

const NewNodeDialog = ({
  onNewNode,
  onCancel,
}) => {
  const [type, subtypes, setType] = useStateWithSubstate('creature', nodeTypeMap, R.prop('subtypes'));
  const [subtype, setSubtype] = useState('pc');
  const [name, setName] = useState('');
  const autoFocusRef = useAutoFocus();

  const handleSubmit = () => {
    onNewNode({
      type,
      subtype,
      name,
    });
  };

  const handleChangeType = (newType) => {
    setType(newType);
  };

  const handleChangeSubtype = (newSubtype) => {
    setSubtype(newSubtype);
  };

  const handleChangeName = (newName) => {
    setName(newName);
  };

  const typeOptions = allNodeTypes.map(type => (
    <Option key={type.id} value={type.id}>{type.name}</Option>
  ));

  const subtypeOptions = subtypes.map(subtype => (
    <Option key={subtype.id} value={subtype.id}>{subtype.name}</Option>
  ));

  return (
    <Dialog title="New Node">
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <TextInput ref={autoFocusRef} id="name" value={name} onChange={handleChangeName} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="type">Type</Label>
          <Select id="type" value={type} onChange={handleChangeType}>
            {typeOptions}
          </Select>
          <Label htmlFor="subtype">Subtype</Label>
          {subtypes.length > 0 && (
            <Select id="subtype" value={subtype} onChange={handleChangeSubtype}>
              {subtypeOptions}
            </Select>
          )}
        </Fieldset>
        <ButtonRow>
          <SubmitButton>Create</SubmitButton>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonRow>
      </Form>
    </Dialog>
  );
};

export default NewNodeDialog;
