import React from 'react';

const Card = (props) => {

    return (
        <div className='cards'>
            <img src={props.val.imgsrc} alt={props.val.title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{props.val.title}</h3>
                <h4 className='price'>{props.val.price}</h4>
                <button className='add_btn' onClick={() => { props.AddItem(props.val) }}>Add Cart</button>
            </div>
        </div>
    )
}

export default Card;