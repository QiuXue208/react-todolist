import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './ActionTypes';

const reducer = (state = [], action) => {
  const { type, id, text, completed } = action || {};
  switch (type) {
    case ADD_TODO:
      return [
        {
          id,
          text,
          completed,
        },
        ...state,
      ];
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    case REMOVE_TODO:
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};

export default reducer;
