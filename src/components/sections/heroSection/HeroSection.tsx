"use client";
import Image from "next/image";
import "./style.scss";
import Wrapper from "@/components/shared/Wrapper";
import img from "@/assets/images/heroImage.png";
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="heroContainer">
        <div className="heroLeft">
          <h1>Discover Your Dream Ride: Premium Cars, Unmatched Quality</h1>
          <h2>Unleash the Joy of Driving</h2>
          <p>
            Explore premium vehicles, from sleek sedans to powerful SUVs. Find
            the perfect car for your style and needs—performance, luxury, or
            efficiency, we have it all.!
          </p>
          <button>Explore cars</button>
        </div>
        <div className="heroRight">
          <div className="image">
            <Image src={img} alt="image" loading="lazy" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
