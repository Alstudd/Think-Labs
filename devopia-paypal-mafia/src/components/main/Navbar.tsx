"use client";
import { Socials } from "@/constants";
import { Mail, Phone } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 px-0">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/LearnBlocksLogo.png"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Learn Blocks
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-12">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/classroom" className="cursor-pointer">
              Classroom
            </a>
            <a href="#about" className="cursor-pointer">
              About Us
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="md:block hidden">
          <div className="flex my-auto flex-row gap-5">
            <button
              //   onClick={(e)=> {
              //     e.preventDefault();
              //     signIn('google', { callbackUrl: process.env.NEXTAUTH_URL });
              // }}
              onClick={(e) => {
                e.preventDefault();
                signIn('google', { callbackUrl: process.env.NEXTAUTH_URL });
              }}
              className="py-3 button-primary text-center text-white cursor-pointer rounded-lg w-[100px]"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
