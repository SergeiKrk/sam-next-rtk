import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarSeparator() {
  return (
    <div className="my-6 sm:my-10 flex justify-center text-xl sm:text-4xl text-gray-700 font-[700]">
      <div className="my-auto h-[6px] w-32 bg-gray-700 border rounded"></div>
      <div className="mx-6">
        <FaStar />
      </div>
      <div className="my-auto h-[6px] w-32 bg-gray-700 border rounded"></div>
    </div>
  );
}
