import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Sdata from './Sdata';
import Home from './Home';
import Mycart from './Mycart';

const CartContext = createContext();

const App = () => {

    const [cartItem, setCartItem] = useState([]);

    const MyFunction = (value, id) => {
        const data = Sdata.filter((val) => {
            return val.id === id;
        })
        if(value === 'true'){
            data[0].quantity = data[0].quantity + 1;
        }
        else if(value > 0){
            data[0].quantity = data[0].quantity - 1;
        }
    }

    const AddItem = (id) => {
        let newItem = Sdata.filter((val) => {
            return val.id === id;
        })
        // impliment coundition     
        setCartItem((oldItem) => [...oldItem, newItem]);
    }

    return (
        <>
            <CartContext.Provider value={[cartItem, AddItem, MyFunction]}>
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/Mycart' element={<Mycart />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </Router>
            </CartContext.Provider>
        </>
    )
}

export default App;
export {CartContext};