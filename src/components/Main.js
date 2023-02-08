import React from "react";
import Highlights from "./Highlights";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Main = () =>{
    return (
        <main>
            <div>
                <Highlights />
                <Specials />
                <Testimonials />
                <About/>
            </div>
        </main>
    )
};
export default Main;