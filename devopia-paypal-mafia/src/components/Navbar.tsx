import Link from "next/link";
import React from "react";

import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
import { Bot, Flame } from "lucide-react";
import Image from "next/image";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
            <Image src='/eddieNoBg.png' className="rounded-full my-auto" height={40} width={40} alt="logo"/>
            <span className="self-center text-2xl text-black font-semibold whitespace-nowrap">
              ThinkLabs
            </span>
        </Link>
        <div className="flex items-center">
          <a href="https://thinklabs-chatbot.vercel.app/">
            <Bot className="mx-3" />
          </a>
          <ThemeToggle className="mr-4" />
          <p className="text-lg font-bold text-gray-800 dark:text-white mr-4">
            Streak: 2 🔥
          </p>
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
