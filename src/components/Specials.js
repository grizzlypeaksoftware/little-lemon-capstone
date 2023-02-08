import React from "react";

const Specials = () =>{
    return (
        <div className="container mt-2 specials">
            <h2>Specials</h2>
            <div className="flex flex-align-space mt-2">
                <div className="card col-md-3">
                    <div className="card-image">
                        <img src="/images/greek salad.jpg" />
                    </div>
                    <div className="card-body">
                        <div className="flex mt-1">
                            <div className="card-title">
                                Greek Salad
                            </div>
                            <div className="card-price">
                                $12.99
                            </div>
                        </div>
                        <p className="lead mt-1">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                        </p>
                    </div>
                    <div className="card-footer flex mt-1">
                        <a>Order Delivery</a>
                        <img src="/images/Dish icon.svg"/>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-image">
                        <img src="/images/bruchetta.svg" />
                    </div>
                    <div className="card-body">
                        <div className="flex mt-1">
                            <div className="card-title">
                                Bruchetta
                            </div>
                            <div className="card-price">
                                $5.99
                            </div>
                        </div>
                        <p className="lead mt-1">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                    </div>
                    <div className="card-footer flex mt-1">
                        <a>Order Delivery</a>
                        <img src="/images/Dish icon.svg"/>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-image">
                        <img src="/images/lemon dessert.jpg" />
                    </div>
                    <div className="card-body">
                        <div className="flex mt-1">
                            <div className="card-title">
                                Lemon Dessert
                            </div>
                            <div className="card-price">
                                $5.00
                            </div>
                        </div>
                        <p className="lead mt-1">
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                    </div>
                    <div className="card-footer flex mt-1">
                        <a>Order Delivery</a>
                        <img src="/images/Dish icon.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Specials;