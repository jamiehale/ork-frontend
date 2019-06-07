import { useState } from 'react';
import * as R from 'ramda';

const useStateWithSubstate = (initialState, substateMap, f = R.identity) => {
  const [type, setType] = useState(initialState);

  return [type, f(substateMap[type]), setType];
};

export default useStateWithSubstate;
