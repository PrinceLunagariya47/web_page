import React from 'react';
import Sdata from './Sdata';

const Cart_card = ({ id, imgsrc, title, price, quantity, qtyPluse, qtyMinus, changequantity }) => {

    let boolean = true;

    if (quantity <= 1) {
        boolean = false;
    }

    return (
        <div className='cards'>
            <img src={imgsrc} alt={title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{title}</h3>
                <h4 className='price'>{price}</h4>
                <button className='add_btn' style={{opacity: boolean ? "1" : "0.7"}} onClick={() => { qtyMinus(id, quantity) }}> -- </button>
                <input type="text" value={quantity} className="quantity" onChange={(e) => { changequantity(id, e) }} />
                <button className='add_btn' onClick={() => { qtyPluse(id) }}> + </button>
                <h3 className='price'> Amount $ {price * quantity} </h3>
            </div>
        </div>
    )
}

export default Cart_card;