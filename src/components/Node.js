import React from 'react';
import NodeAliasList from './NodeAliasList';

const Node = ({
  node,
}) => {
  return (
    <section>
      {node ? (
        <>
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
          <NodeAliasList node={node} />
          <h3>Description</h3>
          <p>{node.description}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default Node;
