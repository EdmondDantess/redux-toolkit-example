import {configureStore} from '@reduxjs/toolkit';
import userSlice from './features/user/user-slice';
import toDoSlice from './features/toDo/toDo-slice';
import postSlice from './features/post/post-slice';


export const store = configureStore({
    reducer: {
        user: userSlice,
        toDo: toDoSlice,
        post: postSlice,
    },

})