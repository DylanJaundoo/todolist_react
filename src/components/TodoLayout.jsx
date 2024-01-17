import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoLayout = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='todo'>
    <p  onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
    <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}/>

    </div>
  </div>
  )
}

export default TodoLayout
