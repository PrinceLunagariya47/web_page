import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart_card = (props) => {

    let boolean = true;

    if (props.val.quantity <= 1) {
        boolean = false;
    }

    return (
        <div className='cards'>
            <img src={props.val.imgsrc} alt={props.val.title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{props.val.title}</h3>
                <h4 className='price'>{props.val.price}</h4>
                <button className='delete_btn' onClick={() => { props.DELETECartItem(props.val) }}> <FaTrash /> </button>
                <button className='add_btn' style={{ opacity: boolean ? "1" : "0.7" }} onClick={() => { props.QTYMinus(props.val) }}> -- </button>
                <input type="text" value={props.val.quantity} className="quantity" onChange={(e) => { props.CHANGEQuantity(e, props.val) }} />
                <button className='add_btn' onClick={() => { props.QTYPlus(props.val) }}> + </button>
                <h3 className='price'> Amount $ {props.val.price * props.val.quantity} </h3>
            </div>
        </div>
    )
}

export default Cart_card;