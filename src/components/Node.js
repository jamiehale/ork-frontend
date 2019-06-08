import React from 'react';
import Button from './Button';
import NodeAliasList from './NodeAliasList';

const Node = ({
  node,
  onEdit,
}) => {
  const handleEdit = () => {
    onEdit(node.id);
  };

  return (
    <>
      <Button onClick={handleEdit}>Edit</Button>
      <section>
        <h2>{node.name}</h2>
        <h3>
          {node.category}
          {node.type && (
            <>
              &nbsp;
              ({node.type})
            </>
          )}
        </h3>
        <h3>Aliases</h3>
        <NodeAliasList node={node} />
        <h3>Description</h3>
        <p>{node.description}</p>
      </section>
    </>
  );
};

export default Node;
