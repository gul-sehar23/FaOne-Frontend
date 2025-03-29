import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="bg-[#ddb75e] text-white py-2 overflow-hidden">
      <div className="marquee">
        Delivery Services Available Here in Lahore •
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }

          .marquee {
            display: inline-block;
            white-space: nowrap;
            font-size: 1rem;
            font-weight: 600;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingBanner;
