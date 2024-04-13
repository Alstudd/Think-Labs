"use client";
import { Layout, Phone, UsersIcon, UsersRound } from "lucide-react";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [userAuth, setUserAuth] = useState(null);

  //Put Signin and signout function

  return (
    <div className="">
      <nav className="fixed top-0 z-20 w-full bg-transparent backdrop-blur-3xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 px-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/eddieNoBg.png"
              className="rounded-full my-auto"
              height={40}
              width={40}
              alt="logo"
            />
            <span className="self-center text-2xl text-black font-semibold whitespace-nowrap">
              ThinkLabs
            </span>
          </a>

          {/* Non Auth for Small Screen  */}
          <ul className="flex flex-row md:hidden">
            <li>
              <a
                href="/dashboard"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                <Layout />
              </a>
            </li>
            <li>
              <a
                href="/evaluation-dashboard"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                <UsersRound />
              </a>
            </li>
          </ul>

          {/* Non Auth for Big Screen  */}
          <div
            className="hidden w-full text-white md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <Layout />
                </a>
              </li>
              <li>
                <a
                  href="/evaluation-dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <UsersRound />
                </a>
              </li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google", { callbackUrl: process.env.NEXTAUTH_URL });
                }}
                className="block py-2 px-3 text-gray-900 rounded-full md:hover:bg-transparent md:border-0 md:p-0"
              >
                SignUp / Login
              </button>
            </ul>
          </div>

          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
