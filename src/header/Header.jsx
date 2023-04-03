import React from 'react';
import { Outlet, Link, useNavigate, useNavigation } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../component/ActiveLink/ActiveLink';

//? link to path flow kore kaj kore 
const Header = () => {
    const navigation = useNavigation()
    return (
        <div className='link'>
            <ActiveLink to="Home">Home</ActiveLink>
            <ActiveLink to="Manu">Menu</ActiveLink>
            <ActiveLink to="Posts">Blogs</ActiveLink>
            <ActiveLink to='Friends'>Friends</ActiveLink>
            <ActiveLink to="Contract">Contract</ActiveLink>
            <div>{navigation.state === 'loading' && 'Loading......'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;