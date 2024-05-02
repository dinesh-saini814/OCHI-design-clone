import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen bg-background text-charcoal pt-1"
    >
      <div className="textstructure mt-36 px-14 ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] h-[6vw] rounded-md bg-cover bg-[url('src/assets/content.jpg')] relative top-[1.05vw]"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[9.5vw] leading-[7.3vw] tracking-normal font-['Test_Founders_Grotesk_X_Condensed'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] font-['Neue_Montreal'] border-zinc-400 mt-20 flex justify-between py-4 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="uppercase px-5 py-1 border-[1px] border-zinc-800 rounded-full text-[14px]">
            Start the project
          </div>
          <div className="w-8 h-8 rounded-full border-[1px] border-zinc-900 flex justify-center items-center ">
            <HiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
