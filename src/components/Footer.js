import React from "react";

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex">
                    <div className="footer-nav-item">
                        <img className="footer-logo" src="/images/footer-logo.png" about="logo image for little lemon"></img>

                    </div>
                    <div className="footer-nav-item">

                    <nav>
                        <h3>Doormat Navigation</h3>
                        <ul className="mt-1">
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                    </div>
                    <div className="footer-nav-item">

                    <nav>
                        <h3>Contact</h3>
                        <ul className="mt-1">
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </nav>
                    </div>

                    <div className="footer-nav-item">

                    <nav>
                        <h3>Social Media Links</h3>
                        <ul className="mt-1">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </nav>
                    </div>

                </div>
            </div>
        </footer>
    )
};
export default Footer;