import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? '500' : 'normal',
            color: isActive ? 'red' : 'black',
        }
    }

    return (
        <>
            <div className='header'>
                <NavLink to="/" style={navLinkStyle} className='menu'>Home</NavLink>
                <NavLink to="/Mycart" style={navLinkStyle} className='menu cart_btn'>My Cart</NavLink>
            </div>
        </>
    )
}

export default Header;