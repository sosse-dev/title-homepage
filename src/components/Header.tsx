import { headerData } from "@/data";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full min-h-[28rem] flex flex-col pt-24">
      <div className="relative w-full h-[15rem] md:h-[30rem] dark:bg-gradient-to-t dark:from-zinc-800 overflow-hidden">
        <Image
          src="/plants-background.png"
          title="Image by freepik"
          priority={true}
          fill={true}
          sizes="calc(100vw - 17px)"
          className="w-full h-full overflow-hidden object-contain"
          alt="plants-background"
        />
        <div className="w-[90%] md:w-[60%] h-full mx-auto border-0"></div>
      </div>
      <div className="min-w-[20rem] w-full flex flex-col mt-9 pr-3 pl-7 lg:pl-24 space-y-1 xl:px-[18rem] 2xl:px-[30rem]">
        <h2 className="text-4xl text-amber-950 dark:text-zinc-200 font-fontS">
          <span className="text-green-700 dark:text-green-300">eng</span>
          {headerData.title}
        </h2>
        <p className="md:max-w-[43rem] text-lg text-zinc-900 dark:text-zinc-400">
          <span className="text-amber-950 dark:text-zinc-300 font-semibold pr-1">
            Learn English the fun way with English Hello Mom!
          </span>

          {headerData.desc}
        </p>
      </div>
      <div className="relative right-0 left-0 mx-auto w-full lg:max-w-[50rem] h-fit bg-opacity-100 flex flex-col space-y-12 px-5 py-3 mt-24 border-4 mb-14 dark:bg-zinc-500 rounded-lg dark:bg-opacity-20 dark:border-orange-00">
        <div className="w-full h-fit flex flex-col py-3 px-2 text-white">
          <h2 className="text-3xl text-zinc-600 dark:text-zinc-200">Noun</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            A noun is a word that names something, be it a person, place, thing,
            or even an idea. it{"'"}s one of the fundamental building blocks of
            language, like a{" "}
            <span className="text-zinc-600 dark:text-zinc-200 font-semibold">
              paper
            </span>
            .
          </p>
        </div>
        <div className="w-full h-fit flex flex-col py-3 px-2 text-white">
          <h2 className="text-3xl text-zinc-600 dark:text-zinc-200">Verb</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            A verb is a word that expresses an action, occurrence, or state of
            being, such as{" "}
            <span className="text-zinc-600 dark:text-zinc-200 font-semibold pr1">
              swim, run and read!
            </span>
            .
          </p>
        </div>
        <div className="w-full h-fit flex flex-col py-3 px-2 text-white">
          <h2 className="text-3xl text-zinc-600 dark:text-zinc-200">
            Adjective
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            An adjective is a word that describes or modifes a noun or pronoun.
            it adds details to help paint a picture with words. do you know{" "}
            {"'"}
            <span className="text-zinc-600 dark:text-zinc-200 font-semibold">
              Cool
            </span>
            {"'"} word?, that is also included as an adjective word!.
          </p>
        </div>
        <div className="w-full h-fit flex flex-col py-3 px-2 text-white">
          <h2 className="text-3xl text-zinc-600 dark:text-zinc-200">Adverb</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            An adverb is a word that modifies, or adds more information to,
            verbs, adjectives, other adverbs, phrases, or even entire sentences.
            For instance, {"'"}it is
            <span className="text-zinc-600 dark:text-zinc-200 font-semibold px-1">
              very
            </span>
            cold{"'"}.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
