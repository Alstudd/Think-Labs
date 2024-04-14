import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const CourseSideBar = ({ data, currentChapterId, changeCurrUnit }) => {
  // const chapters = []
  // const videos = []
  return (
    <div className="w-[400px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl bg-secondary">
      <h1 className="text-4xl font-bold">Course Name</h1>
      {data
        ? data.map((ele, i) => (
            <div key={i} className="mt-4">
              <h2 className="text-sm uppercase text-secondary-foreground/60">
                Chapter {i + 1}
              </h2>
              <h2 className="text-2xl font-bold">{ele.name}</h2>
              {ele.children.map((cele, index) => (
                <div key={index}>
                  <div
                    onClick={()=>{changeCurrUnit(cele.id)}}
                    className={cn("text-secondary-foreground/60", {
                      "text-green-500 font-bold": cele.id === currentChapterId,
                    })}
                  >
                    {cele.name}
                  </div>
                </div>
              ))}
              <Separator className="mt-2 text-gray-500 bg-gray-500" />
            </div>
          ))
        : ""}
    </div>
  );
};

export default CourseSideBar;
