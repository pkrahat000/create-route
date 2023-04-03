import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostBody = () => {
    const data = useLoaderData()
    // console.log(data)
    const GoBack = useNavigate()
    const handleGoBack = () => {
        GoBack(-1)
    }
    return (
        <div>
            <h4>title : {data.title}</h4>
            <li> {data.body}</li>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostBody;