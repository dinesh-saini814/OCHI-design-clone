import React from "react";
import { RiCircleFill } from "react-icons/ri";

function Projects() {
  return (
    <div className="w-full py-8 mt-14  text-charcoal bg-background ">
      <div className="w-full px-12 pb-7 border-b-[1px] border-zinc-500 border-opacity-5">
        <h1 className="text-[3.25rem] font-['Neue_Montreal'] ">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-4 px-12 py-12 font-['Neue_Montreal'] text-sm">
        <div className="w-full flex flex-col align-middle  ">
          <div className="flex gap-x-2 align-middle ">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">vise</p>
          </div>
          <div className="cardcontainer w-full h-[86vh]">
            <h1 className="absolute bg-yellow-200 z-10 text-7xl font-['Test_Founders_Grotesk_X_Condensed']">
              FYDE
            </h1>
            <div className="card w-full h-full overflow-hidden bg-gray-500 rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col align-middle  ">
          <div className="flex gap-x-2 align-middle ">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">vise</p>
          </div>
          <div className="cardcontainer w-full h-[86vh]">
            <div className="card w-full h-full overflow-hidden bg-gray-500 rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
