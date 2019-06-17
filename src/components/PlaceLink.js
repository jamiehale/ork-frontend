import React from 'react';
import { Link } from 'react-router-dom';

const PlaceLink = ({
  place,
}) => (
  <Link to={`/places/${place.id}`}>{place.name}</Link>
);

export default PlaceLink;
