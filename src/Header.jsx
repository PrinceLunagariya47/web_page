import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from './store/store';

const Header = () => {

    const cartItem = useSelector((state) => state.cart);

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
                <NavLink to="/Mycart" style={navLinkStyle} className='menu'>
                    My Cart <span className='item_count'>{cartItem.length}</span>
                </NavLink>
            </div>
        </>
    )
}

export default Header;