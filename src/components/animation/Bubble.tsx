"use client";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Bubble() {
  const ref = useRef(null);
  const controlAnimation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controlAnimation.start("animate");
    }
  }, [isInView, controlAnimation]);

  return (
    <div className="w-full h-fit flex flex-col items-center space-y-7 py-12">
      <div className="w-fit h-fit flex flex-col lg:flex-row items-center space-y-7 lg:space-x-24 lg:space-y-0">
        <div className="shadow-2xl w-[10rem] h-[10rem] bg-secondary rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user w-full h-[60%] text-accent2"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
        </div>
        <p className="w-[12rem] text-zinc-200 text-center lg:hidden">
          Loremlor sit amet consectetur adipisicing elit. Consectetur minus,
          placeat
        </p>
        <div className="shadow-2xl w-[10rem] h-[10rem] bg-secondary rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round-search w-full h-[60%] text-accent2"
          >
            <circle cx="10" cy="8" r="5" />
            <path d="M2 21a8 8 0 0 1 10.434-7.62" />
            <circle cx="18" cy="18" r="3" />
            <path d="m22 22-1.9-1.9" />
          </svg>{" "}
        </div>
        <p className="w-[12rem] text-zinc-200 text-center lg:hidden">
          Loremlor sit amet consectetur adipisicing elit. Consectetur minus,
          placeat
        </p>
        <div className="shadow-2xl w-[10rem] h-[10rem] bg-secondary rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-search w-full h-[60%] text-accent2"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <circle cx="12" cy="12" r="3" />
            <path d="m16 16-1.9-1.9" />
          </svg>{" "}
        </div>
      </div>
      <div className="flex space-x-24">
        <p className="w-[12rem] text-zinc-200 text-center hidden lg:block">
          Loremlor sit amet consectetur adipisicing elit. Consectetur minus,
          placeat
        </p>
        <p className="w-[12rem] text-zinc-200 text-center hidden lg:block">
          Loremlor sit amet consectetur adipisicing elit. Consectetur minus,
          placeat
        </p>
      </div>
    </div>
  );
}
