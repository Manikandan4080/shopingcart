import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () =>{
    return(
        <nav>
            <p>Shopping Cart</p>
            <div id="nav-right">
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="/cart">Cart Page</NavLink>
            </div>
        </nav>
    )
}

export default Nav;