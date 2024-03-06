"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { DropdownMenuNavbar } from "../DropdownMenuNavbar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const { scrollY } = useScroll();
  const scrollYvalue = useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest);
  });

  useEffect(() => {
    if (scrollYValue > 350) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [scrollYValue]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ translateY: -300 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -300 }}
          transition={{ ease: "easeIn" }}
          className="fixed top-7 right-12 hidden lg:block z-50"
        >
          <DropdownMenuNavbar />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
