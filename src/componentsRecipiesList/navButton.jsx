import React from "react";
import { useNavigate } from "react-router-dom";
import './navButton.css';

function BackButton({ to, label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1); //to the previous page in the browser's history
    }
  };

  return (
    <button onClick={handleClick} className="navButton">
      {label}
    </button>
  );
}

export default BackButton;
