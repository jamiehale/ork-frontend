import React from 'react';
import { Link } from 'react-router-dom';

const ElementLink = ({
  element,
}) => (
  <Link to={`/elements/${element.id}`}>{element.name}</Link>
);

export default ElementLink;
