import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Go Shopping', id: 0, isCompleted: false, isEdited: false },
    { text: 'Walk The Dog', id: 1, isCompleted: false, isEdited: false },
  ]);

  const addTodo = (newTodo) => {
    newTodo.text.trim()
      ? setTodos([...todos, newTodo])
      : alert('Please Enter a valid text');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, editedText) => {
    return editedText.trim()
      ? setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, text: editedText } : todo
          )
        )
      : todos;
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
