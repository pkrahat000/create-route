import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h3>name: {data.name}</h3>
            <h5>phone: {data.phone}</h5>
            <h5>website: {data.website}</h5>
        </div>
    );
};

export default FriendDetails;