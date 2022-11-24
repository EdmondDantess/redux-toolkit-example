import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import posts from '../../../components/Posts';


const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk('posts/getPosts',
    async (_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
    }
)

export const removePostbyId = createAsyncThunk('posts/removePostbyId',
    async (id, {rejectWithValue, dispatch}) => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.slice(0, 10)
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('get posts: fulfilled'),
        [getPosts.rejected]: () => console.log('get posts: rejected'),
        [getPosts.pending]: () => console.log('get posts: pending'),
        [removePostbyId.rejected]:  () => console.log('delete posts: rejected'),
        [removePostbyId.pending]:  () => console.log('delete posts: pending'),
        [removePostbyId.fulfilled]:  () => console.log('delete posts: fulfilled'),
    }
})

export const {setPosts, removePost} = postSlice.actions

export default postSlice.reducer