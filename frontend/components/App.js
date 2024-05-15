import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todoName: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ todoName: event.target.value });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    if (this.state.todoName.trim() !== '') {
      const newTodo = {
        name: this.state.todoName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        todoName: ''
      });
    }
  };

  handleToggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.handleToggleTodo} />
        <Form
          todoName={this.state.todoName}
          handleInputChange={this.handleInputChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}
