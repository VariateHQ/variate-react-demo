import React from 'react';
import { Menu } from "element-react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Menu defaultActive={window.location.pathname} mode="horizontal">
            <Menu.Item index="/">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item index="/about">
                <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;