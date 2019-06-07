import React from 'react';

const Node = ({
  node,
}) => {
  const aliasItems = node.aliases.map((alias, i) => (
    <li key={i}>{alias}</li>
  ));

  return (
    <section>
      <h2>{node.name}</h2>
      <h3>
        {node.type}
        {node.subtype && (
          <>
            &nbsp;
            ({node.subtype})
          </>
        )}
      </h3>
      <h3>Aliases</h3>
      <ul>
        {aliasItems}
      </ul>
      <h3>Description</h3>
      <p>{node.description}</p>
    </section>
  );
};

export default Node;
