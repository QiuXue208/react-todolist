import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

import './style.css';
function Todos() {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todos;
