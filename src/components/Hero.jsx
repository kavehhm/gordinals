import { useState, useEffect } from "react";
import Navbar from "./Nav";
import asset8 from "../images/asset8.jpg";
import dez2 from "../images/dez2.jpg";

// import herovideo from '../../public/videos/'

export default function Hero() {
  const [text, setText] = useState("Come to me");
  const [fullText, setFullText] = useState("...");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }, 500);
    }
  }, [fullText, index, text]);

  return (
    <div id="home" className="h-full bg-gray-900">
      <div className="relative isolate h-full min-h-[55rem] overflow-hidden  lg:h-[100vh]">
        <Navbar />
        <img
          alt="top"
          fill
          src={dez2}
          className="absolute hidden lg:block  inset-0 -z-10 h-full w-full object-cover "
        />
        <img
          alt="top"
          fill
          src={asset8}
          className="absolute opacity-40 block lg:hidden inset-0 -z-10 h-full w-full object-cover "
        />

        <div className=" px-12 py-32  sm:py-40 xl:px-36 2xl:px-64 ">
          <div className="hidden sm:mb-8  "></div>
          <div className="">
            <h1 className="gordinals mt-3  font-extrabold  text-white  text-5xl md:mt-6 ">
              GORDINALS
            </h1>

            <div className="lg:w-[50rem] mt-9 text-white lg:text-[#1D3717] flex flex-col gap-y-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                porttitor massa erat, non pulvinar arcu sodales ut. Quisque
                congue ullamcorper lobortis. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>

              <p>
                Donec non ultricies leo. Maecenas nec justo ullamcorper,
                condimentum libero non, tincidunt neque. Nulla non lorem non
                nibh fringilla placerat et quis velit. Cras id ipsum bibendum
                libero vulputate ultrices imperdiet sed ipsum.
              </p>
            </div>

            <div className="mt-12 flex items-center  gap-x-6">
              <a
                href="#amion"
             
                className="flex w-64 items-center justify-center   bg-[#1D3717] px-5 py-3.5 text-2xl font-semibold text-white shadow-sm transition hover:bg-[#1D3717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                AM I IN?
              </a>

              <a
                href="#faq"
                scroll={false}
                className="whitespace-nowrap block cursor-pointer text-2xl font-semibold leading-6 text-white hover:underline "
              >
                See more <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
