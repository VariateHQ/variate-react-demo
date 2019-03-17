import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import 'element-theme-default';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    );
}

export default App;
