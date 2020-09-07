import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, editTodo, completeTodo }) => {
  return (
    <div>
      <div>
        <h2>Let's get some work done!</h2>
      </div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
