import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    todos: []
}

export const toDoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompleted: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        },
        romoveTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload)
        }
    }
})


export const {addTodo, toggleCompleted, romoveTodo} = toDoSlice.actions

export default toDoSlice.reducer