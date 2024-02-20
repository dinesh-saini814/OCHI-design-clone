import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-background text-charcoal pt-1">
      <div className="textstructure mt-36 px-14 ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex ">
                {index === 1 && (
                  <div className="mr-[1vw] w-[9vw] h-[6vw] rounded-md bg-green-600 relative top-[1.1vw]"></div>
                )}
                <h1 className="uppercase text-[9.5vw] leading-[7.3vw] tracking-normal font-['Test_Founders_Grotesk_X_Condensed'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] font-['Neue_Montreal'] border-zinc-400 mt-24 flex justify-between py-4 px-16">
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
