import React from 'react'
import PostItem from './PostItem'
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../store/features/post/post-slice';

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)

    return (
        <div>
            <button
                onClick={() => dispatch(getPosts())}
                type="submit"
                className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm">
                Get posts
            </button>
            {
                posts.map(p => (
                    <PostItem key={p.title} post={p}/>
                ))
            }
        </div>
    )
}

export default Posts
