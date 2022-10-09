import React from 'react'
import { connect } from 'react-redux'

import { todoAdder, todoRemover, todoToggler } from '../../features/actions/actions';

import TodoList from '../pure/TodoList';

// Filter Todo List
const filterTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }

}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.filters)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodoHandler: (id) => {
            dispatch(todoToggler(id))
        },
        removeTodoHandler: (id) => {
            dispatch(todoRemover(id))
        }
    }
}

// We connect State & Dispach to TodoList's Props 
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
