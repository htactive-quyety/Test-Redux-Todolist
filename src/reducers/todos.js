const todos = (state = [], action) => {
    const { payload } = action
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.payload.text,
                    complete: false,
                }
            ]
        case 'UPDATE_TODO':
            return state.map((item, id) => {
                if (payload.id === id) {
                    return { ...item, text: payload.text }
                }
                return item
            })
        case 'DELETE_TODO':
            return state.filter((todo, id) => payload.id !== id)
        case 'CHECKBOX_TODO':
            const { id, complete } = payload
            return state.map((item, index) => {
                if (index === id) {
                    return {...item, complete}
                }
                return item
            })
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)

        default:
            return state;
    }
}

export default todos;