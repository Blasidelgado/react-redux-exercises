// ADD TODO
export const todoAdder = (text) => {
    return {type: 'ADD_TODO', payload: text}
}

export const todoToggler = (id) => {
    return {type: 'TOGGLE_TODO', payload: id}
}

export const todoRemover = (id) => {
    return {type: 'REMOVE_TODO', payload: id}
}

export const filterChanger = (filter) => {
    return {type: 'CHANGE_FILTER', payload: filter}
}