import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import './App.css';
import Home from "./views/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar className="justify-content-center" bg="light" variant="light">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar>

                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
}

export default App;
