import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex max-[640px]:flex-col items-center max-[640px]:px-5 lg:px-12 gap-4 ">
      <div className="cardcontainer w-full h-[18rem] lg:w-1/2 lg:h-[62vh] ">
        <div className="card relative rounded-xl w-full sm:h-full h-[18rem] bg-card flex items-center justify-center">
          <img
            className="h-16"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 border-[1px] px-3 py-1 border-textGreen rounded-3xl text-textGreen font-['Neue_Montreal'] text-sm">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex max-[640px]:flex-col gap-5 w-full lg:w-1/2 h-[62vh] max-[640px]:h-[70rem]">
        <div className="card relative rounded-xl lg:w-1/2 w-full lg:h-full h-[18rem] bg-[#212121] flex justify-center items-center">
          <img
            className="h-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 border-[1px] uppercase px-3 py-1 rounded-3xl font-['Neue_Montreal'] text-sm">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-xl lg:w-1/2 w-full lg:h-full h-[18rem] bg-[#212121] flex justify-center items-center">
          <img
            className="h-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-8 border-[1px] uppercase px-3 py-1 rounded-3xl font-['Neue_Montreal'] text-sm">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
