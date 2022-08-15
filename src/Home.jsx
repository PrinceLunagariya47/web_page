import React, { useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Home = () => {

    const [cartItem, setCartItem] = useState([]);

    const AddItem = (id) => {
        let newItem = Sdata.filter((val) => {
            return val.id === id;
        })
        setCartItem((oldItem) => [...oldItem, newItem]);
    }

    return (
        <div className='main_div'>
            {Sdata.map((val) => {
                return (
                    <Card
                        id={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        price={val.price}
                        function={AddItem}
                    />
                );
            })}
        </div>
    )
}

export default Home;