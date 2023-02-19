import React from "react";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import AddressFooter from "./AddressFooter";

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid-parent">
                    <div>
                        <img className="footer-logo" src="/images/footer-logo.png" about="logo image for little lemon"></img>
                    </div>
                    <div>
                        <h3>Navigation</h3>
                        <div className="footer-nav">
                            <Nav />
                        </div>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <div className="footer-nav">
                           <AddressFooter />
                        </div>
                    </div>
                    <div>
                        <h3>Social Media Links</h3>
                        <div className="footer-nav">
                          <SocialNav />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;