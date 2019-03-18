import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import 'element-theme-default';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
}

export default App;
