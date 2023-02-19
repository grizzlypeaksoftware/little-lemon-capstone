import React from "react";
import {Link} from "react-router-dom";

const Nav = () =>{
    return (
        <nav>
            <ul>
                <li><Link aria-label="Home" to="/">Home</Link></li>
                <li><Link aria-label="About" to="/404">About</Link></li>
                <li><Link aria-label="Menu" to="/404">Menu</Link></li>
                <li><Link aria-label="Reservations" to="/booking">Reservations</Link></li>
                <li><Link aria-label="Order" to="/404">Order Online</Link></li>
                <li><Link aria-label="Login" to="/404">Login</Link></li>
            </ul>
      </nav>
    )
};
export default Nav;