import React from "react";
import Nav from "./Nav";

const Header = () =>{

    const logoPath = "/images/logo.svg";

    return (
        <header>
            <div className="container">
                <div className="flex">
                    <div className="col-md-4">
                        <img className="logo" src={logoPath}/>
                    </div>
                    <div className="col-md-8 main-nav">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;