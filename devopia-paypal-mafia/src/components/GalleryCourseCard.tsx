import { Chapter, Course, Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  course: Course & {
    chapters: (Chapter & {
      videos: Video[];
    })[];
  };
};

const GalleryCourseCard = async ({ course }: Props) => {
  return (
    <>
      <div className="border rounded-lg border-secondary">
        <div className="relative">
          <Link
            href={`/course/${course.id}/0/0`}
            className="relative block w-fit"
          >
            <Image
              src={course.image || ""}
              className="object-cover w-full max-h-[300px] rounded-t-lg"
              width={300}
              height={300}
              alt="picture of the course"
            />
            <span className="absolute px-2 py-1 text-white rounded-md bg-black/60 w-fit bottom-2 left-2 right-2">
              {course.name}
            </span>
          </Link>
        </div>

        <div className="p-4">
          <h4 className="text-sm text-secondary-foreground/60">Units</h4>
          <div className="space-y-1">
            {course.chapters?.map((chapter, chapterIndex) => {
              return (
                <Link
                  href={`/course/${course.id}/${chapterIndex}/0`}
                  key={chapter.id}
                  className="block underline w-fit"
                >
                  {chapter.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCourseCard;