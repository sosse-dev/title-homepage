"use client";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [openNavMb, setOpenNavMb] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav className="fixed w-full h-[5rem] md:[4rem] z-50 flex justify-between pl-3 pr-0 md:pl-14 md:pr-14 border-b-2 border-zinc-500 navCol dark:bg-yellow-950 dark:bg-opacity-10">
      <div className="w-fit flex items-center">
        <Link
          href="/"
          className="px-12 py-3 text-xl md:text-xl max-[400px]:hidden md:hidden lg:block text-zinc-500 flex border-2 border-zinc-500 rounded-full dark:text-zinc-300 dark:border-zinc-300"
        >
          <code className="text-green-700 dark:text-green-300">eng</code>
          HelloMom
        </Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className="w-fit h-fit mr-4 rounded-full md:hidden"
        >
          {theme === "dark" ? (
            <Image
              src="/moon-icon.gif"
              title="icon by icons8"
              width={48}
              height={48}
              className="w-[3rem] h-[3rem] object-contain rounded-full"
              alt="sun-icon"
            />
          ) : (
            <Image
              src="/sun-icon.gif"
              title="icon by icons8"
              width={48}
              height={48}
              className="w-[3rem] h-[3rem] object-contain rounded-full"
              alt="sun-icon"
            />
          )}
        </button>
        <div
          onClick={() => setOpenNavMb(!openNavMb)}
          className="w-20 h-full border-zinc-500 border-l-2 md:hidden dark:bg-opacity-0 dark:border-l-0 grid place-items-center cursor-pointer"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="w-[40%] h-[40%] object-cover"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {openNavMb && (
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ x: 450 }}
              animate={{ x: 0 }}
              exit={{ x: 450 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 z-50 right-0 h-full w-full bg-zinc-100 flex flex-col dark:bg-zinc-900"
            >
              <Link
                href="/"
                onClick={() => setOpenNavMb(!openNavMb)}
                className="w-full h-[6rem] flex items-center text-left text-2xl pl-8 text-zinc-500 dark:text-zinc-300"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  scrollTo(0, 3600), setOpenNavMb(!openNavMb);
                }}
                className="w-full h-[6rem] flex items-center text-left text-2xl pl-8 text-zinc-500 dark:text-zinc-300"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  scrollTo(0, 4400), setOpenNavMb(!openNavMb);
                }}
                className="w-full h-[6rem] flex items-center text-left text-2xl pl-8 text-orange-600 dark:text-orange-300"
              >
                Subscribe+
              </button>
              <Link
                href="/register"
                onClick={() => setOpenNavMb(!openNavMb)}
                className="w-full h-[6rem] flex items-center text-left text-2xl bg-zinc-300 dark:bg-zinc-700 pl-8 text-zinc-500 dark:text-zinc-300"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                onClick={() => setOpenNavMb(!openNavMb)}
                className="w-full h-[6rem] flex items-center text-left text-2xl bg-zinc-300 dark:bg-zinc-700 pl-8 text-zinc-500 dark:text-zinc-300"
              >
                Login
              </Link>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
      <div className="space-x-6 hidden md:flex text-zinc-600 items-center dark:text-zinc-300 dark:hover:text-zinc-100 xl:px-24 2xl:px-64">
        <button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className="w-fit h-fit rounded-full text-zinc-700"
        >
          {theme === "dark" ? (
            <Image
              src="/moon-icon.gif"
              title="icon by icons8"
              width={50}
              height={50}
              className="w-[3rem] h-[3rem] object-contain rounded-full"
              alt="sun-icon"
            />
          ) : (
            <Image
              src="/sun-icon.gif"
              title="icon by icons8"
              width={50}
              height={50}
              className="w-[3rem] h-[3rem] object-contain rounded-full"
              alt="sun-icon"
            />
          )}
        </button>
        <Link
          href="/"
          className="hover:text-zinc-500 text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
        >
          Home
        </Link>
        <button
          onClick={() => scrollTo(0, 2800)}
          className="hover:text-zinc-500 text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
        >
          Contact Us
        </button>
        <button
          onClick={() => scrollTo(0, 3600)}
          className="text-orange-700 dark:text-orange-400 hover:border-b-2 hover:pt-1 dark:hover:border-b-2 dark:hover:pt-1 border-orange-400"
        >
          Subscribe+
        </button>
        <Link
          href="/register"
          className="w-fit h-fit dark:bg-slate-500 bg-slate-400 text-zinc-100 hover:bg-slate-500 transition-all px-4 py-2 rounded-full"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="dark:hover:text-green-200 dark:text-zinc-300 text-zinc-700 hover:text-green-600"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
