import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'element-react';
import Home from "./views/Home";
import 'element-theme-default';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Menu defaultActive="0" mode="horizontal">
                    <Menu.Item index="0">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item index="1">
                        <Link to="/about">About</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
}

export default App;
