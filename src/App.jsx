import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Mycart from './Mycart';

const App = () => {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Mycart' element={<Mycart />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;