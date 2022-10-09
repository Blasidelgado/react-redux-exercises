const initialState = [
    {id: 0, text: 'Learn React', completed: true, deleted: false}
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                    deleted: false
                }
            ]
        case 'TOGGLE_TODO':
                return state.map((todo) => 
                    (todo.id === action.payload) ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    :   todo
                )
                case 'REMOVE_TODO': 
                    const newState = [...state]
                    const removed = state.findIndex((todo) => 
                        (todo.id === action.payload));
                    newState.splice(removed, 1)
                    return newState
        default:
            return state
    }
}