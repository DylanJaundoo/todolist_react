import React from 'react'
import { useState } from 'react';

const Editform = ({editTodo, task}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
          e.preventDefault();
          if (value) {
            // add todo
            editTodo(value,task.id);
            // clear form after submission
            setValue('');
          }
        };
    return (
      <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update Task' />
      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
    )
  }

export default Editform
