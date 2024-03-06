"use client";
import { motion } from "framer-motion";

export default function Button1() {
  return (
    <div className="w-full flex justify-end gap-x-3 mt-2">
      <motion.button
        initial={{ translateX: 300 }}
        animate={{ translateX: 0 }}
        transition={{ type: "spring", ease: "easeIn", bounce: 0.3, delay: 0.2 }}
        className="px-5 py-2 bg-secondary text-sm font-semibold hover:bg-zinc-800 hover:border-[2px] mt-1 hover:mt-0 rounded-md text-zinc-100"
      >
        Button
      </motion.button>
      <motion.button
        initial={{ translateX: 300 }}
        animate={{ translateX: 0 }}
        transition={{ type: "spring", ease: "easeIn", bounce: 0.3, delay: 0.2 }}
        className="px-5 py-2 bg-secondary text-sm font-semibold ml-1 hover:ml-0 hover:bg-zinc-800 hover:border-[2px] mt-1 hover:mt-0 rounded-md text-zinc-100"
      >
        Button
      </motion.button>
    </div>
  );
}
