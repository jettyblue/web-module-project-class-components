import React from 'react'

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <Todo
          handleToggleTodo={this.handleToggleTodo}
          key={todo.id}
          todo={todo}
          />
        ))}
      </div>
    )
  }
}
