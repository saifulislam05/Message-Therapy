import React from "react";
import Address from "./Address";
import GetAppointment from "./GetAppointment";
import Information from "./Information";
import Slider from "./Slider";

const Body = () => {
    return <>
        <Slider />
        <GetAppointment />
        <Information />
        <Address/>
    </>;
};

export default Body;
