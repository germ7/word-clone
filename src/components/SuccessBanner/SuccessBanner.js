import Banner from "../Banner/Banner";
import React from "react";

function SuccessBanner({numberOfAttempts}) {

    return <Banner status="happy">
        <strong>Congratulations!</strong> Got it in<strong>{""}
        {numberOfAttempts} guesses</strong>.
    </Banner>
}

export default SuccessBanner;
