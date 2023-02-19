import React from "react";
import Nav from "./Nav";
const Header = () =>{

    const logoPath = "/images/logo.svg";

    return (
        <header>
            <div className="container">
                <div className="header-parent">
                    <div className="header-logo">
                        <img id='site-logo' className="logo" src={logoPath}/>
                    </div>
                    <div className="header-nav">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;