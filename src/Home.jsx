import React, { useContext } from 'react';
import Card from './Card';
import Sdata from './Sdata';
import { CartContext } from './App';

const Home = () => {
    const [cartItem, AddItem, MyFunction] = useContext(CartContext);

    return (
        <div className='main_div'>
            {Sdata.map((val) => {
                return (
                    <Card
                        key={val.id}
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