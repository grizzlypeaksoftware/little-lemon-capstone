import React from "react";

const Special = (props) =>{
    var special = props.special;
    var imageUrl = "/images/" + special.image;

    function handleClick(){
        window.location.href="/404";
    }


    return (
        <div key={special.name} className="card special grid-row-parent">
            <div className="card-image">
                <img src={imageUrl}/>
            </div>
            <div className="card-body">
                <div className="card-title">
                    {special.name}
                </div>
                <div className="card-price">
                    {special.price}
                </div>
                <p className="lead">
                    {special.description}
                </p>
            </div>
            <div className="card-footer special-footer">
                <button aria-label="Order Delivery" onClick={handleClick} className="primary">Order Delivery <i className="fa fa-solid fa-utensils"/></button>
                
            </div>
        </div>
    )
};
export default Special;