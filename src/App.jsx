import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Sdata from './Sdata';
import Home from './Home';
import Mycart from './Mycart';

const CartContext = createContext();

const App = () => {

    const [cartItem, setCartItem] = useState([]);

    const [inputList, setInputList] = useState();

    const qtyPluse = (id) => {
        const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj);
        setCartItem(data);
    }

    const qtyMinus = (id) => {
        const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity - 1 } : obj);
        setCartItem(data);
    }

    const changequantity = (event) => {
        setInputList(event.target.value);
    }
    console.log(inputList);

    const AddItem = (id) => {
        const newItem = Sdata.filter((val) => {
            return val.id === id;
        })
        // impliment coundition
        setCartItem((oldItem) => [...oldItem, ...newItem]);
    }
    console.log(cartItem);
    return (
        <>
            <CartContext.Provider value={[cartItem, AddItem, qtyPluse, qtyMinus, changequantity]}>
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
export { CartContext };