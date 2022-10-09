import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodoHandler, removeTodoHandler}) => {
  return (
    <ul>
        {todos.map((todo, index) => {
          return (
            <Todo 
              key={index} 
              todo={todo} 
              toggle={toggleTodoHandler}
              remove={removeTodoHandler}
              />
          )
        })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodoHandler: PropTypes.func.isRequired
}

export default TodoList