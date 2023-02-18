import React from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import {fetchAPI, submitAPI} from "../api/BookingAPI";
import { useNavigate } from 'react-router-dom';


const BookingPage = () =>{    

    // update times
    function updateTimes(date) {
        return fetchAPI(date);
    }

    function submitForm(formData){
        return submitAPI(formData);
    }

    // initialize times
    var originalTimes = fetchAPI(new Date());

    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, originalTimes);

    return (
        <div className="booking-container">
            <div className="booking-page-header">
                <div className="container">
                    <div className="booking-parent">
                        <div className="booking">
                            <h1 className="primary">Reserve a Table</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="booking-parent">
                    <div className="booking">
                        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} submitForm={submitForm} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default BookingPage;