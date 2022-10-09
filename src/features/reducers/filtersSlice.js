const initialState = "SHOW_ALL"

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.payload
        default:
            return state;
    }
}
