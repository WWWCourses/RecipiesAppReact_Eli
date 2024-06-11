import React from "react";
import { useNavigate } from "react-router-dom";
import indexBackground from "../images/indexBackground.jpg";
import ButtonViewAllRecipies from "./viewAllRecipiesButton";

function MainImage() {
  const navigate = useNavigate();

  const handleViewAllRecipes = () => {
    navigate("/recipes");
  };

  return (
    <div className="viewAllRecipies">
      <div className="mainImage">
        <img id="mainIMG" src={indexBackground} alt="Background" />
      </div>
      <br />
      <ButtonViewAllRecipies onClick={handleViewAllRecipes} />
    </div>
  );
}

export default MainImage;
