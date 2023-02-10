import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () =>{

    var testimonials = [
        {
            quote: "Little Lemon has quickly become one of my favorite Mediterranean restaurants. The Greek Salad is always fresh and flavorful, and the Bruchetta is a must-try!",
            customer: "Sarah H."
        },{
            quote: "If you're looking for delicious Mediterranean cuisine, Little Lemon is the place to be. The portions are generous and the lemon cake is the perfect finish to any meal.",
            customer: "John D."
        },
        {
            quote: "I've tried a lot of Mediterranean restaurants, but Little Lemon stands out for its attention to detail and use of quality ingredients. Highly recommend!",
            customer: "Maria G."
        },{
            quote: "The atmosphere at Little Lemon is warm and inviting, making it the perfect spot for a romantic dinner or a night out with friends. And the food... oh, the food is simply divine.",
            customer: "David M."
        }
    ];

    var testimonial_cards = testimonials.map((testimonial)=>{
        return(
            <Testimonial testimonial={testimonial} />
        )
    });

    return (
        <div className="container">
            <div className="testimonials">
                <h2>Testimonials</h2>
                <div className="row testimonials-parent">
                    {testimonial_cards}
                </div>
            </div>          
        </div>
    )
};
export default Testimonials;