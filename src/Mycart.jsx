import React from 'react';
import Cart_card from './Cart_card';
import { useSelector, useDispatch } from 'react-redux';
import { qtyPlus, qtyMinus, changeQuantity, deleteCartItem } from './actions';

const Mycart = () => {

    const dispatch = useDispatch();

    const cartItem = useSelector((state) => state.cart);

    const QTYPlus = (data) => {
        dispatch(qtyPlus(data))
    }

    const QTYMinus = (data) => {
        dispatch(qtyMinus(data))
    }

    const CHANGEQuantity = (e, data) => {
        dispatch(changeQuantity(e, data))
    }

    const DELETECartItem = (data) => {
        dispatch(deleteCartItem(data))
        document.getElementById('message').innerHTML = 'Item Has Been Successfully Deleted';
        document.getElementById('message').style = 'display: block';
        setTimeout(() => {
            document.getElementById('message').innerHTML = '';
            document.getElementById('message').style = 'display: none';
        }, 1000);
    }

    let payAmount = 0;

    return (
        <>
            <p id='message' className='Message error_Message'></p>
            <div className='main_div cart_div'>
                {cartItem.map((val) => {
                    payAmount += val.price * val.quantity;
                    return (
                        <Cart_card
                            key={val.id}
                            val={val}
                            DELETECartItem={DELETECartItem}
                            QTYPlus={QTYPlus}
                            QTYMinus={QTYMinus}
                            CHANGEQuantity={CHANGEQuantity}
                        />
                    );
                })}
            </div>
            <footer className='footer-content'><h3> total payable amount $ {payAmount} </h3></footer>
        </>
    )
}

export default Mycart;