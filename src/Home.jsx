import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import Sdata from './Sdata';
import { addItem } from './actions';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

const Home = () => {

    const dispatch = useDispatch();

    const AddItem = (data) => {
        dispatch(addItem(data))
        document.getElementById('message').innerHTML = 'Item Has Been Successfully Added';
        document.getElementById('message').style = 'display: block';
        setTimeout(() => {
            document.getElementById('message').innerHTML = '';
            document.getElementById('message').style = 'display: none';
        }, 1000);
    };

    return (
        <>
            <p id='message' className='Message'></p>
            <div className='main_div'>
                {Sdata.map((val) => {
                    return (
                        <Card
                            key={val.id}
                            val={val}
                            AddItem={AddItem}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Home;