import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import Sdata from './Sdata';
import store from './store/store';
import { addItem } from './actions';

const Home = () => {

    const dispatch = useDispatch();

    const AddItem = (data) => {
        console.log('data', data);
        dispatch(addItem(data))
        
        console.log('STORE', store.getState());

        // if (cartItem.length >= 1) {
        //     const item = cartItem.filter((val) => {
        //         return val.id === id;
        //     })
        //     if (item.length === 1) {
        //         const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj);
        //         setCartItem(data);
        //     } else {
        //         const newItem = Sdata.filter((val) => {
        //             return val.id === id;
        //         })
        //         setCartItem((oldItem) => [...oldItem, ...data]);
        //     }
        // } else {
        //     const newItem = Sdata.filter((val) => {
        //         return val.id === id;
        //     })
        //     setCartItem(newItem);
        // }
    };

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
                        addItem={AddItem}
                    />
                );
            })}
        </div>
    )
}

export default Home;