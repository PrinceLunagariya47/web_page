import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Sdata from './Sdata';
import Home from './Home';
import Mycart from './Mycart';

const CartContext = createContext();

const App = () => {

    const [cartItem, setCartItem] = useState([]);

    const qtyPluse = (id) => {
        const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj);
        setCartItem(data);
    }

    const qtyMinus = (id, quantity,) => {
        if (quantity > 2) {
            const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity - 1 } : obj);
            setCartItem(data);
        } else {
            const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: 1 } : obj);
            setCartItem(data);
        }
    }

    const changequantity = (id, event) => {
        let quantity = parseInt(event.target.value);
        let qty = isNaN(quantity);
        if (qty === false) {
            if (quantity > 1) {
                const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: quantity } : obj);
                setCartItem(data);
            } else {
                const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: 1 } : obj);
                setCartItem(data);
            }
        } else {
            const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: '' } : obj);
            setCartItem(data);
        }
    }

    const AddItem = (id) => {
        if (cartItem.length >= 1) {
            const item = cartItem.filter((val) => {
                return val.id === id;
            })
            if (item.length === 1) {
                const data = cartItem.map(obj => obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj);
                setCartItem(data);
            } else {
                const newItem = Sdata.filter((val) => {
                    return val.id === id;
                })
                setCartItem((oldItem) => [...oldItem, ...newItem]);
            }
        } else {
            const newItem = Sdata.filter((val) => {
                return val.id === id;
            })
            setCartItem(newItem);
        }
    };
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