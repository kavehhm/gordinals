import { useState, useEffect } from "react";

import { TbBrandOnlyfans } from "react-icons/tb";
import banner from "../images/whitelistchecker.jpg";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";
import toast, { Toast } from "react-hot-toast";
import axios from 'axios';


// import herovideo from '../../public/videos/'

export default function Fetch() {
  const { width, height } = useWindowSize();
  const [address, setAddress] = useState("");

  const [showComponent, setShowComponent] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(address);
    const endpoint = `http://3.136.27.52:3000/api/user/checkWhitelist?address=${address}`;
    console.log(endpoint);


    axios.get(endpoint)
      .then(response => {
        if (response.data.data === true) {
            setShowComponent(true);

            // Hide the component after 5 seconds
            setTimeout(() => {
              setShowComponent(false);
            }, 5000);
        }

        else {
            toast.error("You are not whitelisted")
            
          }
      })
      .catch(error => {
        console.error(error);
      });


    // try {
    //   const response = await fetch(endpoint, { mode: "no-cors" });
    //   const jsonData = await response.json();
    //   console.log(jsonData);

    //   if (jsonData.data === true) {
    //     setShowComponent(true);

    //     // Hide the component after 5 seconds
    //     setTimeout(() => {
    //       setShowComponent(false);
    //     }, 5000);
    //   } else {
    //     toast.error("You are not whitelisted")
        
    //   }
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  return (
    <div id="amion" className="h-full relative bg-gray-900">
      {showComponent && (
        <div className={`absolute w-[${width}] h-[${height}]`}>
          <Confetti width={width} height={height} />
        </div>
      )}

      <div className="relative isolate h-screen overflow-hidden pt-14 lg:h-[100vh]">
        <img
          src={banner}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className=" text-4xl font-bold  text-white sm:text-7xl ">
              ARE YOU IN?
            </h1>

            <form
              onSubmit={submitForm}
              className="mt-16 flex flex-col items-center justify-center gap-y-6"
            >
              <p
                href="www.onlyfans.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-x-3 rounded-md  px-5 text-2xl font-semibold text-white shadow-sm transition  "
              >
                ENTER A VALID BTC ADDRESS
              </p>

              <div className="flex flex-col md:flex-row items-center gap-x-12">
                <input
                  onChange={(addy) => setAddress(addy.target.value)}
                  href="#see-me"
                  placeholder="BTC WALLET HERE"
                  className="mt-6   border-2 border-[#1D3717] text-2xl font-semibold   leading-6 outline-none focus:text-[#1D3717] transition px-2 bg-[#1D3717] focus:bg-white rounded-md  text-white  py-4 block"
                />

                <button
                  type="submit"
                  className="flex w-full mt-6 items-center justify-center gap-x-3   bg-white px-5 py-3.5 text-2xl font-semibold text-1D3717 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  CLICK TO CHECK
                </button>
              </div>
            </form>
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
