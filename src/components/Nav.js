import React from "react";
import {Link} from "react-router-dom";

const Nav = () =>{
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/404">About</Link></li>
                <li><Link to="/404">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/404">Order Online</Link></li>
                <li><Link to="/404">Login</Link></li>
            </ul>
      </nav>
    )
};
export default Nav;