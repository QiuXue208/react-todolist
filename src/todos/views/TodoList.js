import React from 'react';
import TodoItem from './TodoItem';
import { FilterTypes } from '../../constants';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../Actions';
// import { bindActionCreators } from 'redux';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggle(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}
    </ul>
  );
}

function selectedTodos(todos, filter) {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.map((item) => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.map((item) => !item.completed);
    default:
      throw new Error('不支持的filter');
  }
}

function mapStateToProps(state) {
  return {
    todos: selectedTodos(state.todos, state.filter),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onToggle: (id) => dispatch(toggleTodo(id)),
    onRemove: (id) => dispatch(removeTodo(id)),
  };
}

// mapDispatchToProps 方法2
// const mapDispatchToProps =  dispatch => bindActionCreators({
//   onRemove: removeTodo,
//   onToggle: toggleTodo
// }, dispatch)

// mapDispatchToProps 方法3
// const mapDispatchToProps = {
//   onRemove: removeTodo,
//   onToggle: toggleTodo
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
