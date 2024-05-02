import { motion, useAnimation } from "framer-motion";
import React from "react";
import { RiCircleFill } from "react-icons/ri";

function Projects() {
  const cards = [useAnimation(), useAnimation()];
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
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
            <p className="uppercase">fyde</p>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full h-[86vh]"
          >
            <h1 className="absolute overflow-hidden flex left-full text-[21vh] -translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="cards w-full h-full overflow-hidden bg-gray-500 rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col align-middle  ">
          <div className="flex gap-x-2 align-middle ">
            <RiCircleFill className=" text-xs mb-4 mt-1" />
            <p className="uppercase">vise</p>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full h-[86vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full text-[21vh] translate-x-1/2 top-1/2 text-textGreen -translate-y-1/2 z-10 leading-none font-['Test_Founders_Grotesk_X_Condensed']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden bg-gray-500 rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
