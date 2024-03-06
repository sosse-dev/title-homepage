"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants1 = {
  initial: {
    translateX: 0,
  },
  animate: {
    translateX: 690,
  },
};

const variants2 = {
  initial: {
    translateX: 0,
  },
  animate: {
    translateX: -690,
  },
};

export default function BackgroundText() {
  const ref = useRef(null);
  const controlAnimation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controlAnimation.start("animate");
    }
  }, [isInView, controlAnimation]);

  return (
    <>
      <motion.div
        variants={{
          animate: {
            top: "auto",
            right: "auto",
            bottom: "-3rem",
            left: "17rem",
          },
        }}
        initial={{ top: 0, right: "17rem" }}
        transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
        animate={controlAnimation}
        className="hidden absolute lg:block 2xl:hidden w-[10rem] h-[10rem] bg-accent2 md:shadow-2xl md:shadow-accent2 rounded-full"
      ></motion.div>
      <h1 className="relative text-8xl font-bold text-right overflow-hidden">
        TITLE BORDER!
        <motion.div
          ref={ref}
          variants={variants1}
          initial="initial"
          animate={controlAnimation}
          transition={{ type: "spring", stiffness: 40 }}
          className="absolute top-0 w-full h-full bg-accent1"
        ></motion.div>
      </h1>
      <p
        className={`max-w-[48rem] text-2xl text-center text-zinc-300 ${
          isInView ? "" : "tracking-wider"
        } transition-all`}
      >
        Lorum dolor sit amet consectetur adipisicing elit. Beatae, omnis! Alias
        voluptates sint ipsum explicabo dolor, atque excepturi maiores nostrum
        consequatur eos odit, id facilis molestias iusto{" "}
      </p>
      <h1 className="relative text-8xl font-bold text-right overflow-hidden">
        !TITLE BEYOND
        <motion.div
          ref={ref}
          variants={variants2}
          initial="initial"
          animate={controlAnimation}
          transition={{ stiffness: 60 }}
          className="absolute top-0 w-full h-full bg-accent1"
        ></motion.div>
      </h1>
    </>
  );
}
