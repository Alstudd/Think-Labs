import CourseSideBar from "@/components/CourseSideBar";
import MainVideoSummary from "@/components/MainVideoSummary";
import Navbar from "@/components/Navbar";
import QuizCards from "@/components/QuizCards";
import { prisma } from "@/lib/db";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

// type Props = {
//   params: {
//     slug: string[];
//   };
// };

const CoursePage = async ({params}) => {
  const id = params.id
  console.log(id)
  const res = await axios.post("/api/getCourses", {courseId: id})
//   const [courseId, chapterIndexParam, videoIndexParam] = slug;
//   const course = await prisma.course.findUnique({
//     where: { id: courseId },
//     include: {
//       chapters: {
//         include: {
//           videos: {
//             include: { quests: true },
//           },
//         },
//       },
//     },
//   });
//   if (!course) {
//     return redirect("/gallery");
//   }
//   let chapterIndex = parseInt(chapterIndexParam);
//   let videoIndex = parseInt(videoIndexParam);

//   const chapter = course.chapters[chapterIndex];
//   if (!chapter) {
//     return redirect("/gallery");
//   }
//   const video = chapter.videos[videoIndex];
//   if (!video) {
//     return redirect("/gallery");
//   }
//   const nextChapter = chapter.videos[videoIndex + 1];
//   const prevChapter = chapter.videos[videoIndex - 1];
  return (
    <div>
      <Navbar />
      <CourseSideBar data={res.data} />
      <div>
        <div className="ml-[400px] px-8">
          <div className="flex">
            <MainVideoSummary />
            {/* <QuizCards /> */}
          </div>

          <div className="flex-[1] h-[1px] mt-4 text-gray-500 bg-gray-500" />
          <div className="flex pb-8">
            {/* {prevChapter && ( */}
              <Link
                // href={`/course/${course.id}/${chapterIndex}/${videoIndex - 1}`}
                href={"#"}
                className="flex mt-4 mr-auto w-fit"
              >
                <div className="flex items-center">
                  <ChevronLeft className="w-6 h-6 mr-1" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-secondary-foreground/60">
                      Previous
                    </span>
                    <span className="text-xl font-bold">
                      {/* {prevChapter.name} */}
                      Prev Name
                    </span>
                  </div>
                </div>
              </Link>
            {/* )} */}

            {/* {nextChapter && ( */}
              <Link
                // href={`/course/${course.id}/${chapterIndex}/${videoIndex + 1}`}
                href={"#"}
                className="flex mt-4 ml-auto w-fit"
              >
                <div className="flex items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-secondary-foreground/60">
                      Next
                    </span>
                    <span className="text-xl font-bold">
                      {/* {nextChapter.name} */}
                      Next Name
                    </span>
                  </div>
                  <ChevronRight className="w-6 h-6 ml-1" />
                </div>
              </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;