import { useState, useEffect } from "react";

import { TbBrandOnlyfans } from "react-icons/tb";
import banner from "../images/block.jpg";
import Faq from "react-faq-component";
import { BsDiscord } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";


const navigation = {
  main: [
    { name: 'HOME', href: '#hero' },
    { name: 'AM I ON', href: '#amion' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },

  ],
  social: [
    
   
    
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

  ],
}



// import herovideo from '../../public/videos/'

export default function Contact() {
  return (
    <div id="contact" className=" bg-gray-900">
      <div className="relative isolate  overflow-hidden pt-14 ">
        <img
          src={banner}
          className="absolute inset-0 -z-10  w-full h-full object-cover opacity-5"
        />

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            
          
            

          <p className="text-center hover:scale-110 transition mt-12" >
 
          <a href="mailto:something@gmail.com" className="mt-16  hover:scale-110 transition text-center text-white text-xl sm:text-2xl px-12">
          SOMETHING@GMAIL.COM
          </a>
          </p>
          </div>

       

       <footer className="bg-transparent">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-12 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-lg leading-6 text-gray-200 hover:underline">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
        <a href="https://discord.gg/4v2FfNwE" className="text-4xl text-white hover:scale-105 transition">
            <BsDiscord />
          </a>
          <a href="https://twitter.com/beast96436?t=PdUlVXQ13yxaZaE1LgdVvw&s=09" className="text-4xl text-white hover:scale-105 transition">
            <AiOutlineTwitter />
          </a>
          <a href="#d" className="text-4xl text-gray-400 cursor-not-allowed">
            <SiOpensea />
          </a>
        </div>
        <p className="mt-10 text-center text-md leading-5 text-gray-100">
          &copy; 2023 Gordinals All rights reserved.
        </p>
      </div>
    </footer>
        </div>
  
      </div>
    </div>
  );
}
