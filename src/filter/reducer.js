import { SET_FILTER } from './ActionTypes';
import { FilterTypes } from '../constants';

const reducer = (state = FilterTypes.ALL, action) => {
  const { type, filter } = action;
  switch (type) {
    case SET_FILTER:
      return filter;
    default:
      return state;
  }
};
export default reducer;
