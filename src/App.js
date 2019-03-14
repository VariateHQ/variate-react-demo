import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './App.css';

function App() {
    return (
      <div className="App">
          <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">
                  Brand
              </Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>About</Nav.Link>
              </Nav>
          </Navbar>
      </div>
    );
}

export default App;
