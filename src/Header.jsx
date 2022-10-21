import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {

    const cartItem = useSelector((state) => state.cart);

    return (
        <>
            <div className='header'>
                <NavLink to="/"><HomeIcon fontSize="large" sx={{ color: 'black' }} /></NavLink>
                <NavLink to="/Mycart">
                    <ShoppingCartIcon className='cart_icon' fontSize="large" sx={{ color: 'black' }} />
                    <span className='item_count'>{cartItem.length}</span>
                </NavLink>
            </div>
        </>
    )
}

export default Header;