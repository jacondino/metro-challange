"use client";

import { HomeButton } from "@/components/HomeButton";
import { useEffect, useState } from "react";

export default function Two() {
  const [output, setOutput] = useState<string[]>([]);

  const items = ["A", "B", "C", "D"];

  const writeItemsWithDelay = async (arr: string[]) => {
    let delay = 1000;

    for (const item of arr) {
      await new Promise((resolve) => setTimeout(resolve, delay));

      console.log(`Item: ${item} after ${delay / 1000}s`);

      setOutput((prev) => [...prev, `Item: ${item} after ${delay / 1000}s`]);

      delay *= 2;
    }
  };

  useEffect(() => {
    writeItemsWithDelay(items);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HomeButton />
      <h1 className="text-[20px] m-4">
        2 - Write an async javascript function that writes every item in any
        given array with 1, 2, 4, 8, etc., seconds apart.
      </h1>
      <p>Input: {`["A", "B", "C", "D"]`}</p>
      <p>Output: </p>
      {output.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
