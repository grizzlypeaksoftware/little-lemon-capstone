import React from "react";

const SocialNav = () =>{
    return (
        <nav>
            <ul>
                <li><a aria-label="facebook" href="www.facebook.com"><i className="fa fab fa-facebook-f"></i> Facebook</a></li>
                <li><a aria-label="Instagram" href="www.instagram.com"><i className="fa fab fa-twitter"></i> Instagram</a></li>
                <li><a aria-label="Twitter" href="www.twitter.com"><i className="fa fab fa-instagram"></i> Twitter</a></li>
            </ul>
      </nav>
    )
};
export default SocialNav;