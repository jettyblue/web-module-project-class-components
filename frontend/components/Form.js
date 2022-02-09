import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  handleSubmit = evt => {
    evt.preventDefault();
    // console.log('Add clicked');
    // console.log(this.props);
    this.props.handleAdd(this.state.input);
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  render() {
    // console.log(this.state.input)
    return (
      <form>
        <input placeholder='Enter a New Task' onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    )
  }
}
