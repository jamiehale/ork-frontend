import * as R from 'ramda';
import { allCategories } from '../../categories';

const initialState = {
  ids: allCategories.sort((a, b) => a.name.localeCompare(b.name)).map(R.prop('id')),
  byId: allCategories.reduce((categoryMap, category) => ({
    ...categoryMap,
    [category.id]: category,
  }), {}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
