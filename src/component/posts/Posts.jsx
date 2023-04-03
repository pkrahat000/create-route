import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const data = useLoaderData()
    const GoBack = useNavigate()
    const handlerGoBack =()=>{
        GoBack(`/`)
    }
    return (
        <div>
            <button style={{backgroundColor:'aquamarine'}} onClick={handlerGoBack}>Back Home Page</button>
            <h3>All Blogs : {data.length}</h3>
            {
                data.map((post, index) => <Post post={post} key={index}></Post>)
            }
        </div>
    );
};

export default Posts;