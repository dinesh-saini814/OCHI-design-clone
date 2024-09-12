import React, { useEffect, useState } from "react";

function PlayEyes() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
        className="relative w-full h-[15rem] lg:h-full lg:bg-cover bg-no-repeat bg-contain bg-center bg-play-eye-bg"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-3/5 h-3/5 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  "
              >
                <div className=" w-3 h-3 lg:w-5 lg:h-5 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-3/5 h-3/5 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  "
              >
                <div className=" w-3 h-3 lg:w-5 lg:h-5 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayEyes;
