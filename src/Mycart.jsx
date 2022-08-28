import React, { useContext } from 'react';
import Cart_card from './Cart_card';
import { CartContext } from './App';

const Mycart = () => {

  const [cartItem, AddItem, qtyPluse, qtyMinus, changequantity] = useContext(CartContext);

  return (
    <>
      <div className='main_div'>
        {cartItem.map((val) => {
          return (
            <Cart_card
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
    </>
  )
}

export default Mycart;