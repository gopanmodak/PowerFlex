import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";

const AboutUs = () => {
  return (
    <div className="flex  gap-10 items-center justify-center my-20">
      <div className="w-1/2 px-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-[16px] ">
          PowerFlex is a leading fitness center located near Grushevka metro
          station, offering over 1500 sq. m of space dedicated to
          top-of-the-line workout equipment from leading brands such as Hammer
          Strength, Life Fitness, and TechnoGym.
        </p>
        <p className="mt-4 text-[16px]">
          With affordable membership options, PowerFlex is accessible to
          everyone who wants to reach their fitness goals, whether it's building
          strength, increasing endurance, or losing weigh
        </p>

        <p className="mt-4 text-[16px]">
          Certified trainers at PowerFlex provide expert guidance and support to
          develop personalized workout plans tailored to each individual's needs
          and goals.
        </p>
      </div>

      <div className="mr-10">
        <ImageSlider/>
      </div>
    </div>
  );
};

export default AboutUs;
