import React from 'react';
import { Link } from 'react-router-dom';

const ThingLink = ({
  thing,
}) => (
  <Link to={`/things/${thing.id}`}>{thing.name}</Link>
);

export default ThingLink;
