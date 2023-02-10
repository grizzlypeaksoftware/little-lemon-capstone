import React from "react";
import Highlights from "./Highlights";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const HomePage = () =>{
    return (
        <div>
            <Highlights />
            <Specials />
            <Testimonials />
            <About/>
        </div>
    )
};
export default HomePage;