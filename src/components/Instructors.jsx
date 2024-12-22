import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image: "/images/ins1.jpg",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image: "/images/ins2.jpg",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image: "/images/ins3.jpg",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image: "/images/ins4.jpg",
  },
];

const Instructors = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center relative overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-neutral-300 font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-neutral-200 mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
