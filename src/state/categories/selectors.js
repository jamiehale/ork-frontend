import * as R from 'ramda';

export const getCategory = state => state.categories;
export const getSortedCategories = state => R.sort(R.prop('title'), R.values(state.categories));
