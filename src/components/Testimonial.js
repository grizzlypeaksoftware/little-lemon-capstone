import React from "react";

const Testimonial = (props) =>{
    var testimonial = props.testimonial;

    return (
        <div className="card">
            <div className="rating">
                <i className="fa fa-solid fa-star primary star-small"></i>
                <i className="fa fa-solid fa-star primary star-medium"></i>
                <i className="fa fa-solid fa-star primary star-large"></i>
                <i className="fa fa-solid fa-star primary star-medium"></i>
                <i className="fa fa-solid fa-star primary star-small"></i>
            </div>
            <div className="card-body">
                <div className="mt-1">
                    <p className="lead">
                        "{testimonial.quote}"
                    </p>
                    <p className="bold">- {testimonial.customer}</p>

                </div>
            </div>
        </div>
    )
};
export default Testimonial;