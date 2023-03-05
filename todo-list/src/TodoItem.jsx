import React from "react";

const TodoItem = () => {
  const todoInput = document.getElementById("todo-input");
  const todoText = document.getElementById("todo-text");

  const todoTextHandler = () => {
    todoText.textContent = todoInput.value;
  };
  return (
    <div>
      <p id='todo-text'></p>
      <input id='todo-input' type='text'></input>
      <button className='enter' onClick={todoTextHandler}>
        +
      </button>
    </div>
  );
};

export default TodoItem;
