import "./style.scss";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="imageSkeleton"></div>
      <div className="headingSkeleton"></div>
      <div className="subHeadingSkeleton"></div>
      <div className="icons">
        <div className="iconSkeleton"></div>
        <div className="iconSkeleton"></div>
        <div className="iconSkeleton"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
