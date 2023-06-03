import { useState, useEffect } from "react";

import { TbBrandOnlyfans } from "react-icons/tb";
import banner from "../images/block.jpg";
import Faq from "react-faq-component";




// import herovideo from '../../public/videos/'

export default function Contact() {
  return (
    <div id="contact" className=" bg-gray-900">
      <div className="relative isolate  overflow-hidden pt-14 ">
        <img
          src={banner}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className=" text-4xl font-bold  text-white sm:text-7xl ">
              CONTACT
            </h1>

            
          </div>

          <div className="mt-16 text-center text-white text-2xl sm:text-4xl px-12">
          SOMETHING@GMAIL.COM
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
