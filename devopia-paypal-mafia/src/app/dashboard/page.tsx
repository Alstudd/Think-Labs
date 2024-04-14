import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import Navbar from "@/components/Navbar";
import CreateACourseCard from "@/components/dashboard/CreateACourseCard";
import CourseGalleryCard from "@/components/dashboard/CourseGalleryCard";
import { BentoGridSecondDemo } from "@/components/main/BentoGridSecondDemo";
import Image from "next/image";

type Props = {};

export const metadata = {
  title: "Dashboard 👨‍💻",
  description: "Dashboard",
};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div>
      <Navbar />
      <main className="p-8 pt-20 mx-auto max-w-7xl">
        <div className="flex items-center">
          <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
          <DetailsDialog />
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
          <CreateACourseCard />
          <CourseGalleryCard />
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <QuizMeCard />
          <HistoryCard />
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
          <HotTopicsCard />
          <RecentActivityCard />
        </div>
        <div className="w-[80%] mx-auto py-10 text-black dark:text-white">
          <h1 className="text-4xl font-bold mb-3 ">
            Rethink the way you Learn with the fun approach
          </h1>
          <p className="">
            Learning is never monotonous if you have the right motivation
          </p>
          <BentoGridSecondDemo />
        </div>
        <div className="my-10 w-[80%] mx-auto grid grid-cols-2 gap-3">
          <div className="my-auto text-black">
            <div className=" text-4xl font-bold mb-3">
              Unlock the Joy of your child&apos;s Learning through Interactive
              Learning
            </div>
            <p className="">
              Discover the power of interactive education that engages children
              and makes learning fun. Our platform combines gamification with
              educational content to create an immersive experience that sparks
              curiosity and fosters a love for learning
            </p>
            <div className="my-7">
              <a
                href="/evaluators-dashboard"
                className="px-5 py-2 rounded-md text-black border my-7 w-[30%] border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1"
              >
                Parental Dashboard
              </a>
            </div>
          </div>

          <Image
            src="/newWorld.png"
            className=""
            width={500}
            height={500}
            alt="World"
          />
        </div>
        <div className="my-10 w-[80%] mx-auto grid grid-cols-2 gap-3">
          <Image
            src="/dinoRoller.jpeg"
            className=""
            width={500}
            height={500}
            alt="World"
          />
          <div className="my-auto text-black">
            <div className=" text-4xl font-bold mb-3">
              Want to learn a new Language
            </div>
            <p className="mb-7">Look no further, we got you...</p>

            <form className="w-[200px]">
              <select
                id="type"
                className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Japanese</option>
              </select>

              <a
                href="https://thinklabs-ai-teacher.vercel.app/"
                className="px-5 py-2 rounded-md text-black border my-5 border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1"
              >
                Submit
              </a>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
