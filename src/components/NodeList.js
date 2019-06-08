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

  const nodeItems = nodes.map(node => (
    <ListItem key={node.id}>
      <LinkButton onClick={handleSelect(node.id)}>{node.name} ({node.category})</LinkButton>
      &nbsp;
      <LinkButton onClick={handleEdit(node.id)}>Edit</LinkButton>
    </ListItem>
  ));

  return (
    <UnorderedList>
      {nodeItems}
    </UnorderedList>
  );
};

export default NodeList;
