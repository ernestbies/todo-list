export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(e => e.id !== action.id)]
            };


        default:
            return state;
    }
};
