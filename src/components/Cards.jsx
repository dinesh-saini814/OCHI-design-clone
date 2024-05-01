import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5">
      <div className="cardcontainer w-1/2 h-[60vh] ">
        <div className="card w-full h-full bg-card"></div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh] ">
        <div className="card w-1/2 h-full bg-[#212121]"></div>
        <div className="card w-1/2 h-full bg-[#212121]"></div>
      </div>
    </div>
  );
}

export default Cards;
