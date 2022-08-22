import React, {useContext} from 'react';
import Cart_card from './Cart_card';
import { CartContext } from './App';

const Mycart = (props) => {

  const [cartItem, AddItem, MyFunction] = useContext(CartContext);

  return (
    <>
      <div className='main_div'>
        {cartItem.map((val) => {
          return (
            <Cart_card
              id={val[0].id}
              imgsrc={val[0].imgsrc}
              title={val[0].title}
              price={val[0].price}
              quantity={val[0].quantity}
              function={MyFunction}
            />
          );
        })}
      </div>
    </>
  )
}

export default Mycart;