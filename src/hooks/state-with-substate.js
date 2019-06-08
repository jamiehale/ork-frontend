import { useState } from 'react';
import * as R from 'ramda';

const useStateWithSubstate = (substateMap, fn, initialState) => {
  const [state, setState] = useState(initialState || R.keys(substateMap)[0]);
  
  const mappingFn = fn || R.identity;
  return [state, mappingFn(substateMap[state]), setState];
};

export default useStateWithSubstate;
