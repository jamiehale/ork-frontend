import React from 'react';

const Entity = ({
  entity,
}) => {
  const aliasItems = entity.aliases.map((alias, i) => (
    <li key={i}>{alias}</li>
  ));

  return (
    <section>
      <h2>{entity.name}</h2>
      <h3>
        {entity.type}
        {entity.subtype && (
          <>
            &nbsp;
            ({entity.subtype})
          </>
        )}
      </h3>
      <h3>Aliases</h3>
      <ul>
        {aliasItems}
      </ul>
      <h3>Description</h3>
      <p>{entity.description}</p>
    </section>
  );
};

export default Entity;
