import React from 'react';
import './friends.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import Friend from '../friend/Friend';



/* 
1.set loaded:()=>fetch('url')
2.make component
3. call const data = useLoaderData()
*/
const Friends = () => {
    const data = useLoaderData()
    const GoBack = useNavigate()
    const handlerGoBack =()=>{
        GoBack(`/`)
    }
    
    return (
        <div>
            <button style={{backgroundColor:'aquamarine'}} onClick={handlerGoBack}>Back Home Page</button>
            <h3>Friends Length :{data.length} </h3>
        
        <div className='Friends-Length'>
            
            {
                data.map(singleData => <Friend key={singleData.id} singleData={singleData}></Friend>)
            }
        </div>
        </div>
    );
};

export default Friends;