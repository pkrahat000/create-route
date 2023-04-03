import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    // console.log(post.post)
    const Navigate = useNavigate()
    const handlerNavigate = ()=>{
        Navigate(`/Post/${post.id}`)
    }
    return (
        <div className='singleBlog'>
            <h5>Blogs :  {post.id}</h5>
            <h3>Posts : {post.title}</h3>
            {/* // add btn way 1 */}
            <button > <Link to={`/Post/${post.id}`}>See More</Link> </button>
            {/* // add btn way 2 */}
            <Link to={`/Post/${post.id}`}><button>See More</button></Link>
            {/* // add btn way 3 */}
            <button onClick={handlerNavigate}> Go Details</button>
        </div>
    );
};

export default Post;