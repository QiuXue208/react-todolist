import { SET_FILTER } from './ActionTypes';

export const setFilter = (filterType) => ({
  type: SET_FILTER,
  filter: filterType,
});
