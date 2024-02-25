import { footer1, footer2 } from "@/data";
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative w-full h-fit bg-zinc-800 flex flex-col justify-center items-center md:flex-row px-14 md:pt-20 pb-36">
      <div className="w-fit h-fit py-6 px-4 mb-10 lg:pr-24">
        <h2 className="text-3xl text-zinc-200">
          <code className="text-green-500 dark:text-green-300">eng</code>
          HelloMom
        </h2>
        <p className=" dark:text-zinc-300 text-zinc-400">
          Learn english fast, grab yours today!
        </p>
        <h2 className="mt-4 text-2xl text-zinc-200">Social Media</h2>
        <div className="flex space-x-3 mt-1">
          <a
            target="_blank"
            href="https://www.instagram.com/sosse.dev"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/instagram.png"
              title="icon by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="instagram icon"
            />
          </a>
          <a
            target="_blank"
            href="https://wa.me/62882019600180"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/whatsapp.png"
              title="icon by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="whatsapp icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Ahmad-Sosse/pfbid02QqMvBwCbprkHDxNH6juf239Xusc4ominF6jaM4E1nQFTVVeL6P4i8jonV39PJPNnl/?locale=id_ID"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/facebook.png"
              title="icon by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="facebook icon"
            />
          </a>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl dark:text-zinc-200 text-zinc-300">Company</h2>
          {footer1.map((text, i) => (
            <button
              key={i}
              className="dark:text-zinc-300 dark:hover:text-zinc-200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left"
            >
              {text}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl dark:text-zinc-200 text-zinc-300">Lesson</h2>
          {footer2.map((text, i) => (
            <button
              key={i}
              className="dark:text-zinc-300 dark:hover:text-zinc-200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left"
            >
              {text}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl dark:text-zinc-200 text-zinc-300">
            Images and icon by
          </h2>
          <a
            href="https://www.freepik.com"
            className="dark:text-zinc-300 dark:hover:text-zinc--200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left"
          >
            freepik
          </a>
          <a className="dark:text-zinc-300 dark:hover:text-zinc--200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left">
            pixabay
          </a>
          <a className="dark:text-zinc-300 dark:hover:text-zinc--200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left">
            icons8
          </a>
          <a
            target="_blank"
            href="https://www.freepik.com/free-vector/elearning-isometric-design-concept_5972973.htm#query=book%20and%20pen&position=4&from_view=search&track=ais&uuid=608f4c21-651d-4cac-813a-c032a8d4549f"
            className="dark:text-zinc-300 dark:hover:text-zinc--200 lg:text-sm text-zinc-400 hover:text-zinc-300 text-left"
          >
            macrovector
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
