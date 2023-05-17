import React from "react";
import HeroImg from "./../Images/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="items-center justify-center flex flex-col py-10 px-5">
        <img src={HeroImg} alt="Hero section" />
      </div>
      <div className="px-8 pt-3 md:mr-96">
        <h1 className="font-bold text-4xl capitalize">Online Experiences</h1>
        <p className="lg:pr-96 pt-2 pb-5">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
