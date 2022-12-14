import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Mycart from './Mycart';
import store from './store/store';

const App = () => {

    return (
        <>
            <Provider store={store}>
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/Mycart' element={<Mycart />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    )
}

export default App;