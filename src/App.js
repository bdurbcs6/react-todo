import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        task: "",
        id: Date.now(),
        completed: false
      }
    }
  }
  render() {
    return (
      <div>
      <TodoForm />
        <h2>{this.state.todos.task}</h2>
      </div>
    );
  }
}

export default App;
