import React from 'react';

const Card = (props) => {

    return (
        <div className='cards'>
            <img src={props.imgsrc} alt={props.title} className='card_img' />
            <div className='card_info'>
                <h3 className='card_title'>{props.title}</h3>
                <h4 className='price'>{props.price}</h4>
                <button className='add_btn' onClick={() => { props.function(props.id) }}>Add Cart</button>
            </div>
        </div>
    )
}

export default Card;