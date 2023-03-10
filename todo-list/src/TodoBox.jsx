import React from "react";
2;
import TodoItem from "./TodoItem";

const TodoBox = () => {
  return (
    <div>
      <div className='bg-white w-300 h-510'></div>
      <span className='text-todo font-extrabold'>4</span>
      <span className='text-todo font-semibold'>March</span>
      <span className='text-todo'>2023</span>
      <span className='text-todo font-semibold'>Saturday</span>
      <TodoItem />
    </div>
  );
};

export default TodoBox;
