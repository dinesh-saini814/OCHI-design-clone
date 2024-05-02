import React from "react";

function Introduction() {
  return (
    <div className="w-full  bg-customGreen rounded-tl-3xl rounded-tr-3xl text-charcoal font-['Neue_Montreal'] ">
      <h1 className="text-[4vw] leading-none pt-20 p-10">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex flex-col gap-5 border-t-[1px] border-b-[1px] border-zinc-500 border-opacity-5">
        <div className="w-full flex border-b-[1px] border-zinc-500 border-opacity-5 ">
          <div className=" w-1/2 px-12 py-5 font-['Neue_Montreal']">
            What you can expect:
          </div>
          <div className="w-1/2 flex flex-row">
            <div className="details flex flex-col font-['Neue_Montreal'] w-1/2 pt-5 pr-[55px]">
              {[
                "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
                "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
              ].map((item, index) => (
                <p key={index} className={` ${index === 1 && "mt-8"}`}>
                  {item}
                </p>
              ))}
            </div>
            <div className="details flex flex-col font-['Neue_Montreal'] py-24 px-20">
              {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map(
                (item, index) => (
                  <a key={index} className={` ${index === 1 && "mt-4"}`}>
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
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
    </div>
  );
}

export default Introduction;
