import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div
        onClick={handleClick}
        className={`todo${this.props.todo.completed ? ' completed' : ''}`}
      >
        <p>{this.props.todo.task}</p>  
      </div>
    )
  }
}
