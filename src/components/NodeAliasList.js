import React from 'react';

const NodeAliasList = ({
  node,
}) => {
  const aliasItems = node.aliases.map((alias, i) => (
    <li key={i}>{alias}</li>
  ));

  return (
    <ul>
      {aliasItems}
    </ul>
  );
};

export default NodeAliasList;
