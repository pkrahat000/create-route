import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({singleData}) => {
    const {id,name,phone,email} = singleData
    // console.log(singleData)
    return (
        <div className='card'>
            <h3>Name: {name}</h3>
            <h4>Email : {email}</h4>
            <h4>Phone : {phone}</h4>
            <p ><Link to={`/Friend/${id}`}>See more Info</Link></p>  {/* daynamic url set */}
        </div>
    );
};

export default Friend;