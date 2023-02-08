import React from "react";
import Nav from "./Nav";

const Header = () =>{
    return (
        <header>
            <div className="container">
                <div className="flex">
                    <div className="col-md-4">
                        <img className="logo" src="/images/logo.svg"/>
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    )
};
export default Header;