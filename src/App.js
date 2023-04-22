import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from "react-router";
import exchangeRate from "../src/components/exchange-rate/exchange-rate"
import converter from "../src/components/converter/converter"
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" Component={exchangeRate} />
                <Route path="/converter" Component={converter} />
            </Routes>
        </div>
    );
};

export default App;
