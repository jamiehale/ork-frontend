import React from 'react';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import LinkButton from './LinkButton';

const NodeList = ({
  nodes,
  onSelect,
  onEdit,
}) => {
  const handleSelect = index => () => {
    onSelect(index);
  };

  const handleEdit = index => () => {
    onEdit(index);
  };

  const nodeItems = nodes.map((node, i) => (
    <ListItem key={i}>
      <LinkButton onClick={handleSelect(i)}>{node.name} ({node.type})</LinkButton>
      &nbsp;
      <LinkButton onClick={handleEdit(i)}>Edit</LinkButton>
    </ListItem>
  ));

  return (
    <UnorderedList>
      {nodeItems}
    </UnorderedList>
  );
};

export default NodeList;
