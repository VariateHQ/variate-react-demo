import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar className="justify-content-center" bg="light" variant="light">
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default App;
