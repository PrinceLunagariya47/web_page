import React, { useContext, useState } from 'react';
import Cart_card from './Cart_card';
import { CartContext } from './App';

const Mycart = () => {

  const [cartItem, AddItem, qtyPluse, qtyMinus, changequantity] = useContext(CartContext);

  let payAmount = 0;

  return (
    <>
      <div className='main_div'>
        {cartItem.map((val) => {
          payAmount += val.price * val.quantity;
          return (
            <Cart_card
              key={val.id}
              id={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              price={val.price}
              quantity={val.quantity}
              qtyPluse={qtyPluse}
              qtyMinus={qtyMinus}
              changequantity={changequantity}
            />
          );
        })}
      </div>
      <footer className='footer-content'><h3> total payable amount $ {payAmount} </h3></footer>
    </>
  )
}

export default Mycart;