import React from "react";

function PlayEyes() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-3/5 h-3/5 flex items-center justify-center bg-zinc-900 rounded-full">
              <div className="w-1/6 h-1/6 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-3/5 h-3/5 flex items-center justify-center bg-zinc-900 rounded-full">
              <div className="w-1/6 h-1/6 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayEyes;
