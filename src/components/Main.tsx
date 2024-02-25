import { mainData } from "@/data";
import Image from "next/image";

function Main() {
  return (
    <>
      <div className="w-full h-[60rem] lg:h-[40rem] flex flex-col items-center justify-center pt-4">
        <h2 className="text-4xl md:ml-0 text-center text-zinc-800 dark:text-zinc-200">
          {mainData.title}
        </h2>
        <p className="md:w-[25rem] text-center text-zinc-600 dark:text-zinc-300 mb-2 mt-3">
          {mainData.desc}
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-x-20 gap-y-12 mt-2">
          <div className="w-full sm:w-[25rem] md:w-[30rem] h-[25rem] rounded-full overflow-hidden border-4 border-zinc-300 dark:border-zinc-100">
            <Image
              src="/book-pen.jpg"
              title="Image by macrovector"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="book-pen-illustration"
            />
          </div>
          {/* <div className="w-[20rem] h-[20rem] rounded-full overflow-hidden border-4 border-zinc-300 dark:border-zinc-100">
            <Image
              src="/LeavesImg.png"
              width={140}
              height={140}
              className="w-full h-full object-cover"
              alt="leaves"
            />
          </div> */}
        </div>
      </div>
      <div className="relative w-full h-fit py-20 bg-green-300 bg-opacity-50 dark:bg-opacity-30 flex flex-col justify-center items-center overflow-hidden">
        <h1 className="absolute w-[300rem] flex flex-row -left-20 text-[20rem] md:text-[40rem] text-zinc-100 dark:text-black">
          8 789
        </h1>
        <h1 className="text-5xl lg:text-6xl mb-6 z-20 text-zinc-800 dark:text-zinc-100">
          {mainData.comment.title}
        </h1>
        {/* comment */}
        <div className="w-fit h-fit flex flex-col md:flex-row gap-y-4 md:gap-x-4 z-20">
          <div className="w-[18rem] h-[22rem] bg-zinc-100 dark:bg-zinc-800 border-4 border-zinc-600 dark:border-zinc-200 grid place-items-center">
            <div className="w-[80%] h-[90%] flex flex-col">
              <div className="w-14 h-14 bg-slate-300 rounded-full shrink-0 overflow-hidden">
                <Image
                  src="/profile-picture.png"
                  width={30}
                  height={30}
                  alt="default-profile-picture"
                  className="w-full h-full"
                />
              </div>
              <p className="text-zinc-700 dark:text-zinc-200 text-lg">
                {mainData.comment.comment1}
              </p>
              <p className="self-end text-zinc-600 dark:text-zinc-300">
                -{mainData.comment.sendedBy1}
              </p>
            </div>
          </div>
          <div className="w-[18rem] h-[22rem] bg-orange-800 bg-opacity-80 border-4 border-zinc-100 grid place-items-center">
            <div className="w-[80%] h-[90%] flex flex-col">
              <div className="w-14 h-14 bg-slate-300 rounded-full shrink-0 overflow-hidden">
                <Image
                  src="/profile-picture.png"
                  width={30}
                  height={30}
                  alt="default-profile-picture"
                  className="w-full h-full"
                />
              </div>
              <p className="text-zinc-50 text-lg">
                {mainData.comment.comment2}
              </p>
              <p className="self-end text-zinc-50">
                -{mainData.comment.sendedBy2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit py-20 flex justify-around items-center">
        <div className="flex flex-col md:flex-row items-center md:pr-36 gap-x-4">
          <div className="w-[24rem] h-[24rem] z-20">
            <Image
              src="/contact-illustration.jpg"
              title="Image by freepik"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="contact-illustration"
            />
          </div>
          <div className="w-fit h-fit flex flex-col mt-8 z-20 ml-4 lg:ml-0">
            <h1 className="text-3xl font-semibold">
              {mainData.infoContact.title}
            </h1>
            <p className="dark:text-zinc-300">{mainData.infoContact.desc}</p>
            <button className="relative w-fit h-fit px-6 py-3 bg-orange-300 hover:bg-green-300 transition-all dark:hover:bg-green-600 dark:bg-yellow-800 hover:border-4 hover:border-zinc-600 dark:hover:border-white mt-4 rounded-lg font-semibold group">
              Contact Us!
              <p className="absolute -right-7 -bottom-12 group-hover:rotate-45 group-hover:opacity-100 opacity-0 transition-all dark:text-zinc-400 text-zinc-800">{`<<--click!`}</p>
              <p className="absolute -bottom-20 group-hover:rotate-90 rotate-180 duration-700 group-hover:opacity-100 opacity-0 transition-all dark:text-zinc-400 text-zinc-800">{`<<--click!`}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="relative lg:static w-full h-[60rem] flex flex-col justify-center lg:items-center pl-8 gap-y-3 overflow-hidden">
        <div className="lg:relative w-[80%] 2xl:w-[40%] h-full hidden lg:flex flex-col justify-center">
          <h1 className="absolute -right-36 hidden lg:block top-0 w-fit text-[35rem] text-orange-700 text-opacity-20 dark:text-black dark:text-opacity-40 z-10">
            Trial
          </h1>
          <div className="w-[20rem] h-[20rem] hidden lg:block rounded-full z-20 overflow-hidden border-4 border-zinc-700 dark:border-0 dark:border-zinc-300">
            <Image
              src="/gears-illustration.png"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="gears-illustration"
            />
          </div>
          <h1 className="text-4xl mt-5 z-20">Try it free for 7 days!</h1>
          <ul
            className="z-20 text-zinc-800 dark:text-zinc-200 mt-1"
            style={{ listStyleType: "circle" }}
          >
            <li>
              Get full acces to all subcription features, including learning
              videos, interactive exercises, and e-books.
            </li>
            <li>
              Try out all learning methods we offer, such as videos, audio, text
              and interative exercises.
            </li>
            <li>
              Learning english in a fun and effective way, with materials that
              are interesting and easy to understand
            </li>
            <li>
              Decide if this subscription is right before you make purchase.
            </li>
          </ul>
          <p className="text-zinc-600 dark:text-zinc-200 text-3xl z-20">
            <span className="text-5xl font-semibold">Free</span> / 7 days!
          </p>
          <button className="relative w-fit h-fit px-6 py-4 hidden lg:block bg-yellow-700 rounded-lg transition-all dark:hover:bg-orange-400 dark:hover:text-zinc-800 hover:border-4 hover:border-zinc-600 dark:hover:border-white hover:box-border text-white mt-5 z-20 group text-xl font-semibold">
            Subscribe+ Now!
            <p className="absolute -right-14 -bottom-20 group-hover:rotate-45 group-hover:opacity-100 opacity-0 transition-all dark:text-zinc-400 text-zinc-800">{`<<--join us now!`}</p>
            <p className="absolute -bottom-20 -left-12 group-hover:rotate-[130deg] rotate-180 duration-500 group-hover:opacity-100 opacity-0 transition-all dark:text-zinc-400 text-zinc-800">{`<<--click!`}</p>
          </button>
        </div>
        <h1 className="absolute -right-12 w-fit lg:hidden text-[35rem] text-orange-700 text-opacity-20 dark:text-black">
          Trial
        </h1>
        <div className="w-[20rem] h-[20rem] shrink-0 lg:hidden rounded-full z-20 overflow-hidden border-4 dark:border-0 border-zinc-700 dark:border-zinc-300">
          <Image
            src="/gears-illustration.png"
            width={300}
            height={300}
            className="w-full h-full object-cover"
            alt="gears-illustration"
          />
        </div>
        <h1 className="text-4xl mt-5 z-20 lg:hidden">
          Try it free for 7 days!
        </h1>
        <ul
          className="z-20 text-zinc-800 dark:text-zinc-200 mt-1 lg:hidden"
          style={{ listStyleType: "circle" }}
        >
          <li>
            Get full acces to all subcription features, including learning
            videos, interactive exercises, and e-books.
          </li>
          <li>
            Try out all learning methods we offer, such as videos, audio, text
            and interative exercises.
          </li>
          <li>
            Learning english in a fun and effective way, with materials that are
            interesting and easy to understand
          </li>
          <li>
            Decide if this subscription is right before you make purchase.
          </li>
        </ul>

        <p className="text-zinc-700 dark:text-zinc-300 z-20 lg:hidden">
          <span className="text-5xl font-semibold">Free</span> / 7 days
        </p>
        <button className="relative w-fit h-fit px-6 py-4 lg:hidden rounded-lg bg-yellow-700 text-white z-20 text-2xl font-semibold">
          Subscribe+ Now!
        </button>
      </div>
      <div className="w-full h-[8rem] md:h-[20rem] bg-slate-400 bg-opacity-40 grid place-items-center">
        <div className="w-fit h-fit flex flex-col px-9 lg:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-zinc-900 dark:text-zinc-100 font-thin">{`"Dream it, Speak it, Live it"`}</h1>
          <p className="self-end text-lg lg:text-2xl dark:text-zinc-200">
            ****
          </p>
        </div>
      </div>
    </>
  );
}
export default Main;
