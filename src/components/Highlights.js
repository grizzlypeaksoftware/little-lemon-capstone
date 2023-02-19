import React from "react";

const Highlights = () =>{

    function handleClick(){
        window.location.href="/booking";
    }

    return (
        <section className="highlights">
            <div className="container">

                <div className="grid-parent">
                    <div className="highlights-content">
                        <h1 className="primary">Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="lead white">
                            At our family-owned Mediterranean restaurant in Chicago, Illinois, we pride ourselves on our commitment to preserving traditional recipes while infusing them with a contemporary twist. Our menu offers a blend of classic dishes and innovative flavors, all made with the freshest ingredients and cooked to perfection.
                        </p>
                        <button aria-label="Reserve Table" onClick={handleClick} className="primary">
                            Reserve a Table
                        </button>
                    </div>
                    <div>
                        <img src="/images/restaurant.jpg"></img>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Highlights;