import React from "react";
import indexBackground from "../images/indexBackground.jpg";
import ButtonViewAllRecipies from "./viewAllRecipiesButton";

function MainImage() {
    return (
        <div className="viewAllRecipies">
            <div className="mainImage"><img id="mainIMG" src={indexBackground} alt="backgroundIMG" /></div>
            <br />
            <ButtonViewAllRecipies />
        </div>
    )
}

export default MainImage