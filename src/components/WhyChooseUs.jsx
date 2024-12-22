"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Beginner Guitar Essentials",
    description:
      "Learn the fundamentals of playing the guitar, including chords, strumming patterns, and basic music theory. Perfect for those picking up the guitar for the first time. Build a strong foundation to play your favorite songs with ease.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/blues.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Mastering Piano Techniques",
    description:
      "Take your piano skills to the next level with this advanced course focusing on scales, arpeggios, and performance techniques to enhance your musical expression. Gain confidence in performing intricate pieces.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/edm.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Music Production Basics",
    description:
      "Dive into the world of music production with this introductory course on DAWs, mixing, and mastering. Create your first track and learn the essentials of audio engineering. Discover tips to make your music sound professional.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/jazz.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Vocal Training for All Levels",
    description:
      "Improve your singing voice with techniques for breath control, pitch accuracy, and vocal range. Suitable for beginners and experienced singers alike. Develop a unique style and enhance your vocal tone.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/piano.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
