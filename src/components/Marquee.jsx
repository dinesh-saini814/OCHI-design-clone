import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full pt-24 pb-5 bg-marquee rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-[1px] border-b-[1px] flex gap-5 overflow-hidden whitespace-nowrap">
        <h1 className="text-[26vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] -mt-16 uppercase -mb-5 font-semibold">
          We Are Ochi
        </h1>
        <h1 className="text-[26vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] -mt-16 uppercase -mb-5 font-semibold">
          We Are Ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
