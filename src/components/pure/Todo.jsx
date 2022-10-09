import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({todo, toggle, remove}) => {
    const {id, text, completed, deleted} = todo

  return (
    <li>
        <div className='label labelid'>
            {id}
        </div>
        <div className='label labeltext'>
            {text}
        </div>
        <div className='label labelid'>
            {completed ? 'COMPLETED' : 'ACTIVE'}
        </div>
        <div>
            <button onClick={() => toggle(todo.id)}>Change status</button>
        </div>
        <div>
            <button onClick={() => remove(todo.id)}>Remove</button>
        </div>
    </li>
  )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default Todo