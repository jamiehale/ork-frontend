import React, { useState } from 'react';
import { allCategories, defaultTypeForCategoryId, categoryMap } from '../categories';
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
import useAutoFocus from '../hooks/auto-focus';

const NodeForm = ({
  buttonLabel,
  node,
  onSubmit,
  onCancel,
}) => {
  const [category, setCategory] = useState(node.category);
  const [type, setType] = useState(node.type);
  const [name, setName] = useState(node.name);
  const [aliases, setAliases] = useState(node.aliases || []);
  const [description, setDescription] = useState(node.description || '');
  const focusRef = useAutoFocus();

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
    setType(defaultTypeForCategoryId(newCategory));
  };

  const handleChangeNodeType = (newType) => {
    setType(newType);
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
      category,
      type,
      name,
      aliases,
      description,
    });
  };

  const categoryOptions = allCategories.map(category => (
    <Option key={category.id} value={category.id}>{category.name}</Option>
  ));

  const selectedCategory = categoryMap[category];
  const typeOptions = selectedCategory.types.map(type => (
    <Option key={type.id} value={type.id}>{type.name}</Option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Label htmlFor="category">Category</Label>
        <Select id="category" value={category} onChange={handleChangeCategory}>
          {categoryOptions}
        </Select>
        <Label htmlFor="type">Type</Label>
        {typeOptions.length > 0 && (
          <Select id="type" value={type} onChange={handleChangeNodeType}>
            {typeOptions}
          </Select>
        )}
      </Fieldset>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <TextInput ref={focusRef} id="name" value={name} onChange={handleChangeName} />
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
