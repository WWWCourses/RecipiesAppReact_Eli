import React from "react";
import indexBackground from "../images/indexBackground.jpg";
import ButtonViewAllRecipies from "../viewAllRecipiesButton/viewAllRecipiesButton";

function MainImage() {
    return (
        <div className="viewAllRecipies">
            <img id="mainIMG" src={indexBackground} alt="backgroundIMG" />
            <br />
            <ButtonViewAllRecipies />
        </div>
    )
}

export default MainImage