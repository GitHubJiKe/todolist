import React, { Component } from 'react';
import TodoItem from './components/todo-item/TodoItem';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ToDoList</h2>
        </div>
        <p className="App-intro">
          go to create your first todo
        </p>
        <TodoItem />
      </div>
    );
  }
}

export default App;
