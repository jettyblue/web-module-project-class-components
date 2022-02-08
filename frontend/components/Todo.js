import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    // console.log('handle click', this.props.todo);
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        { this.props.todo.task }
        { this.props.todo.completed ? <span> **completed**</span> : <span> </span> }
      </li>
    )
  }
}
