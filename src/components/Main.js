import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import MissingPage from "./MissingPage";

const Main = () =>{
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/404" element={<MissingPage />}></Route>
            </Routes>
        </main>
    )
};
export default Main;