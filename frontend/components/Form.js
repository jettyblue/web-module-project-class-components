import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          onChange={this.props.onChange}  
          value={this.props.taskInput}
          type='text'
          id='taskInput'
          placeholder='Type a new task'
        />
        <button>Add Todo</button>
      </form>
    )
  }
}
