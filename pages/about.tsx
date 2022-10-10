import { GetServerSideProps } from "next";
import { useState } from "react";
const About = () => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div>
      <div className="flex-col md:flex-row flex items-center md:justify-center">
        <div
          className="relative"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 mt-20 cursor-pointer">11</div>
          {tooltipStatus == 1 && (
            <div
              role="tooltip"
              className="z-20 -mt-10 w-60 absolute transition duration-50 ease-in-out left-0 -ml-64 shadow-lg bg-gray-800 p-4 rounded"
            >
              <p className="text-xs font-bold text-white pb-1">
                Подписывайся на наш Telegram 👉
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default About;
