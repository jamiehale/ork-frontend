import React from 'react';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import LinkButton from './LinkButton';

const EntityList = ({
  entities,
  onSelect,
  onEdit,
}) => {
  const handleSelect = index => () => {
    onSelect(index);
  };

  const handleEdit = index => () => {
    onEdit(index);
  };

  const entityItems = entities.map((entity, i) => (
    <ListItem key={i}>
      <LinkButton onClick={handleSelect(i)}>{entity.name} ({entity.type})</LinkButton>
      &nbsp;
      <LinkButton onClick={handleEdit(i)}>Edit</LinkButton>
    </ListItem>
  ));

  return (
    <UnorderedList>
      {entityItems}
    </UnorderedList>
  );
};

export default EntityList;
