import React from 'react';
import Cart_card from './Cart_card';

const Mycart = (props) => {
  return (
    <>
      {/* <div className='main_div'>
        {props.array.map((val) => {
          return (
            <Card
              id={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              price={val.price}
              function={props.AddItem}
            />
          );
        })}
      </div> */}
      <h1>Mycart</h1>
    </>
  )
}

export default Mycart;