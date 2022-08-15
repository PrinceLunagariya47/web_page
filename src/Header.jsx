import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header'>
                <NavLink to="/" className='menu'>Home</NavLink>
                <NavLink to="/Mycart" className='menu cart_btn'>My Cart</NavLink>
            </div>
        </>
    )
}

export default Header;