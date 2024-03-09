import React from "react";
import { RiCircleFill } from "react-icons/ri";

function Projects() {
  return (
    <div className="w-full py-8 mt-14  text-charcoal bg-background ">
      <div className="w-full px-12 pb-10 border-b-[1px] border-zinc-500 border-opacity-5">
        <h1 className="text-[3.25rem] font-['Neue_Montreal'] ">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-4 px-12 py-14">
        <div className="w-full ">
          <RiCircleFill className=" text-xs mb-4" />
          <div className="card w-full h-[30rem] bg-red-300 rounded-lg"></div>
        </div>
        <div className="w-full ">
          <RiCircleFill className=" text-xs mb-4" />
          <div className="card w-full h-[30rem] bg-red-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
