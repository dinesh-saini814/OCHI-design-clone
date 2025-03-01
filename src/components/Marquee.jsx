import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".05"
      className="w-full sm:pt-24 pt-14  pb-5 bg-marquee rounded-tl-3xl rounded-tr-3xl "
    >
      <div className=" border-t-[1px] border-b-[1px] flex whitespace-nowrap w-auto">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[26vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] -mt-[5vw]  py-8 uppercase -mb-5 font-semibold pr-5"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[26vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] -mt-[5vw] py-8 uppercase -mb-5 font-semibold pr-5"
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
