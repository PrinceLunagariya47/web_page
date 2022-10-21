import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import Sdata from './Sdata';
import { addItem } from './actions';
import Alert from '@material-ui/lab/Alert';


const Home = () => {

    const dispatch = useDispatch();

    const AddItem = (data) => {
        dispatch(addItem(data))
    };

    return (
        <>
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