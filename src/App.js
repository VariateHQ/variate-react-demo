import React from "react";
import { VariateProvider } from '@variate/react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import 'element-theme-default';
import './styles/App.css';
import config from './variate';

const history = createBrowserHistory();

const getAudience = path => ({
    view: {
        path
    }
});

function App() {
    return (
        <VariateProvider
            config={config}
            debug={true}
            tracking={true}
            reporter={() => { return true; }}
            onViewChange={activate => {
                activate(getAudience(window.location.pathname));
                history.listen(location => activate(location.pathname));
            }}
        >
            <Router history={history}>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        </VariateProvider>
    );
}

export default App;
