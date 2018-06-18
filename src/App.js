import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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
      <TodoList />
      </div>
    );
  }
}

export default App;
