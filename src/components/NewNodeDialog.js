import React, { useState } from 'react';
import * as R from 'ramda';
import useCategoryWithType from '../hooks/state-with-substate';
import { allCategories, categoryMap } from '../categories';
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
  const [category, types, setCategory] = useCategoryWithType(categoryMap, R.prop('types'));
  const [type, setType] = useState(types[0].id);
  const [name, setName] = useState('');
  const autoFocusRef = useAutoFocus();

  const handleSubmit = () => {
    onNewNode({
      category,
      type,
      name,
    });
  };

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const handleChangeType = (newType) => {
    setType(newType);
  };

  const handleChangeName = (newName) => {
    setName(newName);
  };

  const categoryOptions = allCategories.map(type => (
    <Option key={type.id} value={type.id}>{type.name}</Option>
  ));

  const typeOptions = types.map(type => (
    <Option key={type.id} value={type.id}>{type.name}</Option>
  ));

  return (
    <Dialog title="New Node">
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <TextInput ref={autoFocusRef} id="name" value={name} onChange={handleChangeName} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="category">Category</Label>
          <Select id="category" value={category} onChange={handleChangeCategory}>
            {categoryOptions}
          </Select>
          <Label htmlFor="type">Type</Label>
          {types.length > 0 && (
            <Select id="type" value={type} onChange={handleChangeType}>
              {typeOptions}
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
