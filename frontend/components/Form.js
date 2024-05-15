import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleAddTodo}>
        <input
        type="text"
        value={this.props.todoName}
        onChange={this.props.handleInputChange}
        placeholder="Add a todo"
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={this.props.handleClearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default Form;
