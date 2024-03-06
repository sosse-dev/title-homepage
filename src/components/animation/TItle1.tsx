"use client";
import { motion } from "framer-motion";

export default function Title1({
  title,
  title2,
}: {
  title: string;
  title2: string;
}) {
  return (
    <motion.h1
      initial={{ translateX: -400, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ eafe: "easeOut", duration: 0.7 }}
      className="text-5xl sm:text-6xl w-fit flex flex-col font-bold text-zinc-100"
    >
      {title}
      <motion.span
        initial={{ translateX: -400, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ eafe: "easeOut", duration: 0.9 }}
        className="text-accent2"
      >
        {title2}
      </motion.span>
    </motion.h1>
  );
}
