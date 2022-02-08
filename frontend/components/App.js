import React from 'react'
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

// import styles from '../styles/styles.css';

const initialState = {
  tasks: [
    { 
      task: 'Organize Garage', 
      id: 1528817077286, 
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ],
  taskInput: ''
}

export default class App extends React.Component {

  state = initialState;

  componentDidMount() {
    this.state.tasks;
  }

  onChange = evt => {
    const { value } = evt.target;
    this.setState({ ...this.state, taskInput: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.setState({ ...this.state, tasks: this.state.taskInput })
  }

  render() {
    console.log('THE STATE -->', this.state);
    return (
      <div>
        <h2>Things I Have To Do:</h2>
        <ul>
          {
            this.state.tasks.map(task => (
              <li key={task.id}>{task.task}</li>
            ))
          }
        </ul>
        <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.taskInput}
              type='text'
              id='taskInput'
              placeholder='Type a new task'
            />
            <input type='submit' />
        </form>
      </div>
    )
  }
}
