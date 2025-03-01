import React from "react";

function Introduction() {
  return (
    <div className="w-full  bg-customGreen rounded-tl-3xl rounded-tr-3xl text-charcoal font-['Neue_Montreal'] ">
      <h1 className="lg:text-[4rem] text-3xl max-[640px]:leading-8 lg:leading-none lg:pt-20 pt-10 lg:p-10 p-5 ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex flex-col gap-5 border-t-[1px] border-b-[1px] border-zinc-500 border-opacity-5">
        <div className="w-full lg:flex max-[640px]:flex-col border-b-[1px] border-zinc-500 border-opacity-5 ">
          <div className=" lg:w-1/2 w-full lg:px-12 px-5 py-5 font-['Neue_Montreal']">
            What you can expect:
          </div>
          <div className="lg:w-1/2 w-full flex flex-row max-[640px]:flex-col">
            <div className="details flex flex-col font-['Neue_Montreal'] lg:w-1/2 pt-5 pr-[55px] p-5">
              {[
                "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
                "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
              ].map((item, index) => (
                <p key={index} className={` ${index === 1 && "mt-8"}`}>
                  {item}
                </p>
              ))}
            </div>
            <div className="details flex flex-col font-['Neue_Montreal'] lg:py-24 lg:px-20 p-5">
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

        <div className="flex flex-row max-[640px]:flex-col">
          <div className="lg:w-1/2 w-full  pt-210 lg:px-10 px-5">
            <h1 className="lg:text-[3rem] text-[2rem] mb-2">Our approach:</h1>
            <button className="flex gap-10 items-center px-6 py-4 bg-charcoal font-medium text-white rounded-full uppercase text-[1rem]">
              Read more
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="lg:w-1/2 w-full lg:h-[29rem] lg:mx-10 mt-3.5 rounded-lg mb-12 p-5 lg:p-0">
            <img
              className=" w-full h-full rounded-lg "
              src="https://i.ibb.co/mr0x8dQK/Homepage-Photo-663x469.jpg"
              alt="Introduction"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
