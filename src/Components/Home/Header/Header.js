import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'
import HeaderBody from './HeaderBody/HeaderBody';
const Header = () => {
    return (
        <div className='header-container'>
            <Navbar/>
            <HeaderBody/>
        </div>
    );
};

export default Header;