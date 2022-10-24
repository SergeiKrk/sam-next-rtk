import React from "react";
import { FaCalculator } from "react-icons/fa";

export default function CalcSeparator() {
  return (
    <div className="my-6 sm:my-10 flex justify-center text-xl sm:text-4xl text-white font-[700]">
      <div className="my-auto h-[4px] w-32 bg-white border rounded"></div>
      <div className="mx-6">
        <FaCalculator />
      </div>
      <div className="my-auto h-[4px] w-32 bg-white border rounded"></div>
    </div>
  );
}
