const ADD_TODO = (text) => {
    return ({
        type: 'ADD_TODO',
        payload: {
            text
        }
    })
}
const UPDATE_TODO = (id, text) => {
    return ({
        type: 'UPDATE_TODO',
        payload: {
            id,
            text
        }
    })

}
const DELETE_TODO = (id) => {
    return ({
        type: 'DELETE_TODO',
        payload: {
            id
        }
    })
}
const CHECKBOX_TODO = (params) => {
    return ({
        type: 'CHECKBOX_TODO',
        payload: params
    })

}
const TOGGLE_TODO = (id) => {
    return ({
        
        type: 'TOGGLE_TODO',
        payload: {
            id
        }
    })
}

export { ADD_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,CHECKBOX_TODO}