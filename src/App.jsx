import React from 'react';
import Header from './Header';
import Card from './Card';
import Sdata from './Sdata';

const App = () => {

    return (
        <>
            <Header />
            <div className='main_div'>
            {Sdata.map((val) => {
                return (
                    <Card 
                        imgsrc={val.imgsrc}
                        title={val.title}
                        price={val.price}
                    />
                );
            })}
            </div>
        </>
    )
}

export default App;