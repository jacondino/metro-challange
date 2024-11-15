"use client";

import { HomeButton } from "@/components/HomeButton";
import { useState } from "react";

export default function Six() {
  const [runnerPosition, setRunnerPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(30);

  const startAnimation = () => {
    let runner = 0;
    let tortoise = 30;

    const animate = () => {
      const distanceToCover = tortoise - runner;

      if (distanceToCover > 0.1) {
        runner += distanceToCover / 2;
        tortoise += (100 - tortoise) / 50;

        setRunnerPosition(runner);
        setTortoisePosition(tortoise);

        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <HomeButton />
      <h1 className="text-[20px] m-4 text-black">
        6 - Write the code that animates “Zeno's Paradox of Achilles and the
        Tortoise” on an interface(we would like to see the paradox
        demonstrated).
      </h1>
      <div className="relative w-11/12 h-2 bg-gray-300 mt-20">
        <div
          className="absolute top-[-1.75rem] w-16 h-16 flex items-center justify-center rounded-full text-white bg-blue-500"
          style={{ left: `${runnerPosition}%` }}
        >
          Achilles
        </div>
        <div
          className="absolute top-[-1.75rem] w-16 h-16 flex items-center justify-center rounded-full text-white bg-green-500"
          style={{ left: `${tortoisePosition}%` }}
        >
          Tortoise
        </div>
      </div>
      <p className="mt-5 text-lg font-medium text-gray-700">
        Achilles (Blue) chasing the Tortoise (Green)
      </p>
      <button
        onClick={startAnimation}
        className="mt-5 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Start Animation
      </button>
    </div>
  );
}
