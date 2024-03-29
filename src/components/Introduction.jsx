import React from "react";

function Introduction() {
  return (
    <div className="w-full  bg-customGreen rounded-tl-3xl rounded-tr-3xl text-charcoal font-['Neue_Montreal'] ">
      <h1 className="text-[4vw] leading-none pt-20 p-10">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-b-[1px] border-zinc-500 border-opacity-5">
        {/* <div className="flex  justify-between p-10 mb-24">
          <div className="flex ">
            <h2 className="text-[1.5vw] w-fit">What you can expect:</h2>
          </div>
          <div className="flex flex-col">
            <p className="text-[1.5vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="text-[1.5vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col list-none">
            <p className="text-[1vw]">S:</p>
            {["Instagram", "Becance", "Facebook", "LinkedIn"].map(
              (item, index) => (
                <li className="text-[1vw]">{item}</li>
              )
            )}
          </div>
        </div> */}

        <div className="w-1/2  pt-210 px-10">
          <h1 className="text-[4vw] mb-2">Our approach:</h1>
          <button className="flex gap-10 items-center px-6 py-4 bg-charcoal font-medium text-white rounded-full uppercase text-[1vw]">
            Read more
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-400 mx-10 mt-3.5 rounded-lg mb-12">
          <img
            className=" w-full h-full rounded-lg "
            src="src\assets\Introduction.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
