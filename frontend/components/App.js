import React from 'react'
import axios from 'axios';

import Todo from './Todo';
import TodoList from './TodoList';
import Form from './Form';

// import styles from '../styles/styles.css';

// const URL = 'http://localhost:9000/api/todos';

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

  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
      .then(res => {
        console.log(res.data.data)
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  // componentDidUpdate(oldProps, oldState) {
  //   if(this.state.todos !== oldState.todos) {
  //     axios.get(`http://localhost:9000/api/todos/${this.state.todos}`)
  //       .then(res => {
  //         this.setState({ ...this.state, todos: res.data.data })
  //       })
  //       .catch(err => {
  //         console.error(err)
  //       })
  //   }
  // }

  // onDelete = id => evt => {
  //   axios.delete(`${this.state.todos}`)
  //     .then(res => {
  //       this.setState({
  //         ...this.state,
  //         id: this.state.todos.filter(ex => {
  //           return ex.id !==id
  //         })
  //       })
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }


  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    const payload = {name: ""}
    axios.post(`http://localhost:9000/api/todos`, this.state.name, payload)
      .then(res => {
        console.log(res)
      })
    // 1) setState  2) change todos  3) make a copy of todos  4) add a new todo to the end
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    // console.log('clear clicked')
    // 1) setState  2) loop through all todos
    // 3) remove all todos that have completed=true  4) save filtered todos to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (
          todo.completed === false
        );
      })
    })
  }

  handleToggle = (clickedId) => {
    axios.get(`http://localhost:9000/api/todos/${clickedId}`)
      .then(res => {
        console.log(res.data)
      this.setState({
        ...this.state,
        todos: this.state.todos.map(todo => {
          if(todo.id === clickedId) {
            return {
              ...todo, completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      })
    })
  }

  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
        <h1>Things I Have To Do:</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleSubmit={this.handleSubmit} handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
