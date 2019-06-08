import * as R from 'ramda';

const filteredState = state => R.pick(['session', 'nodes'], state);

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return filteredState(JSON.parse(serializedState));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(filteredState(state));
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore
  }
};
