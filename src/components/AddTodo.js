import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    addTodo({
      id: Math.random(),
      text: text,
      isEdited: false,
      isCompleted: false,
    });
    setText('');
  };

  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>TO-DO APP!</h1>
        <h4>Add New To-Do</h4>
          <input
            type="text"
            id="myInput"
            placeholder="Enter New Task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button className="add-Btn" onClick={handleSubmit}>
            Add
          </button>
      </div>
    </div>
  );
};

export default AddTodo;
