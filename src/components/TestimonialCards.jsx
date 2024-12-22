"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-neutral-200">
        Hear Our Harmony: Voices of Success
      </h2>
      <div>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Music expresses that which cannot be put into words and that which cannot remain silent. It transcends time, bringing people together in a universal harmony.",
    name: "Victor Hugo",
    title: "French Poet and Novelist",
  },
  {
    quote:
      "The piano keys are black and white, but they sound like a million colors in your mind. Each note carries emotion, weaving stories that words alone cannot tell.",
    name: "Maria Cristina Mena",
    title: "Mexican Writer",
  },
  {
    quote:
      "Music is a higher revelation than all wisdom and philosophy. It is the electric soil in which the spirit lives, thinks, and invents melodies of eternity.",
    name: "Ludwig van Beethoven",
    title: "German Composer",
  },
  {
    quote:
      "To play a wrong note is insignificant; to play without passion is inexcusable. Music demands the full expression of the soul, a vulnerability that makes it powerful.",
    name: "Ludwig van",
    title: "German Composer",
  },
  {
    quote:
      "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It is a gift that transcends our mortal existence.",
    name: "Plato",
    title: "Greek Philosopher",
  },
];
