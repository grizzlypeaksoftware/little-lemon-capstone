import React from "react";

const ConfirmationPage = () =>{
    return (
        <div className="booking-page-container">
            <div className="bg-secondary">
                <div className="container">
                    <div className="booking-parent">
                        <div className="booking">
                            <h1 className="primary">Your Reservation is Confirmed</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="booking-parent">
                    <div className="booking">
                        <h1>Your Reservation is Confirmed</h1>
                        <p>A confirmation message has been sent to your email.</p>
                        <p>Thanks for dining with us!</p>
                        <a href="/">Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ConfirmationPage;