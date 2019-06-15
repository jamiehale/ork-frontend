import axios from 'axios';
import campaigns from './campaigns';
import people from './people';

const baseUrl = 'http://localhost:8080/api/v1';
const v1Path = base => path => `${baseUrl}${base}${path}`;

export default {
  ...campaigns(v1Path('/campaigns'), axios),
  ...people(v1Path('/people'), axios),
};
