import React from 'react';
import TodoForm from './TodoForm';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoLayout from './TodoLayout';
import Editform from './Editform';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos([...todos,
            {id:uuidv4(), 
             task:todo, 
             completed:false,
             isEditing:false}])
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed:!todo.completed} : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) =>{
        setTodos(todos.map(todo =>todo.id === id ? {
            ...todo, isEditing:!todo.isEditing} : todo
        ))
    }

    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Add a Task</h1>
      <TodoForm addTask={addTodo}/>
      {todos.map((todo,index)=> todo.isEditing ? (
          <Editform editTodo={editTask} task={todo} />
        ) : (
          <TodoLayout
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
     
    </div>
  )
}

export default TodoWrapper
