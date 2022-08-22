import React from 'react';
import Sdata from './Sdata';

const Cart_card = (props) => {

    const inputvalue = (_event) => {
        const value = _event.target.value;
    }

    return (
        <div className='cards'>
            <img src={props.imgsrc} alt={props.title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{props.title}</h3>
                <h4 className='price'>{props.price}</h4>
                <button className='add_btn' onClick={() => {props.function('false', props.id)}}> -- </button>
                <input type="text" value={props.quantity} className="quantity" onChange={inputvalue}/>
                <button className='add_btn' onClick={() => {props.function('true', props.id)}}> + </button>
                <h3 className='price'> Total = $ 100 </h3>
            </div>
        </div>
    )
}

export default Cart_card;