import React from 'react'
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

// import styles from '../styles/styles.css';

// const initialState = {
//   tasks: [
//     { 
//       task: 'Organize Garage', 
//       id: 1528817077286, 
//       completed: false
//     },
//     {
//       task: 'Bake Cookies',
//       id: 1528817084358,
//       completed: false
//     }
//   ],
//   taskInput: ''
// }

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { 
          task: 'Organize Garage', 
          id: 1528817077286, 
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        { 
          task: 'Walk the Dog', 
          id: 1528817076543, 
          completed: false
        },
        {
          task: 'Do Homework',
          id: 1528817083456,
          completed: false
        }
      ]
    }
  }

  // state = initialState;

  // componentDidMount() {
  //   this.state.tasks;
  // }

  // onChange = evt => {
  //   const { value } = evt.target;
  //   this.setState({ ...this.state, taskInput: value })
  // }

  // onSubmit = evt => {
  //   evt.preventDefault()
  //   const newTodo = {
  //     id: Date.now(),
  //     name: this.state.taskInput,
  //     completed: false
  //   }
  //   this.setState({ ...this.state, tasks: [this.state.taskInput, newTodo] })
  // }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Things I Have To Do:</h1>
        <ul>
          {
            todos.map(todo => {
              return (<Todo todo={todo}/>)
            })
          }
        </ul>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
