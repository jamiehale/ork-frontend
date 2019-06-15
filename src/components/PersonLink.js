import React from 'react';
import { Link } from 'react-router-dom';

const PersonLink = ({
  person,
}) => (
  <Link to={`/people/${person.id}`}>{person.name}</Link>
);

export default PersonLink;
