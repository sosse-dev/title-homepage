"use client";
import { motion } from "framer-motion";

const glowingText = {
  initial: { textShadow: "0 0 0px orange" },
  animate: (i: number) => ({
    textShadow: ["0 0 20px orange", "0 0 0px", "0 0 20px orange"],
    transition: {
      delay: 0.2 * i,
      repeat: Infinity,
    },
  }),
};

function StaggerGlowingText() {
  return (
    <div className="w-[40rem] 2xl:w-[60rem] h-[200rem] bg-zinc-800 rotate-[45deg] flex flex-col items-center justify-center opacity-80">
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={0}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold  text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={1}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={2}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={3}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={4}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={5}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={6}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={7}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={8}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={9}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={10}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={11}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
      <motion.h1
        variants={glowingText}
        initial="initial"
        whileInView="animate"
        custom={12}
        className="text-4xl md:text-6xl xl:text-[4rem] 2xl:text-[7rem] font-bold text-accent2 -translate-x-6"
      >
        TITLE TITLE TITLE TITLE TITLE
      </motion.h1>
    </div>
  );
}

export default StaggerGlowingText;
