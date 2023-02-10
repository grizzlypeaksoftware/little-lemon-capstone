import React from "react";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import AddressFooter from "./AddressFooter";

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex">
                    <div className="footer-nav-item">
                        <img className="footer-logo" src="/images/footer-logo.png" about="logo image for little lemon"></img>
                    </div>
                    <div className="footer-nav-item">
                        <h3>Navigation</h3>
                        <div className="mt-1 footer-nav">
                            <Nav />
                        </div>
                    </div>
                    <div className="footer-nav-item">
                        <h3>Contact</h3>
                        <div className="mt-1 footer-nav">
                           <AddressFooter />
                        </div>
                    </div>

                    <div className="footer-nav-item">
                        <h3>Social Media Links</h3>
                        <div className="mt-1">
                          <SocialNav />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
};
export default Footer;