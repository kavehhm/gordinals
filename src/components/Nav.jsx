import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { BsDiscord } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";

const navigation = [
  { name: "FAQ", href: "#faq" },
  { name: "AM I ON", href: "#amion" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ fontFamily: 'myfont' }} className="  ">
      <nav
        className="mx-auto flex max-w-[95rem] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5  text-white text-3xl p-1.5">
            <span className="sr-only">Your Company</span>
            $XBTG
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 text-white w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden w-4/6 lg:flex lg:justify-around">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-white hover:underline underline-offset-4 font-bold leading-6 white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden text-white lg:gap-x-8 text lg:flex lg:flex-1 lg:justify-end">
          <a href="https://discord.gg/4v2FfNwE" className="text-4xl text-purp hover:scale-105 transition">
            <BsDiscord />
          </a>
          <a href="https://twitter.com/beast96436?t=PdUlVXQ13yxaZaE1LgdVvw&s=09" className="text-4xl text-purp hover:scale-105 transition">
            <AiOutlineTwitter />
          </a>
          <a href="#d" className="text-4xl text-gray-400 cursor-not-allowed">
            <SiOpensea />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1D3717] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <a href="/" style={{ fontFamily: 'myfont' }} className="-m-1.5 text-white  text-3xl p-1.5">
            <span className="sr-only">Your Company</span>
            $XBTG
          </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                  onClick={()=>setMobileMenuOpen(false)}
                    key={item.name}
                    href={item.href}
                    style={{ fontFamily: 'myfont' }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 white hover:bg-purp hover:text-[#EDEDED]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 text-white flex gap-x-12">
                <a href="#" className="text-4xl text-purp hover:scale-105 transition">
                  <BsDiscord />
                </a>
                <a href="#" className="text-4xl text-purp hover:scale-105 transition">
                  <AiOutlineTwitter />
                </a>
                <a href="#" className="text-4xl text-purp hover:scale-105 transition">
                  <SiOpensea />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
