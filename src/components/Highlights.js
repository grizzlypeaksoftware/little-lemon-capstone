import React from "react";

const Highlights = () =>{
    return (
        <div className="highlights">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <h1 className="primary">Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="lead white mt-1">
                        At our family-owned Mediterranean restaurant in Chicago, Illinois, we pride ourselves on our commitment to preserving traditional recipes while infusing them with a contemporary twist. Our menu offers a blend of classic dishes and innovative flavors, all made with the freshest ingredients and cooked to perfection.
                        </p>
                        <button className="mt-2 primary">
                            Reserve a Table
                        </button>
                    </div>
                    <div className="col-md-6 col-sm-12 flex center">
                            <img src="/images/restaurant.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Highlights;