import React from 'react';
import * as R from 'ramda';
import TextInput from './TextInput';
import Label from './Label';
import UnorderedList from './UnorderedList';
import Button from './Button';
import ListItem from './ListItem';

const AliasList = ({
  value: aliases,
  onChange,
}) => {
  const handleChange = index => (newAlias) => {
    onChange(R.update(index, newAlias, aliases));
  };

  const handleAddAlias = () => {
    onChange(R.append('', aliases));
  };

  const handleRemoveAlias = index => () => {
    onChange(R.remove(index, 1, aliases));
  };

  const aliasItems = aliases.map((alias, i) => (
    <ListItem key={`alias${i}`}>
      <Label htmlFor={`alias${i + 1}`}>{`Alias #${i + 1}`}</Label>
      <TextInput id={`alias${i + 1}`} value={alias} onChange={handleChange(i)} />
      <Button onClick={handleRemoveAlias(i)}>Delete</Button>
    </ListItem>
  ))
  return (
    <>
      <UnorderedList>
        {aliasItems}
      </UnorderedList>
      <Button onClick={handleAddAlias}>Add</Button>
    </>
  );
};

export default AliasList;
