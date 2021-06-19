import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todos/reducer';
import { reducer as filterReducer } from './filter/reducer';

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default createStore(reducers);
