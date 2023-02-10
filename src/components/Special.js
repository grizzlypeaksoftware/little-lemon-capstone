import React from "react";

const Special = (props) =>{
    var special = props.special;
    var imageUrl = "/images/" + special.image;
    return (
        <div key={special.name} className="card specials-item">
            <div className="card-image">
                <img src={imageUrl}/>
            </div>
            <div className="card-body">
                <div className="flex mt-1">
                    <div className="card-title">
                        {special.name}
                    </div>
                    <div className="card-price">
                        {special.price}
                    </div>
                </div>
                <p className="lead mt-1">
                    {special.description}
                </p>
            </div>
            <div className="card-footer mt-1">
                <a>Order Delivery</a>
                <img src="/images/Dish icon.svg"/>
            </div>
        </div>
    )
};
export default Special;