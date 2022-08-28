import React, { useEffect } from 'react';
import Sdata from './Sdata';

const Cart_card = ({ id, imgsrc, title, price, quantity, qtyPluse, qtyMinus, changequantity }) => {

    return (
        <div className='cards'>
            <img src={imgsrc} alt={title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{title}</h3>
                <h4 className='price'>{price}</h4>
                <button className='add_btn' onClick={() => { qtyMinus(id) }}> -- </button>
                <input type="text" value={quantity} className="quantity" onChange={() => { changequantity(id) }} />
                <button className='add_btn' onClick={() => { qtyPluse(id) }}> + </button>
                <h3 className='price'> Total = $ 100 </h3>
            </div>
        </div>
    )
}

export default Cart_card;