import { easeIn, motion, useAnimation } from "framer-motion";
import React from "react";
import { RiCircleFill } from "react-icons/ri";

function Projects() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0", z: 5 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%", z: 5 });
  };

  const card1 = [
    { label: "AUDIT", width: "w-16" },
    { label: "copywriting", width: "w-[7.5rem]" },
    { label: "sales deck", width: "w-[7.01rem]" },
    { label: "slides design", width: "w-[7.5rem]" },
  ];
  const card2 = [
    { label: "agency", width: "w-20" },
    { label: "company presentation", width: "w-[11.9rem]" },
  ];
  const card3 = [
    { label: "brand identity", width: "w-32" },
    { label: "design research", width: "w-[9.4rem]" },
    { label: "inverstor deck", width: "w-[8.4rem]" },
  ];
  const card4 = [{ label: "branded template", width: "w-[10rem]" }];

  return (
    <div className="w-full py-8 sm:mt-14  text-charcoal bg-background ">
      <div className="w-full px-6 sm:px-12 pb-2 border-b-[1px] border-zinc-500 border-opacity-5">
        <h1 className="text-[2rem] sm:text-[3.25rem] font-['Neue_Montreal'] ">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex-col sm:flex-row flex gap-y-14 sm:gap-4 px-6 sm:px-12 py-6 sm:py-12 font-['Neue_Montreal'] ">
        <div className="w-full flex flex-col align-middle">
          <div className="flex gap-x-2 align-middle text-sm">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">fyde</p>
          </div>
          <div className="cardcontainer relative w-full h-[40vh] sm:h-[68vh] lg:h-[86vh]">
            <h1 className="absolute overflow-hidden flex left-full text-[21vh] -translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <motion.div
              onHoverStart={() => handleHoverStart(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.3 }}
              className="cards w-full h-full overflow-hidden bg-gray-500 rounded-lg cursor-pointer"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </motion.div>
            <div className="flex flex-row flex-wrap gap-[.6rem] absolute py-4 text-sm">
              {/* Map over the card1 array to generate buttons */}
              {card1.map((shortcut, index) => (
                <button
                  key={index}
                  className={`h-[1.9rem] border-[1px] border-gray-600 rounded-2xl uppercase ${shortcut.width}`}
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col align-middle mt-12 ">
          <div className="flex gap-x-2 align-middle text-sm ">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">vise</p>
          </div>
          <div className="cardcontainer relative w-full h-[40vh] sm:h-[68vh] lg:h-[86vh]">
            <h1 className="absolute flex overflow-hidden right-full text-[21vh] translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <motion.div
              onHoverStart={() => handleHoverStart(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.3 }}
              className="card w-full h-full overflow-hidden bg-gray-500 rounded-lg cursor-pointer"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </motion.div>
            <div className="flex flex-row flex-wrap gap-[.6rem] absolute py-4 text-sm">
              {/* Map over the card1 array to generate buttons */}
              {card2.map((shortcut, index) => (
                <button
                  key={index}
                  className={`h-[1.9rem] border-[1px] border-gray-600 rounded-2xl uppercase ${shortcut.width}`}
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cards w-full flex-col sm:flex-row flex gap-28 sm:gap-4 px-6 sm:px-12 py-10 sm:py-12 font-['Neue_Montreal'] ">
        <div className="w-full flex flex-col align-middle  ">
          <div className="flex gap-x-2 align-middle text-sm">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">trawa</p>
          </div>
          <div className="cardcontainer relative w-full h-[40vh] sm:h-[68vh] lg:h-[86vh]">
            <h1 className="absolute overflow-hidden flex left-full text-[21vh] -translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * 0.02,
                    duration: 0.5,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHoverStart(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.3 }}
              className="cards w-full h-full overflow-hidden bg-gray-500 rounded-lg cursor-pointer"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </motion.div>
            <div className="flex flex-row flex-wrap gap-[.6rem] absolute py-4 text-sm">
              {/* Map over the card1 array to generate buttons */}
              {card3.map((shortcut, index) => (
                <button
                  key={index}
                  className={`h-[1.9rem] border-[1px] border-gray-600 rounded-2xl uppercase ${shortcut.width}`}
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col align-middle  ">
          <div className="flex gap-x-2 align-middle text-sm ">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">premium blend</p>
          </div>
          <div className="cardcontainer relative w-full h-[40vh] sm:h-[68vh] lg:h-[86vh]">
            <h1 className="absolute uppercase flex overflow-hidden right-full text-[21vh] translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"premium blend".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * 0.02,
                    duration: 0.5,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              onHoverStart={() => handleHoverStart(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.3 }}
              className="card w-full h-full overflow-hidden bg-gray-500 rounded-lg cursor-pointer"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              />
            </motion.div>
            <div className="flex flex-row flex-wrap gap-[.6rem] absolute py-4 text-sm">
              {/* Map over the card1 array to generate buttons */}
              {card4.map((shortcut, index) => (
                <button
                  key={index}
                  className={`h-[1.9rem] border-[1px] border-gray-600 rounded-2xl uppercase ${shortcut.width}`}
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-20 font-['Neue_Montreal'] text-[.9rem]">
        <button className="w-[16rem] h-14 border-[1px] border-black rounded-full uppercase bg-charcoal text-white flex items-center justify-evenly">
          view all case studies
          <RiCircleFill className=" text-[.6rem] mb-4 mt-4" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
