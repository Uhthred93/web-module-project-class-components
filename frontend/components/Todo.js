import React from 'react'

class Todo extends React.Component {
  handleToggle = () => {
    this.props.toggleTodo(this.props.todo.id);
  };

  render() {
    return (
      <div onClick={this.handleToggle} style={{ textDecoration: this.props.todo.completed ? 'line-through' : 'none' }}>
        {this.props.todo.name}
      </div>
    );
  }
}

export default Todo;
