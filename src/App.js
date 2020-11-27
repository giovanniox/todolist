import React from 'react'
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.css'
import './app.css'
function App() {

  return (
    <div className="App container">

      <TodoInput />
      <TodoList />

    </div>
  );
}

export default App;
