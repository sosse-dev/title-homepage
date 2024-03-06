import { DrawerContact } from "@/components/DrawerContact";
import BackgroundText from "@/components/animation/BackgroundText";
import Bubble from "@/components/animation/Bubble";
import Button1 from "@/components/animation/Button1";
import StaggerGlowingText from "@/components/animation/StaggerGlowingText";
import Title1 from "@/components/animation/TItle1";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <nav className="w-fit hidden lg:mx-auto lg:flex lg:px-3 rounded-b-md lg:py-2 lg:justify-center lg:bg-secondary lg:gap-x-4 lg:font-semibold">
        <a
          target="_blank"
          href="https://sosse.vercel.app"
          title="About Me"
          className="text-zinc-200 hover:bg-primary border-2 inner-border px-5 py-2 rounded-md"
        >
          A
        </a>
        <DrawerContact
          content="C"
          style="text-zinc-200 bg-primary px-5 py-2 rounded-md"
        />
      </nav>
      <header className="w-full h-[80vh] min-h-[28rem] md:h-screen grid place-items-center">
        <div className="w-fit h-fit flex flex-col px-2 overflow-hidden">
          <Title1 title="TITLE" title2="HOMEPAGE" />
          <p className="w-fit md:w-[30rem] text-zinc-200 text-center mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            consectetur maiores nihil officiis quibusdam facere quos voluptatum,
            iste veritatis numquam nulla atque recusandae laborum nobis odio ea
            possimus dicta quaerat?
          </p>
          <Button1 />
        </div>
      </header>
      <div className="relative w-full mx-auto max-w-[100rem] h-fit pt-24 pb-12 bg-secondary flex flex-col items-center justify-center overflow-hidden md:overflow-visible">
        <div className="absolute hidden bottom-[-3rem] left-[17rem] md:left-[7rem] lg:hidden 2xl:hidden 2xl:left-[26rem] w-[10rem] h-[10rem] bg-accent2 md:shadow-2xl md:shadow-accent2 rounded-full"></div>
        <BackgroundText />
      </div>
      <div className="w-full max-w-[140rem] mx-auto h-fit bg-primary flex flex-col lg:flex-row lg:justify-between pt-14">
        <div className="flex flex-col lg:shadow-lg pb-7">
          <h1 className="text-6xl font-bold text-zinc-200">TITLE</h1>
          <h2 className="text-6xl font-bold text-zinc-200">BOOM!</h2>

          <p className="text-zinc-200 mt-2 px-3 lg:px-0 lg:pr-2 text-2xl">
            Lordolor sit amet consectetur adipisicing elit. Possimus architecto
            magni dolorem et beatae alias iure? Minus natus eos fugit est quas
            temporibus vitae error, sit repudiandae magnam, saepe qu
          </p>
          <div className="w-full flex justify-end mt-4 pr-8">
            <Button variant="outline">Button</Button>
          </div>
        </div>
        <div className="flex flex-col shadow-lg pb-7">
          <h1 className="text-6xl font-bold text-zinc-200">TITLE</h1>
          <h2 className="text-6xl font-bold text-zinc-200">BOOM2!</h2>
          <p className="text-zinc-200 mt-2 px-3 lg:px-0 text-2xl">
            Lordolor sit amet consectetur adipisicing elit. Possimus architecto
            magni dolorem et beatae alias iure? Minus natus eos fugit est quas
            temporibus vitae error, sit repudiandae magnam, saepe qu
          </p>
          <div className="w-full flex justify-end mt-4 pr-8">
            <Button variant="outline">Button</Button>
          </div>
        </div>
      </div>
      <Bubble />
      <div className="relative w-full h-screen max-h-[40rem] flex items-center justify-end overflow-hidden">
        <div className="absolute w-full lg:w-fit lg:px-4 lg:py-3 py-3 left-[0] flex flex-col items-end z-30 bg-primary">
          <h1 className="text-6xl font-bold text-accent2">
            <span className="text-zinc-200">Contact</span> me!
          </h1>
          {/* <button className="w-fit px-4 py-2 bg-secondary text-zinc-200 border-t-4 border-accent2 hover:border-t-0 hover:mt-1 font-semibold rounded-md">Click Here!</button> */}
          <DrawerContact
            content="Click Here!"
            style="w-fit px-4 py-2 bg-secondary text-zinc-200 border-t-4 border-accent2 hover:border-t-0 hover:mt-1 font-semibold rounded-md"
          />
        </div>
        <StaggerGlowingText />
      </div>
      <div className=" bg-secondary text-zinc-800">
        <div className="max-w-2xl mx-auto py-10">
          <div className="text-center">
            <h1 className="text-7xl mb-3 font-bold text-zinc-900 bg-accent1 py-4">
              TITLE ENDLINE
            </h1>
            <p className="text-zinc-200">
              ui doloribus magnam quibusdam minus nemo, illum sit quasi{" "}
            </p>
            <div className="flex justify-center my-10">
              <button className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <div className="text-left">
                  <p className="text-xs text-zinc-300">Download on </p>
                  <p className="text-sm md:text-base text-zinc-200">
                    XXXXXXXXXXXX
                  </p>
                </div>
              </button>
              <button className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <div className="text-left">
                  <p className="text-xs text-zinc-300">Download on </p>
                  <p className="text-sm md:text-base text-zinc-200">
                    YYYYYYYYYYY
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-zinc-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0 bg-zinc-800 px-2 py-3 rounded-md">
              &copy; Ahmad Sosse, 2024.
            </p>
            <div className="order-1 md:order-2 bg-zinc-800 px-2 py-3 rounded-md">
              <DrawerContact
                content="Contact Me"
                style="px-2 hover:text-zinc-200"
              />
              <a
                target="_blank"
                href="https://sosse.vercel.app"
                className="px-2 border-l hover:text-zinc-200"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
