import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  refInput = (node) => {
    this.input = node;
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.refInput} />
        <button type="submit">添加</button>
      </form>
    );
  }
}

export default AddTodo;
