import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-background text-charcoal pt-1">
      <div className="textstructure mt-36 px-14 ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-[9.5vw] leading-[7.5vw] tracking-normal font-['Test_Founders_Grotesk_X_Condensed'] font-light">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] font-['Neue_Montreal'] border-zinc-400 mt-24 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex">
          <div className="uppercase px-5 py-1 border-[1px] border-zinc-800 rounded-full text-[14px]">
            Start the project
          </div>
          <div className="w-3 h-3 rounded-full ">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
