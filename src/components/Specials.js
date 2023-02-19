import React from "react";
import Special from "./Special";

const Specials = () =>{

    var specials = [
        {
            name: "Greek Salad",
            price: "$14.99",
            image: "greek salad.jpg",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            name: "Bruchetta",
            price: "$9.99",
            image: "bruchetta.jpg",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            name: "Lemon Dessert",
            price: "$12.99",
            image: "lemon dessert.jpg",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."

        }
    ];

    const specialsCards = specials.map((special)=>{
        return(
        <Special key={special.name} special={special} />
        )
    })

    return (
        <div className="container specials">
            <h2>Specials</h2>
            <div className="grid-parent">
                {specialsCards}
            </div>
        </div>
    )
};
export default Specials;