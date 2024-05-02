import React from "react";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-screen flex items-center px-12 gap-4"
    >
      <div className="cardcontainer w-1/2 h-[62vh] ">
        <div className="card relative rounded-xl w-full h-full bg-card flex items-center justify-center">
          <img className="h-16" src="src/assets/logo001.svg" alt="" />
          <button className="absolute left-8 bottom-8 border-[1px] px-3 py-1 border-textGreen rounded-3xl text-textGreen font-['Neue_Montreal'] text-sm">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[62vh] ">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img className="h-20" src="src/assets/logo002.svg" alt="" />
          <button className="absolute left-8 bottom-8 border-[1px] uppercase px-3 py-1 rounded-3xl font-['Neue_Montreal'] text-sm">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img className="h-28" src="src/assets/logo003.png" alt="" />
          <button className="absolute left-8 bottom-8 border-[1px] uppercase px-3 py-1 rounded-3xl font-['Neue_Montreal'] text-sm">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
